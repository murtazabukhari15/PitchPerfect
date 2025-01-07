import React, { Component } from "react";
import {View , Text, ImageBackground, TouchableOpacity} from 'react-native';
import { withRouter } from "../../../component/withRouter.js";

class Fantasy extends Component {
    render(){
        return(
           <View style={{marginHorizontal:'5%',marginVertical:'5%'}}>
               <Text style={{textAlign:'center',fontSize:24,fontWeight:600,marginBottom:'6%'}}>Fantasy Cricket</Text>
                <TouchableOpacity style={{marginBottom:'5%'}}
                    onPress={()=>this.props.router.navigate("/home/fantasy/ongoingFantasyScreen")}
                >
                    <ImageBackground source={require('../../../assets/images/ongoingfantasy.png')} resizeMode='cover' style={{padding:40}} imageStyle={{borderRadius:20}}>
                        <Text style={{textAlign:'center',color:'white',fontWeight:600,fontSize:20}}>Ongoing Fantasy</Text>
                    </ImageBackground>
                </TouchableOpacity>
           
                <TouchableOpacity style={{marginBottom:'5%'}}
                    onPress={()=>this.props.router.navigate("/home/fantasy/createNewScreen")}
                >
                    <ImageBackground source={require('../../../assets/images/createNewFantasy.png')} resizeMode='cover' style={{padding:40}} imageStyle={{borderRadius:20}}>
                        <Text style={{textAlign:'center',color:'white',fontWeight:600,fontSize:20}}>Create New</Text>
                    </ImageBackground>
                </TouchableOpacity>
           </View>
        )
    }
}
export default withRouter(Fantasy)
