import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  ImageBackground
} from 'react-native';
import { withRouter } from '../../../component/withRouter';

class GroundTeam extends Component {
  state = {
    players: [
      { role: 'WICKET-KEEPERS', name: 'C Tear', credit: 5.5, id: 1 },
      { role: 'BATTERS', name: 'H Ward', credit: 6, id: 2 },
      { role: 'BATTERS', name: 'D Ibrahim', credit: 7, id: 3 },
      { role: 'BATTERS', name: 'F Khushi', credit: 6.5, id: 4 },
      { role: 'ALL-ROUNDERS', name: 'J Coles', credit: 8.5, id: 5 },
      { role: 'ALL-ROUNDERS', name: 'B Foreman', credit: 7, id: 6 },
      { role: 'ALL-ROUNDERS', name: 'L Benkeen', credit: 7.5, id: 7 },
      { role: 'ALL-ROUNDERS', name: 'J Ricird', credit: 8, id: 8 },
      { role: 'BOWLERS', name: 'S Fin', credit: 6, id: 9 },
      { role: 'BOWLERS', name: 'H Coecom', credit: 7, id: 10 },
      { role: 'BOWLERS', name: 'B Currie', credit: 6.5, id: 11 },
    ],
    totalBudget: 0
  };

  handlePlayerClick = (player) => {
    this.props.router.navigate("/home/fantasy/editTeamScreen")
  };

  renderPlayersByRole(role) {
    const { players } = this.state;
    return players
      .filter((player) => player.role === role)
      .map((player) => (
        <TouchableOpacity
          key={player.id}
          style={styles.playerIcon}
          onPress={() => this.handlePlayerClick(player)}
        >
          <Image
            source={require('../../../assets/images/playerIcon.png')}
            style={styles.playerImage}
          />
          <Text style={styles.playerName}>{player.name}</Text>
          <Text style={styles.playercredit}>{player.credit} CR</Text>
        </TouchableOpacity>
      ));
  }

  render() {
    const roles = ['WICKET-KEEPERS', 'BATTERS', 'ALL-ROUNDERS', 'BOWLERS'];
    const screenWidth = Dimensions.get('window').width;

    return (
      <ScrollView contentContainerStyle={[styles.container, { width: screenWidth }]}>
        <View style={{width:'95%',alignItems:'flex-end'}}>
          <TouchableOpacity style={[styles.btn,{width:'15%',marginTop:'5%'}]}>
              <Text style={[styles.colorWhite,{textAlign:'center'}]}>{this.state.totalBudget} CR</Text>
         </TouchableOpacity>
        </View>
        <ImageBackground source={require("../../../assets/images/cricketGround.png")} 
            resizeMode='stretch'
            style={{padding:'2%'}}
        >
          {roles.map((role, index) => (
            <View key={index} style={styles.roleSection}>
              <Text style={styles.roleTitle}>{role}</Text>
              <View style={styles.playersRow}>{this.renderPlayersByRole(role)}</View>
            </View>
          ))}
        </ImageBackground>
        <View style={{width:'95%',flexDirection:'row',justifyContent:'space-between'}}>
            <TouchableOpacity style = {[styles.btn,{marginStart:'5%'}]}>
                <Text style={styles.colorWhite}>Lets go!</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.btn}
              onPress={()=>this.props.router.navigate("/home/fantasy/editTeamScreen")}  
            >
                <Text style={styles.colorWhite}>Edit</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default withRouter(GroundTeam);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#e9ffe9',
  },
  roleSection: {
    alignItems: 'center',
    marginBottom:'10%'
  },
  roleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginTop:'10%'

  },
  playersRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  playerIcon: {
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  playerImage: {
    width: 35,
    height: 35,
    marginBottom: 5,
  },
  playerName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
  },
  playercredit: {
    fontSize: 10,
    color: '#fff',
  },
  colorWhite:{
    color:'white'
  },
  btn:{
    backgroundColor:"#FD7702",
    borderRadius:5,
    padding:10,
    textAlign:'center',
    justifyContent:'center'
  }
});
