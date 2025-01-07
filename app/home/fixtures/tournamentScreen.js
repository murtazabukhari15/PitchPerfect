import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';

class Tournament extends Component {
    openWebBrowser = async (url) => {
        try {
          await WebBrowser.dismissBrowser();
          const result = await WebBrowser.openBrowserAsync(url);
        } catch (error) {
          console.error('Failed to open browser:', error);
        }
      }
  
    render(){
        return(
            <ScrollView style={{marginHorizontal:'5%',marginVertical:'5%'}}>
              <Text style={styles.title}>Icc Champions Trophy 2025</Text>
              <Image source={require("../../../assets/images/tournmentTrophyImage.png")} style={{borderRadius:50,width:'100%',height:'300'}} resizeMode='cover'></Image>
              <Text>{new Date().toLocaleDateString("en-US")}</Text>
              <View style={{borderBottomColor:'lightgrey',borderBottomWidth:2,marginVertical:8}}></View>          
               <Text style={styles.description}>Description</Text>
               <Text style={styles.body}>
               The 2025 ICC Champions Trophy will be the ninth edition of the ICC Champions Trophy, a One Day International (ODI) cricket tournament. It will be organised by the International Cricket Council (ICC) and will be contested by the top eight ranked men's national teams from the 2023 Cricket World Cup. The tournament will be hosted by Pakistan from 19 February to 9 March 2025. Pakistan are the defending champions, having won the previous edition in 2017.
               </Text>
               <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <TouchableOpacity onPress={()=>this.openWebBrowser("https://propakistani.pk/champions-trophy-2025/schedule/")}>
                        <Text style={styles.button}>Scorecard</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.openWebBrowser("https://propakistani.pk/champions-trophy-2025/points-table/")}>
                        <Text style={[styles.button,{alignItems:'flex-end'}]}>Table</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}
export default Tournament


const styles = StyleSheet.create({
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 16,
      textAlign:'center'
    }, 
    description: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 16,
    }, 
    body: {
        fontSize: 16,
        color: 'black',
        marginBottom: 16,
    },
    button: {
      color:'blue',
      textDecorationLine:'underline'
   }
  });
  