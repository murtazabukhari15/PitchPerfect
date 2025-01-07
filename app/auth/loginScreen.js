import React, { Component } from "react";
import {View , Text, StyleSheet, TouchableOpacity, Image, ScrollView,KeyboardAvoidingView,SafeAreaView} from 'react-native';
import TextInputWithLabel from '../../component/textInputWithLabel.js';
import HrefComponent from '../../component/hrefComponent.js';
import Ionicons from '@expo/vector-icons/Ionicons';
import {withRouter} from '../../component/withRouter.js';
import {Post} from '../../utility/request.js';
import { ShowModal } from "../../component/modalComponent.js";
import { GlobalContextObject } from "../../utility/globalStorage.js";

class Login extends Component {
    static contextType = GlobalContextObject; // Connect the context

    constructor(props){
        super(props);
        this.emailRef = React.createRef(null);
        this.passRef = React.createRef(null);
    }

    login = async () => {
        const { setGlobalData } = this.context; // Access context methods
        const url = '/api/users/login'; // Replace with your actual API URL
        const requestBody = {
            email: this.emailRef.current.state.input, // Replace with the actual email
            password: this.passRef.current.state.input  // Replace with the actual password
        };
        try {
            const response = await Post(url,requestBody);
            if (response.Status) {
                setGlobalData({email:requestBody.email});
                this.props.router.navigate({pathname:"home",params:{email:requestBody.email}});
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
            <SafeAreaView >
                <KeyboardAvoidingView>
                    <ScrollView contentContainerStyle={css.container}>
                        <View>
                            <View style={{alignItems:'center',marginBottom:35}}>
                                <Image source={require('../../assets/images/loginLogo.png')} style={{margin:15}}></Image>
                                <Text style={{fontSize:27,color:'#003366',fontWeight:'800',textAlign:'center'}}>Welcome Back!</Text>
                                <Text style={{fontSize:16,textAlign:'center'}}>Sign in your account</Text>
                            </View>
                            <TextInputWithLabel label="Email" placeholder="ex: ahmed@email.com" ref={this.emailRef}></TextInputWithLabel>
                            <TextInputWithLabel label="Password" placeholder="**********" hasImage={true} ref={this.passRef} isSecure={true}></TextInputWithLabel>
                            <HrefComponent text="Forget Password?" textStyle={{textAlign:'right',marginEnd:25,color:'red',marginBottom:25}} pressedColor={{color:'blue'}} pressMethod ={()=>this.props.router.navigate("auth/forgetPasswordScreen")}></HrefComponent>
                            <TouchableOpacity style={css.btnStyle} onPress={()=>this.login()}>
                                <Text style={css.txtStyle}>Sign In</Text>
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
                            <Text style={{textAlign:'center', color:'grey'}}>Don't have an account? <HrefComponent text="SIGN UP" textStyle={{top:7,color:'#FF8E00'}} pressMethod ={()=>this.props.router.navigate("auth/sigupScreen")}></HrefComponent></Text>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}

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
    }
});

export default withRouter(Login)
