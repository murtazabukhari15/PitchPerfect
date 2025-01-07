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
import { withRouter } from '../../../component/withRouter';

class CreateNew extends Component {
  constructor(props){
    super(props);
    this.state = {
      series: [{
          name:"Pakistan vs Zimbabwe",
          fixture:"https://www.espncricinfo.com/series/pakistan-in-zimbabwe-2024-25-1444642",
          table:"https://www.espncricinfo.com/series/pakistan-in-zimbabwe-2024-25-1444642/match-schedule-fixtures-and-results"
        },
        {
          name:"Pakistan vs South Africa",
          fixture:"https://www.espncricinfo.com/series/south-africa-vs-pakistan-2024-25-1432205/match-schedule-fixtures-and-results",
          table:"https://www.espncricinfo.com/series/south-africa-vs-pakistan-2024-25-1432205"
        },
        {
          name:"Pakistan vs Newzealand",
          fixture:"https://www.espncricinfo.com/series/new-zealand-vs-pakistan-2024-25-1443540",
          table:"https://www.espncricinfo.com/series/new-zealand-vs-pakistan-2024-25-1443540/match-schedule-fixtures-and-results"
        }]
    }
  }
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
        <Text style={styles.title}>Create New</Text>
        <Text style={styles.subtitle}>Ongoing Series</Text>

      {
        this.state.series.map((value,key)=>{
          return <TouchableOpacity style={styles.card} key={key}
                  onPress={()=>this.props.router.navigate("/home/fantasy/groundTeamScreen")}
                 >
                      <Text style={styles.cardTitle}>{value.name}</Text>
                      <View style={{borderBottomColor:'lightgrey',borderBottomWidth:1,marginVertical:8}}></View>          
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                          <TouchableOpacity onPress={()=>this.openWebBrowser(value.fixture)}>
                              <Text style={styles.button}>Fixture</Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={()=>this.openWebBrowser(value.table)}>
                              <Text style={[styles.button,{alignItems:'flex-end'}]}>Table</Text>
                          </TouchableOpacity>
                      </View>
                  </TouchableOpacity>
        })
      }
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
  subtitle:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    textAlign:'center'
  }
  ,
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

export default withRouter(CreateNew)