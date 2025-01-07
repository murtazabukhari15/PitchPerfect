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

export default class Blogs extends Component {
    openWebBrowser = async (url) => {
        try {
          await WebBrowser.dismissBrowser();
          const result = await WebBrowser.openBrowserAsync(url);
        } catch (error) {
          console.error('Failed to open browser:', error);
        }
      }
  
    render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Blogs</Text>

        <View style={styles.card}>
            <View style={{flexDirection:'row'}}>
                <View style={{width:'40%',borderRadius:30,marginEnd:'5%'}}>
                    <Image source={require("../../../assets/images/shaheenBlog.png")} style={{width:null,height:null,flex:1,borderRadius:10}} resizeMode='stretch'></Image>
                </View>
                <View style={{width:'60%'}}>
                    <Text style={styles.cardTitle}>
                    "Just Missed His Face": Ramiz Raja Makes Startling Comment As Shaheen Afridi Avoids Serious Injury
                    </Text>
                    <Text style={styles.cardDescription}>Updated on: December 15, 2024</Text>
                    <View style={{borderBottomColor:'lightgrey',borderBottomWidth:1,marginVertical:8}}></View>          

                    <Text style={styles.cardDescription}>
                    Former Pakistan cricketer and Pakistan Cricket Board (PCB) chairman Ramiz Raja said a rather controversial line during commentary of his nation's second T20I game against South Africa. During the game, pacer Shaheen 
                    </Text>
                </View>
            </View>
          <View style={{borderBottomColor:'lightgrey',borderBottomWidth:1,marginVertical:8}}></View>          
          <TouchableOpacity onPress={()=>this.openWebBrowser("https://sports.ndtv.com/cricket/just-missed-his-face-ramiz-raja-makes-startling-comment-as-shaheen-afridi-avoids-serious-injury-7248257")}>
            <Text style={styles.button}>Read more</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
            <View style={{flexDirection:'row'}}>
                <View style={{width:'40%',borderRadius:30,marginEnd:'5%'}}>
                    <Image source={require("../../../assets/images/joeBurnsBlog.png")} style={{width:null,height:null,flex:1,borderRadius:10}} resizeMode='stretch'></Image>
                </View>
                <View style={{width:'60%'}}>
                    <Text style={styles.cardTitle}>
                    Joe Burns: Leading renaissance in Italian cricket    
                    </Text>
                    <Text style={styles.cardDescription}>Updated on: December 15, 2024</Text>
                    <View style={{borderBottomColor:'lightgrey',borderBottomWidth:1,marginVertical:8}}></View>          

                    <Text style={styles.cardDescription}>
                    “It was our first training session. So, we turned up and it was in the middle of a tomato farm,” Burns recalls in a conversation with this daily. “Associate cricket in general, but in particular in Europe, the grounds are privately owned
                    </Text>
                </View>
            </View>
          <View style={{borderBottomColor:'lightgrey',borderBottomWidth:1,marginVertical:8}}></View>          
          <TouchableOpacity onPress={()=>this.openWebBrowser("https://sports.ndtv.com/cricket/just-missed-his-face-ramiz-raja-makes-startling-comment-as-shaheen-afridi-avoids-serious-injury-7248257")}>
            <Text style={styles.button}>Read more</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
            <View style={{flexDirection:'row'}}>
                <View style={{width:'40%',borderRadius:30,marginEnd:'5%'}}>
                    <Image source={require("../../../assets/images/indiaPakBlog.png")} style={{width:null,height:null,flex:1,borderRadius:10}} resizeMode='stretch'></Image>
                </View>
                <View style={{width:'60%'}}>
                    <Text style={styles.cardTitle}>
                    "Champions Trophy Shouldn't Happen": Pakistan Great Drops Bombshell    
                    </Text>
                    <Text style={styles.cardDescription}>Updated on: December 11, 2024</Text>
                    <View style={{borderBottomColor:'lightgrey',borderBottomWidth:1,marginVertical:8}}></View>          

                    <Text style={styles.cardDescription}>
                    Former Pakistan cricket team captain Rashid Latif made a mammoth statement regarding the Champions Trophy 2025, saying that the tournament should not happen anymore. During a recent event, Latif said that Pakistan 
                    </Text>
                </View>
            </View>
          <View style={{borderBottomColor:'lightgrey',borderBottomWidth:1,marginVertical:8}}></View>          
          <TouchableOpacity onPress={()=>this.openWebBrowser("https://olympics.com/en/news/highest-t20-score-cricket-record")}>
            <Text style={styles.button}>Read more</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    textAlign:'center'
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 24,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 12,
    color: 'grey',
  },
  button: {
    color:'blue',
    textDecorationLine:'underline',
    textAlign:'center'
  },
});
