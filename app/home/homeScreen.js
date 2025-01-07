import { useRouter } from 'expo-router';
import * as React from 'react';
import { View,Text,Image,ImageBackground, TouchableOpacity } from "react-native";

export default function home() {
  const router = useRouter();
  return (
    <ImageBackground source={require('../../assets/images/homepageBackground.png')} resizeMode='cover' style={{flex:1,width:null,height:null}}>
      <View
        style={{
          flex: 1,
          justifyContent:'center',
          marginTop:'15%'
        }}
        > 
        <View style={{flex:1, justifyContent:'center'}}>
            <View style={{alignSelf:'center'}}>
              <TouchableOpacity style={{backgroundColor:'green',width:'38%',padding:40,borderRadius:'100%'}}
                onPress={()=> router.navigate("/home/news/newsScreen")}
              >
                <Image source={require('../../assets/images/newsHomePage.png')} resizeMode='contains' style={{alignSelf:'center'}}></Image>
                <Text style={{color:'white',textAlign:'center',fontSize:16,fontWeight:600}}>News Update</Text>
              </TouchableOpacity>
            </View>
          
            <View style={{flexDirection:'row',justifyContent:'space-evenly',width:'100%'}}>
              <TouchableOpacity style={{backgroundColor:'#7E57C2',width:'33%',padding:25,borderRadius:'100%',alignItems:'center'}}
                onPress={()=>router.navigate("/home/fantasy/fantasyScreen")}
              >
                <Image source={require('../../assets/images/fantasyHomePage.png')} style={{margin:5}}></Image>
                <Text style={{color:'white',textAlign:'center',fontSize:14,fontWeight:600}}>Play Fantasy</Text>
             </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:'#42A5F5',width:'30%',height:'80%',padding:20,borderRadius:'100%',alignItems:'center'}}
                onPress={()=> router.navigate("/home/fixtures/fixtureScreen")}
              >
                <Image source={require('../../assets/images/fixtureHomePage.png')}></Image>
                <Text style={{color:'white',textAlign:'center',fontSize:12,fontWeight:600}}>Upcoming Fixtures</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          <View style={{flex:-1,alignItems:'flex-end',marginBottom:5}}>
            <Image source={require('../../assets/images/cricLogoHomePage.png')}></Image>
          </View>
      </View>
    </ImageBackground>
  );
}
