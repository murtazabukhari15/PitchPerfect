import React, { Component } from "react";
import {View , Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView,SafeAreaView} from 'react-native';
import TextInputWithLabel from '../../component/textInputWithLabel.js';
import { withRouter } from "../../component/withRouter.js";
import { ShowModal } from "../../component/modalComponent.js";
import {Post} from '../../utility/request.js';

class UpdateEmail extends Component {
    constructor(props){
        super(props);
        this.emailRef = React.createRef(null);
    }

    submit = async () => {
        let email= this.emailRef.current.state.input;
        if(email.length == 0){
            ShowModal({
                title: 'Failure',
                message: 'Please enter email.'
              }); 
            return;
        }

        const url = '/api/users/otp'; // Replace with your actual API URL
        const requestBody = {
            email: email // Replace with the actual email
        };
        try {
            const response = await Post(url,requestBody);
            if (response.Status) {
                ShowModal({
                    title: 'Success',
                    message: 'Email Updated Succesfully.'
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
                <KeyboardAvoidingView style={css.container}>
                        <View style={{marginTop:'17%'}}>
                            <View style={{alignItems:'center',marginBottom:35}}>
                                <Text style={{fontSize:27,color:'#003366',fontWeight:'800',textAlign:'center'}}>Update Email</Text>
                            </View>
                            <TextInputWithLabel label="Email" placeholder="ex: ahmed@email.com" ref={this.emailRef}></TextInputWithLabel>
                            <TouchableOpacity style={css.btnStyle} onPress={()=> this.submit()}>
                                <Text style={css.txtStyle}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}

export default withRouter(UpdateEmail)

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
        height:'15%',
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

