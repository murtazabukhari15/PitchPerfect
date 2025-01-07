import React, { Component } from "react";
import {View , Text, ImageBackground, TouchableOpacity} from 'react-native';
import { withRouter } from "../../../component/withRouter.js";

class Fixture extends Component {
    render(){
        return(
           <View style={{marginHorizontal:'5%',marginVertical:'5%'}}>
               <Text style={{textAlign:'center',fontSize:24,fontWeight:600,marginBottom:'6%'}}>Upcoming Fixture</Text>
                <TouchableOpacity style={{marginBottom:'5%'}}
                    onPress={()=>this.props.router.navigate('/home/fixtures/tournamentScreen')}
                >
                    <ImageBackground source={require('../../../assets/images/tournmentLogo.png')} resizeMode='cover' style={{padding:40}} imageStyle={{borderRadius:20}}>
                        <Text style={{textAlign:'center',color:'white',fontWeight:600,fontSize:20}}>Tournament</Text>
                    </ImageBackground>
                </TouchableOpacity>
           
                <TouchableOpacity style={{marginBottom:'5%'}}
                    onPress={()=>this.props.router.navigate('/home/fixtures/leaguesScreen')}
                >
                    <ImageBackground source={require('../../../assets/images/leaguesLogo.png')} resizeMode='cover' style={{padding:40}} imageStyle={{borderRadius:20}}>
                        <Text style={{textAlign:'center',color:'white',fontWeight:600,fontSize:20}}>Leagues</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity style={{marginBottom:'5%'}}
                    onPress={()=>this.props.router.navigate('/home/fixtures/seriesScreen')}

                >
                    <ImageBackground source={require('../../../assets/images/seriesLogo.png')} resizeMode='cover' style={{padding:40}} imageStyle={{borderRadius:20}}>
                        <Text style={{textAlign:'center',color:'white',fontWeight:600,fontSize:20}}>Series</Text>
                    </ImageBackground>
                </TouchableOpacity>
           </View>
        )
    }
}
export default withRouter(Fixture)
