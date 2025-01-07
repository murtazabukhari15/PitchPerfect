import React, { Component } from "react";
import {View , Text, StyleSheet, TouchableOpacity, Image, ScrollView,KeyboardAvoidingView,SafeAreaView} from 'react-native';
import TextInputWithLabel from '../../component/textInputWithLabel.js';
import { withRouter } from "../../component/withRouter.js";
import { ShowModal } from "../../component/modalComponent.js";
import {Post} from '../../utility/request.js';

class ResetPassword extends Component {
    constructor(props){
        super(props);
        this.state = {
            isSuccess: false
        }
        this.passRef = React.createRef(null);
        this.confirmPassRef = React.createRef(null);
        this.codeRef = React.createRef(null);
    }

    submit = async () => {
        let email= this.props.localQuery.email ?? '';
        let otp= this.codeRef.current.state.input;
        let pass= this.passRef.current.state.input;
        let confirmPass= this.confirmPassRef.current.state.input;
        if(otp.length == 0){
            ShowModal({
                title: 'Failure',
                message: 'Plese enter otp code.'
            }); 

        }

        if(email.length == 0){
            ShowModal({
                title: 'Failure',
                message: 'Email not found returning back.',
                onCancel:()=>this.props.router.navigate("/auth/forgetPasswordScreen")
            }); 
            return;
        }

        if(pass != confirmPass){
            ShowModal({
                title: 'Failure',
                message: 'Password not matched.'
              }); 
            return;
        }
        
        const verifyOtp = '/api/users/verifyOtp'; 
        const url = '/api/users/forgetPassword'; // Replace with your actual API URL
 
        const otpRequestBody = {
            email: email, // Replace with the actual email,
            otp: otp
        };
 
        const requestBody = {
            email: email, // Replace with the actual email,
            newPassword: pass
        };
        try {
            const optResponse = await Post(verifyOtp,otpRequestBody);
            if(optResponse.Status){
                const response = await Post(url,requestBody);
                if (response.Status) {
                    this.setState({isSuccess:true});
                    return;    
                } 
            }else{
                ShowModal({
                    title: 'Failure',
                    message: optResponse.Message
                  }); 
            }
        } catch (error) {
            ShowModal({
                title: 'Failure',
                message: error
              });  
        }
    }
    render(){
        if(this.state.isSuccess){
            return(
            <View style={css.container}>
                <View style={{marginTop:'14%',alignItems:'center'}}>
                    <Image source={require("../../assets/images/success-llustration.png")} style={{marginBottom:'10%'}}></Image>
                    <View style={{alignItems:'center',marginBottom:'3%'}}>
                        <Text style={{fontSize:30,color:'#003366',fontWeight:'700',textAlign:'center'}}>Password Changed!</Text>
                    </View>
                    <Text style={{ color:'grey',marginBottom:15,fontSize:12,marginBottom:'5%',width:'50%',textAlign:'center'}}>
                        Your password has been changed successfully.
                    </Text>
                    <TouchableOpacity style={[css.btnStyle,{width:'75%'}]} onPress={()=>this.props.router.navigate('auth/loginScreen')}>
                        <Text style={css.txtStyle}>Back to Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
            ) 
        } 
        else{
            return(
                <SafeAreaView>
                <KeyboardAvoidingView>
                    <ScrollView contentContainerStyle= {css.container}>
                        <View style={{marginTop:'14%'}}>
                            <View style={{alignItems:'center',marginBottom:35}}>
                                <Text style={{fontSize:27,color:'#003366',fontWeight:'800',textAlign:'center'}}>Reset your Password</Text>
                            </View>
                            <TextInputWithLabel label="Code" placeholder="Four digit code" ref={this.codeRef}></TextInputWithLabel>
                            <Text style={{marginHorizontal:20, color:'grey',marginBottom:15}}>
                                <Text style={{color:'red',fontSize:11}}> * </Text>
                                We will send you a four digit code on your email.
                            </Text>

                            <TextInputWithLabel label="Password" placeholder="********" hasImage={true} ref={this.passRef} isSecure={true}></TextInputWithLabel>
                            <TextInputWithLabel label="Confirm Password" placeholder="********" hasImage={true} ref={this.confirmPassRef} isSecure={true}></TextInputWithLabel>

                            <TouchableOpacity style={[css.btnStyle,{height:'12%'}]} onPress={()=> this.submit()}>
                                <Text style={css.txtStyle}>Reset Password</Text>
                            </TouchableOpacity>
                        </View>

                    </ScrollView>
                </KeyboardAvoidingView>
                </SafeAreaView>
            )
        }
    }
}

export default withRouter(ResetPassword)

const css = StyleSheet.create({
    container:{
        backgroundColor:'white',
        height:'100%'
    },
    btnStyle:{
        backgroundColor:"#FD7702",
        borderColor:'white',
        marginHorizontal:20,
        borderRadius:10,
        height:'14%',
        justifyContent:'center',
        margintop:15,
    },
    txtStyle:{
        color:'white',
        textAlign:'center'
    },
    iconStyle:{
        borderRadius:50,
        padding:15,
        borderWidth:2,
        borderColor:'#FD7702',
        backgroundColor:'#FEE2E2',
        margin:5
    },
    checkbox:{
        margin:8,
        borderColor:'#FD7702',
    }
    
});

