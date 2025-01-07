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

export default class Leagues extends Component {
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
        <Text style={styles.title}>Leagues</Text>

        <View style={styles.card}>
            <Text style={styles.cardTitle}>Canadian Premier League</Text>
            <View style={{borderBottomColor:'lightgrey',borderBottomWidth:1,marginVertical:8}}></View>          
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <TouchableOpacity onPress={()=>this.openWebBrowser("https://www.espncricinfo.com/series/global-t20-canada-2024-1443976/montreal-tigers-vs-toronto-nationals-final-1444002/full-scorecard")}>
                    <Text style={styles.button}>Fixtures</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.openWebBrowser("https://www.espncricinfo.com/series/global-t20-canada-2024-1443976/montreal-tigers-vs-toronto-nationals-final-1444002/points-table-standings")}>
                    <Text style={[styles.button,{alignItems:'flex-end'}]}>Table</Text>
                </TouchableOpacity>

            </View>
        </View>

        <View style={styles.card}>
            <Text style={styles.cardTitle}>Carribean Premier League</Text>
            <View style={{borderBottomColor:'lightgrey',borderBottomWidth:1,marginVertical:8}}></View>          
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <TouchableOpacity onPress={()=>this.openWebBrowser("https://www.espncricinfo.com/series/caribbean-premier-league-2024-1428674/match-schedule-fixtures-and-results")}>
                    <Text style={styles.button}>Fixtures</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.openWebBrowser("https://www.espncricinfo.com/series/caribbean-premier-league-2024-1428674/points-table-standings")}>
                    <Text style={[styles.button,{alignItems:'flex-end'}]}>Table</Text>
                </TouchableOpacity>

            </View>
        </View>

        <View style={styles.card}>
            <Text style={styles.cardTitle}>Pakistan Super League</Text>
            <View style={{borderBottomColor:'lightgrey',borderBottomWidth:1,marginVertical:8}}></View>          
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <TouchableOpacity onPress={()=>this.openWebBrowser("https://www.espncricinfo.com/series/pakistan-super-league-2024-25-1434269/match-schedule-fixtures-and-results")}>
                    <Text style={styles.button}>Fixtures</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.openWebBrowser("https://www.espncricinfo.com/series/pakistan-super-league-2024-25-1434269/points-table-standings")}>
                    <Text style={[styles.button,{alignItems:'flex-end'}]}>Table</Text>
                </TouchableOpacity>

            </View>
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
    textDecorationLine:'underline'
 }
});
