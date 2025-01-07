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

class GroundPointTeam extends Component {
  state = {
    players: [
      { role: 'WICKET-KEEPERS', name: 'C Tear', points: 5.5, id: 1 },
      { role: 'BATTERS', name: 'H Ward', points: 6, id: 2 },
      { role: 'BATTERS', name: 'D Ibrahim', points: 7, id: 3 },
      { role: 'BATTERS', name: 'F Khushi', points: 6.5, id: 4 },
      { role: 'ALL-ROUNDERS', name: 'J Coles', points: 8.5, id: 5 },
      { role: 'ALL-ROUNDERS', name: 'B Foreman', points: 7, id: 6 },
      { role: 'ALL-ROUNDERS', name: 'L Benkeen', points: 7.5, id: 7 },
      { role: 'ALL-ROUNDERS', name: 'J Ricird', points: 8, id: 8 },
      { role: 'BOWLERS', name: 'S Fin', points: 6, id: 9 },
      { role: 'BOWLERS', name: 'H Coecom', points: 7, id: 10 },
      { role: 'BOWLERS', name: 'B Currie', points: 6.5, id: 11 },
    ],
  };

  renderPlayersByRole(role) {
    const { players } = this.state;
    return players
      .filter((player) => player.role === role)
      .map((player) => (
        <View
          key={player.id}
          style={styles.playerIcon}
        >
          <Image
            source={require('../../../assets/images/playerIcon.png')}
            style={styles.playerImage}
          />
          <Text style={styles.playerName}>{player.name}</Text>
          <Text style={styles.playerPoints}>{player.points} Points</Text>
        </View>
      ));
  }

  render() {
    const roles = ['WICKET-KEEPERS', 'BATTERS', 'ALL-ROUNDERS', 'BOWLERS'];
    const screenWidth = Dimensions.get('window').width;

    return (
      <ScrollView contentContainerStyle={[styles.container, { width: screenWidth }]}>
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
      </ScrollView>
    );
  }
}

export default withRouter(GroundPointTeam);

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
  playerPoints: {
    fontSize: 10,
    color: '#fff',
  },
});
