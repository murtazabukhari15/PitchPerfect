import React, { Component } from "react";
import {View , Text, ImageBackground, TouchableOpacity} from 'react-native';
import { withRouter } from "../../../component/withRouter.js";

class News extends Component {
    render(){
        return(
           <View style={{marginHorizontal:'5%',marginVertical:'5%'}}>
               <Text style={{textAlign:'center',fontSize:24,fontWeight:600,marginBottom:'6%'}}>News Update</Text>
                <TouchableOpacity style={{marginBottom:'5%'}}
                    onPress={()=>this.props.router.navigate('/home/news/blogScreen')}
                >
                    <ImageBackground source={require('../../../assets/images/newsupdate.png')} resizeMode='cover' style={{padding:40}} imageStyle={{borderRadius:20}}>
                        <Text style={{textAlign:'center',color:'white',fontWeight:600,fontSize:20}}>Blogs</Text>
                    </ImageBackground>
                </TouchableOpacity>
           
                <TouchableOpacity style={{marginBottom:'5%'}}
                    onPress={()=>this.props.router.navigate('/home/news/headlineScreen')}
                >
                    <ImageBackground source={require('../../../assets/images/headline.png')} resizeMode='cover' style={{padding:40}} imageStyle={{borderRadius:20}}>
                        <Text style={{textAlign:'center',color:'white',fontWeight:600,fontSize:20}}>HeadLines</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity style={{marginBottom:'5%'}}
                    onPress={()=>this.props.router.navigate('/home/news/videoScreen')}
                >
                    <ImageBackground source={require('../../../assets/images/videoscreenlogo.png')} resizeMode='cover' style={{padding:40}} imageStyle={{borderRadius:20}}>
                        <Text style={{textAlign:'center',color:'white',fontWeight:600,fontSize:20}}>Videos</Text>
                    </ImageBackground>
                </TouchableOpacity>
           </View>
        )
    }
}
export default withRouter(News)
