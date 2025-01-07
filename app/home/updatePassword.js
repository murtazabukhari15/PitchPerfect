import React, { Component } from "react";
import {View , Text, StyleSheet, TouchableOpacity, Image, ScrollView,KeyboardAvoidingView,SafeAreaView} from 'react-native';
import TextInputWithLabel from '../../component/textInputWithLabel.js';
import { withRouter } from "../../component/withRouter.js";
import { ShowModal } from "../../component/modalComponent.js";
import {Post} from '../../utility/request.js';

class UpdatePassword extends Component {
    constructor(props){
        super(props);
        this.passRef = React.createRef(null);
        this.confirmPassRef = React.createRef(null);
    }

    submit = async () => {
        let email= this.props.localQuery.email ?? '';
        let pass= this.passRef.current.state.input;
        let confirmPass= this.confirmPassRef.current.state.input;

        if(pass != confirmPass){
            ShowModal({
                title: 'Failure',
                message: 'Password not matched.'
              }); 
            return;
        }
        
        const url = '/api/users/forgetPassword'; // Replace with your actual API URL
 
        const requestBody = {
            email: email, // Replace with the actual email,
            newPassword: pass
        };
        try {
                const response = await Post(url,requestBody);
                if (response.Status) {
                    ShowModal({
                        title: 'Success',
                        message: 'Password Updated Successfully.'
                    }); 
                    return;    
                 }else{
                    ShowModal({
                        title: 'Failure',
                        message: response.Message
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
            return(
                <SafeAreaView>
                <KeyboardAvoidingView>
                    <ScrollView contentContainerStyle= {css.container}>
                        <View style={{marginTop:'14%'}}>
                            <View style={{alignItems:'center',marginBottom:35}}>
                                <Text style={{fontSize:27,color:'#003366',fontWeight:'800',textAlign:'center'}}>Update your Password</Text>
                            </View>

                            <TextInputWithLabel label="Password" placeholder="********" hasImage={true} ref={this.passRef} isSecure={true}></TextInputWithLabel>
                            <TextInputWithLabel label="Confirm Password" placeholder="********" hasImage={true} ref={this.confirmPassRef} isSecure={true}></TextInputWithLabel>

                            <TouchableOpacity style={[css.btnStyle,{height:'12%'}]} onPress={()=> this.submit()}>
                                <Text style={css.txtStyle}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
                </SafeAreaView>
            )
        }
}

export default withRouter(UpdatePassword)

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

