import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ImageBackground,
} from 'react-native';
import { withRouter } from "../../../component/withRouter.js";

class OngoingFantasy extends Component {
  state = {
    isPrivateExpanded: false,
    isPublicExpanded: false,
    publicLeaderboard: [
      { pos: 1, team: 'Liverpool', user: 'albatross wall', gw12: 70, total: 640 },
      { pos: 2, team: 'M&M', user: 'Ahmed Abdullah', gw12: 56, total: 622 },
      { pos: 3, team: 'Daniloo', user: 'Danilo Ladic', gw12: 56, total: 614 },
      { pos: 4, team: 'Team4', user: 'User 4', gw12: 60, total: 600 },
      { pos: 5, team: 'Team5', user: 'User 5', gw12: 45, total: 580 },
      { pos: 6, team: 'Team6', user: 'User 6', gw12: 55, total: 570 },
    ],
    privateLeaderboard: [
      { pos: 1, team: 'PrivateTeam1', user: 'User A', gw12: 60, total: 600 },
      { pos: 2, team: 'PrivateTeam2', user: 'User B', gw12: 50, total: 580 },
      { pos: 3, team: 'PrivateTeam3', user: 'User C', gw12: 55, total: 590 },
      { pos: 4, team: 'PrivateTeam4', user: 'User D', gw12: 40, total: 550 },
    ],
  };

  togglePrivateSection = () => {
    this.setState((prevState) => ({
      isPrivateExpanded: !prevState.isPrivateExpanded,
    }));
  };

  togglePublicSection = () => {
    this.setState((prevState) => ({
      isPublicExpanded: !prevState.isPublicExpanded,
    }));
  };

  renderLeaderboard = (data) => {
    return (
      <View>
        {/* Table Header */}
        <View style={styles.tableHeader}>
          <Text style={[styles.headerText, { flex: 1 }]}>Pos</Text>
          <Text style={[styles.headerText, { flex: 3 }]}>Team</Text>
          <Text style={[styles.headerText, { flex: 1 }]}>gw12</Text>
          <Text style={[styles.headerText, { flex: 1 }]}>Total</Text>
        </View>
        {/* Table Body */}
        <FlatList
          data={data}
          keyExtractor={(item) => item.pos.toString()}
          renderItem={({ item }) => (
            <View style={styles.leaderboardRow}>
              <Text style={[styles.rowText, { flex: 1 }]}>{item.pos}</Text>
              <Text style={[styles.rowText, { flex: 3 }]}>{item.team}</Text>
              <Text style={[styles.rowText, { flex: 1 }]}>{item.gw12}</Text>
              <Text style={[styles.rowText, { flex: 1 }]}>{item.total}</Text>
            </View>
          )}
        />
      </View>
    );
  };

  render() {
    const { isPrivateExpanded, isPublicExpanded, publicLeaderboard, privateLeaderboard } = this.state;

    return (
      <FlatList
        ListHeaderComponent={
            <>
                <Text style={styles.title}>Ongoing Fantasy</Text>
                <TouchableOpacity onPress={()=>this.props.router.navigate("/home/fantasy/teamCreatedScreen")}>
                   <ImageBackground source={require("../../../assets/images/newOrteamCreated.png")} resizeMode='cover' style={styles.image} imageStyle={{borderRadius:50}}>
                      <Text style={{color:'white',textAlign:'center',fontSize:20,fontWeight:'bold'}}>Team Created</Text>
                   </ImageBackground>
                </TouchableOpacity>
            </>
        }
        data={[{ key: 'dummy' }]} // Dummy data to maintain FlatList structure
        renderItem={() => null}
        contentContainerStyle={{marginHorizontal:'5%'}}
        ListFooterComponent={
          <View style={{marginTop:'5%'}}>
            {/* Private Leaderboard Section */}
            <View>
              <TouchableOpacity style={styles.sectionHeader} onPress={this.togglePrivateSection}>
                <Text style={styles.sectionHeaderText}>Leaderboard Private</Text>
                <Text>{isPrivateExpanded ? '-' : '+'}</Text>
              </TouchableOpacity>
              {isPrivateExpanded && this.renderLeaderboard(privateLeaderboard)}
              <TouchableOpacity style={styles.createButton}
                onPress={()=>this.props.router.navigate("/home/fantasy/createPrivateLeagueScreen")}
              >
                <Text style={styles.createButtonText}>+ Create new</Text>
              </TouchableOpacity>
            </View>

            {/* Public Leaderboard Section */}
            <View>
              <TouchableOpacity style={styles.sectionHeader} onPress={this.togglePublicSection}>
                <Text style={styles.sectionHeaderText}>Leaderboard Public</Text>
                <Text>{isPublicExpanded ? '-' : '+'}</Text>
              </TouchableOpacity>
              {isPublicExpanded && this.renderLeaderboard(publicLeaderboard)}
            </View>
          </View>
        }
      />
    );
  }
}

export default withRouter(OngoingFantasy);

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 150,
    justifyContent:'center',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  leaderboardRow: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  rowText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  createButton: {
    backgroundColor: '#ffffff',
    padding: 12,
    marginVertical: 16,
    alignItems: 'center',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  createButtonText: {
    fontSize: 16,
    color: '#007bff',
  },
});
