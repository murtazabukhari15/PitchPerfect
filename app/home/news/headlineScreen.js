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

export default class HeadLines extends Component {
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
        <Text style={styles.title}>Headlines</Text>

        <View style={styles.card}>
            <View style={{flexDirection:'row'}}>
                <View style={{width:'40%',borderRadius:30,marginEnd:'5%'}}>
                    <Image source={require("../../../assets/images/indiaFailed.png")} style={{width:null,height:null,flex:1,borderRadius:10}} resizeMode='stretch'></Image>
                </View>
                <View style={{width:'60%'}}>
                    <Text style={styles.cardTitle}>India fail to learn lessons of the past as Australia gifted early advantage</Text>
                    <Text style={styles.cardDescription}>
                    Cricket writer's challenge: discuss bowling first in a Brisbane Test without referring to Nasser Hussain. Better to fail at that challenge in the first line
                    </Text>
                </View>
            </View>
          <View style={{borderBottomColor:'lightgrey',borderBottomWidth:1,marginVertical:8}}></View>          
          <TouchableOpacity onPress={()=>this.openWebBrowser("https://www.theguardian.com/sport/2024/dec/14/australia-india-third-test-day-one-match-report-rohit-sharma")}>
            <Text style={styles.button}>Read more</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
            <View style={{flexDirection:'row'}}>
                <View style={{width:'40%',borderRadius:30,marginEnd:'5%'}}>
                    <Image source={require("../../../assets/images/retirementLogo.png")} style={{width:null,height:null,flex:1,borderRadius:10}} resizeMode='stretch'></Image>
                </View>
                <View style={{width:'60%'}}>
                    <Text style={styles.cardTitle}>Imad Wasim and Mohammad Amir announce retirement from international cricket</Text>
                    <Text style={styles.cardDescription}>
                    Amir and Imad have been key members of the Pakistan men's cricket team over the years and they also represented Pakistan U19 team as part of their 
                    </Text>
                </View>
            </View>
          <View style={{borderBottomColor:'lightgrey',borderBottomWidth:1,marginVertical:8}}></View>          
          <TouchableOpacity onPress={()=>this.openWebBrowser("https://www.pcb.com.pk/press-release-detail/imad-wasim-and-mohammad-amir-announce-retirement-from-international-cricket.html")}>
            <Text style={styles.button}>Read more</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
            <View style={{flexDirection:'row'}}>
                <View style={{width:'40%',borderRadius:30,marginEnd:'5%'}}>
                    <Image source={require("../../../assets/images/highestScoreLogo.png")} style={{width:null,height:null,flex:1,borderRadius:10}} resizeMode='stretch'></Image>
                </View>
                <View style={{width:'60%'}}>
                    <Text style={styles.cardTitle}>The biggest totals in the shortest format: Know the highest T20 scores</Text>
                    <Text style={styles.cardDescription}>
                    The popularity of cricket has grown leaps and bounds in the last two decades and Twenty20 or T20, the shortest format of the sport, has been at the heart of the surging mass appeal
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
    marginBottom: 16,
  },
  button: {
    color:'blue',
    textDecorationLine:'underline',
    textAlign:'center'
  },
});
