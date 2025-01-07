import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { withRouter } from '../../../component/withRouter';
import {Get} from '../../../utility/request.js';
import { ShowModal } from '../../../component/modalComponent';

class TeamCreated extends Component {  
    constructor(props){
        super(props);
        this.state = {
            series:[]
        }
    }
    async componentDidMount(){
      try {
        const url = '/api/team/getAll';
        const response = await Get(url);

          if (response.Status) {
            this.setState({ series: response.Message }); 
          }else{
            this.setState({ series: [] });             
          }
      } catch (error) {
        ShowModal({
            title: 'Failure',
            message: error
        });
      }
    }

    componentWillUnmount() {
      this.setState({ series: [] }); // Clear data when component is unmounted
    }

    render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Pitch Perfect Fantasy</Text>
        <Text style={styles.subtitle}>Team Created</Text>
        {   
            this.state.series.map((value,key)=>{
            return  <View style={styles.card} key={key}>
                <Text style={styles.cardTitle}>{value.name}</Text>
                <View style={{borderBottomColor:'lightgrey',borderBottomWidth:1,marginVertical:8}}></View>          
                <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                    <TouchableOpacity onPress={()=>this.props.router.navigate("/home/fantasy/teamPointScreen")}>
                        <Text style={styles.button}>Points</Text>
                    </TouchableOpacity>
                </View>
            </View>
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

export default withRouter(TeamCreated)