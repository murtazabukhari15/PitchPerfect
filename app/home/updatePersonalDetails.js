import React, { Component } from "react";
import {View , Text, StyleSheet, TouchableOpacity, Image, ScrollView,KeyboardAvoidingView,SafeAreaView} from 'react-native';
import TextInputWithLabel from '../../component/textInputWithLabel.js';
import { withRouter } from "../../component/withRouter.js";
import { ShowModal } from "../../component/modalComponent.js";
import {Post} from '../../utility/request.js';

class UpdatePersonalDetails extends Component {
    constructor(props){
        super(props);
        this.nameRef = React.createRef(null);
    }

    submit = async () => {
        let email= this.props.localQuery.email ?? '';
        let nameRef= this.passRef.current.state.input;

        if(nameRef.length  == 0){
            ShowModal({
                title: 'Failure',
                message: 'Please enter name.'
              }); 
            return;
        }
        
        const url = '/api/users/forgetPassword'; // Replace with your actual API URL
 
        const requestBody = {
            email: email, // Replace with the actual email,
            name: nameRef
        };
        try {
                const response = await Post(url,requestBody);
                if (response.Status) {
                    ShowModal({
                        title: 'Success',
                        message: 'Name Updated Successfully.'
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
                                <Text style={{fontSize:27,color:'#003366',fontWeight:'800',textAlign:'center'}}>Update your Personal Details</Text>
                            </View>

                            <TextInputWithLabel label="Name" placeholder="Please enter new name." ref={this.nameRef} ></TextInputWithLabel>

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

export default withRouter(UpdatePersonalDetails)

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

