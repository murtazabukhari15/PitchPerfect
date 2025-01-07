import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    SafeAreaView,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';
import TextInputWithLabel from '../../../component/textInputWithLabel.js';

class CreatePrivateLeague extends Component {
    render(){
        return(
        <KeyboardAvoidingView>
            <ScrollView style={{marginHorizontal:'5%',marginVertical:'5%'}}>
                <View>
                    <Text style={{fontWeight:'bold',fontSize:20,textAlign:'center',marginBottom:'3%'}}>Create a Private League</Text>
                    <TouchableOpacity onPress={()=>null}>
                        <ImageBackground source={require("../../../assets/images/newOrteamCreated.png")} 
                                    resizeMode='cover'
                                    style={{ width: '100%',
                                    height: 150,
                                    justifyContent:'center'}}
                                    imageStyle={{borderRadius:50}}>
                            <Text style={{color:'white',textAlign:'center',fontSize:20,fontWeight:'bold'}}>Create a new</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                        <TextInputWithLabel placeholder="League Name" additionalStyle={{borderRadius:0,backgroundColor:'white',borderColor:'white',marginTop:'5%'}}></TextInputWithLabel>
                        <TextInputWithLabel placeholder="Series" additionalStyle={{borderRadius:0,backgroundColor:'white',borderColor:'white',marginTop:'3%'}}></TextInputWithLabel>
                        <TextInputWithLabel placeholder="Link code" additionalStyle={{borderRadius:0,backgroundColor:'white',borderColor:'white',marginTop:'3%'}}></TextInputWithLabel>
                </View>

            </ScrollView>
        </KeyboardAvoidingView>
        )
    }
}
export default CreatePrivateLeague
