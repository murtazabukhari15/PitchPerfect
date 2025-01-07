import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { withRouter } from '../../component/withRouter';

class TeamStatsScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Pakistan</Text>
        <View style={styles.playerCard}>
            <Text style={styles.tableHeader}>Selected By</Text>
            <Text style={styles.tableHeader}>Points</Text>
            <Text style={styles.tableHeader}>Credits</Text>
        </View>

        {/* Player Categories */}
        {["Batsmen", "Allrounders", "Bowlers"].map((category, index) => (
          <View key={index}>
            <Text
              style={[
                styles.categoryHeader,
                category === "Batsmen"
                  ? { backgroundColor: "#D6F7D8" }
                  : category === "Allrounders"
                  ? { backgroundColor: "#FCE7EB" }
                  : { backgroundColor: "#FFF4CE" },
              ]}
            >
              {category}
            </Text>
            {Array.from({ length: 3 }).map((_, i) => (
              <TouchableOpacity key={i} style={styles.playerCard}
                onPress={()=>this.props.router.navigate("/home/playerStatComponent")}
              >
                <View style={styles.playerInfo}>
                  <Image
                    style={styles.playerImage}
                    source={{ uri: 'https://via.placeholder.com/40' }}
                  />
                  <View>
                    <Text style={styles.playerName}>C Tutkmen</Text>
                    <Text style={styles.playerSelected}>Sel by 73.38%</Text>
                  </View>
                </View>
                <Text style={styles.playerPoints}>115</Text>
                <Text style={styles.playerCredits}>
                  7.5{' '}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '5%',
    color: '#333',
  },
  tableHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666',
  },
  categoryHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: '5%',
    borderRadius: 5,
    textAlign:'center'
  },
  playerCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: '3%',
    marginBottom: '3%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  playerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
  },
  playerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: '5%',
  },
  playerName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  playerSelected: {
    fontSize: 12,
    color: '#999',
  },
  playerPoints: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '20%',
    color: '#333',
  },
  playerCredits: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'right',
    width: '20%',
    color: '#333',
  },
  creditIcon: {
    fontSize: 18,
  },
});

export default withRouter(TeamStatsScreen)