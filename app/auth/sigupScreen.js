import React, { Component } from "react";
import {View , Text, StyleSheet, TouchableOpacity, ScrollView,KeyboardAvoidingView,SafeAreaView} from 'react-native';
import TextInputWithLabel from '../../component/textInputWithLabel.js';
import HrefComponent from '../../component/hrefComponent.js';
import Ionicons from '@expo/vector-icons/Ionicons';
import Checkbox from 'expo-checkbox';
import { withRouter } from "../../component/withRouter.js";
import {Post} from '../../utility/request.js';
import { ShowModal } from "../../component/modalComponent.js";

class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            isChecked: false
        }
        this.emailRef = React.createRef(null);
        this.passRef = React.createRef(null);
        this.confirmPassRef = React.createRef(null);
        this.nameRef = React.createRef(null);
    }
    setChecked = (checked) => this.setState({ isChecked: checked });

    register = async () => {
        let pass= this.passRef.current.state.input;
        let confirmPass= this.confirmPassRef.current.state.input;

        if(pass != confirmPass){
            ShowModal({
                title: 'Failure',
                message: 'Password not matched.'
              }); 
            return;
        }

        if(!this.state.isChecked){
            ShowModal({
                title: 'Failure',
                message: 'Please accept terms & policy.'
              }); 
            return;
        }

        const url = '/api/users/register'; // Replace with your actual API URL
        const requestBody = {
            email: this.emailRef.current.state.input, // Replace with the actual email
            password: this.passRef.current.state.input  // Replace with the actual password
        };
        try {
            const response = await Post(url,requestBody);
            if (response.Status) {
                this.props.router.navigate("/auth/loginScreen");
            } 
        } catch (error) {
            ShowModal({
                title: 'Failure',
                message: error
              });  
        }
    }


    render(){
        const {isChecked} = this.state;
        return(
            <SafeAreaView>
                <KeyboardAvoidingView>
                    <ScrollView contentContainerStyle={css.container}>
                        <View>
                            <View style={{alignItems:'center',marginBottom:35}}>
                                <Text style={{fontSize:27,color:'#003366',fontWeight:'800',textAlign:'center'}}>Create your Account</Text>
                            </View>
                            <TextInputWithLabel label="Name" placeholder="ex: ahmed raza" ref={this.nameRef}></TextInputWithLabel>
                            <TextInputWithLabel label="Email" placeholder="ex: ahmed@email.com" ref={this.emailRef}></TextInputWithLabel>
                            <TextInputWithLabel label="Password" placeholder="**********" hasImage={true} ref={this.passRef} isSecure={true}></TextInputWithLabel>
                            <TextInputWithLabel label="Confirm Password" placeholder="**********" hasImage={true} ref={this.confirmPassRef} isSecure={true}></TextInputWithLabel>
                            <TouchableOpacity style={{flexDirection:'row', justifyContent:'center',marginBottom:15}}
                                onPress={()=>this.setChecked(!this.state.isChecked)}
                            >
                                <Checkbox style={css.checkbox} value={isChecked} onValueChange={this.setChecked} />
                                <Text style={{textAlign:'center'}}>I understood the <HrefComponent text="terms & policy." textStyle={{textAlign:'right',top:7,color:'#FF8E00'}}></HrefComponent></Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={css.btnStyle} onPress={()=> this.register()}>
                                <Text style={css.txtStyle}>Sign Up</Text>
                            </TouchableOpacity>
                            <Text style={{margin:15,textAlign:'center',color:'grey'}}>or sign in with</Text>
                            
                            <View style={{flexDirection:'row',justifyContent:'center'}}>
                                <TouchableOpacity>
                                    <Ionicons name="logo-google" size={32} color="#36A423" style={css.iconStyle}/>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Ionicons name="logo-apple" size={32} color="black" style={css.iconStyle}/>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Ionicons name="logo-facebook" size={32} color="blue" style={css.iconStyle}/>
                                </TouchableOpacity>
                            </View>
                            <Text style={{textAlign:'center', color:'grey'}}>Have an account? <HrefComponent text="Sign In" textStyle={{top:7,color:'#FF8E00'}} pressMethod ={()=>this.props.router.navigate('auth/loginScreen')}></HrefComponent></Text>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}

export default withRouter(Signup)

const css = StyleSheet.create({
    container:{
        backgroundColor:'white',
        justifyContent:'center',
        height:'100%'
    },
    btnStyle:{
        backgroundColor:"#FD7702",
        borderColor:'white',
        marginHorizontal:20,
        borderRadius:10,
        height:'7%',
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