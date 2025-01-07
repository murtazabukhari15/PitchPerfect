import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet,Image,ScrollView, KeyboardAvoidingView } from 'react-native';
import TextInputWithLabel from '../../../component/textInputWithLabel';

class EditTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectionCount: { WK: 0, BAT: 0, AR: 0, BOWL: 0 },
      activeSection: 'BAT',
      selectedPlayers: [],
    };

    this.playerData = [
      { id: 1, name: 'C Tutkmen', points: 115, credits: 7.5, type: 'BAT' },
      { id: 2, name: 'J Smith', points: 120, credits: 8.0, type: 'BAT' },
      { id: 3, name: 'M Clarke', points: 110, credits: 7.0, type: 'BAT' },
      { id: 4, name: 'D Warner', points: 125, credits: 8.5, type: 'BAT' },
      { id: 5, name: 'S Watson', points: 130, credits: 8.0, type: 'AR' },
      { id: 6, name: 'B Lee', points: 100, credits: 7.0, type: 'BOWL' },
      { id: 7, name: 'A Gilchrist', points: 135, credits: 8.5, type: 'WK' },
    ];

    this.sections = [
      { title: 'WK', type: 'WK' },
      { title: 'BAT', type: 'BAT' },
      { title: 'AR', type: 'AR' },
      { title: 'BOWL', type: 'BOWL' },
    ];
  }

  handleSelection = (player) => {
    this.setState((prevState) => {
      const isSelected = prevState.selectedPlayers.some((p) => p.id === player.id);
      let updatedSelectedPlayers;
      let increment = 0;

      if (isSelected) {
        updatedSelectedPlayers = prevState.selectedPlayers.filter((p) => p.id !== player.id);
        increment = -1;
      } else {
        updatedSelectedPlayers = [...prevState.selectedPlayers, player];
        increment = 1;
      }

      return {
        selectedPlayers: updatedSelectedPlayers,
        selectionCount: {
          ...prevState.selectionCount,
          [player.type]: Math.max(0, prevState.selectionCount[player.type] + increment),
        },
      };
    });
  };

  setActiveSection = (section) => {
    this.setState({ activeSection: section });
  };

  renderPlayerItem = ({ item }) => {
    const isSelected = this.state.selectedPlayers.some((player) => player.id === item.id);

    return (
      <View style={styles.playerItem}>
        <View style={styles.playerInfo}>
          <Image source={require("../../../assets/images/avator.png")} style={{width:35,height:35}}></Image>
          <Text style={styles.playerName}>{item.name}</Text>
          <Text style={styles.playerDetails}>{item.points} Points</Text>
          <Text style={styles.playerDetails}>{item.credits} Credits</Text>
        </View>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => this.handleSelection(item)}
        >
          <Text style={styles.actionButtonText}>{isSelected ? '-' : '+'}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const { selectionCount, activeSection } = this.state;

    const activePlayers = this.playerData.filter((player) => player.type === activeSection);

    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.header}>
          {this.sections.map((section) => (
            <TouchableOpacity
              key={section.type}
              style={[styles.headerButton, activeSection === section.type && styles.activeHeaderButton]}
              onPress={() => this.setActiveSection(section.type)}
            >
              <Text style={[styles.headerText, activeSection === section.type && styles.activeHeaderText]}>
                {section.title} ({selectionCount[section.type]})
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.sectionTitle}>All {activeSection === 'BAT' ? 'Batsmen' : activeSection === 'AR' ? 'All-Rounders' : activeSection === 'BOWL' ? 'Bowlers' : 'Wicketkeepers'}</Text>
        <View style={styles.playerInfo}>
            <Text style={styles.tableHeader}>Selected By</Text>
            <Text style={styles.tableHeader}>Points</Text>
            <Text style={styles.tableHeader}>Credits</Text>
        </View>
        <FlatList
          data={activePlayers}
          renderItem={this.renderPlayerItem}
          keyExtractor={(item) => item.id.toString()}
          />
            <TextInputWithLabel placeholder="Team Name" additionalStyle={{backgroundColor:'white',borderColor:'white',marginTop:'3%'}}></TextInputWithLabel>
            <TouchableOpacity
              style={[styles.btn]}
            >
                <Text style={{textAlign:'center',color:'white'}}>Save</Text>
            </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f4f4f4',
    paddingVertical: 10,
  },
  btn:{
    backgroundColor:"#FD7702",
    borderRadius:5,
    padding:10,
    alignContent:'flex-end',
    marginBottom:'5%'
  },
  headerButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  activeHeaderButton: {
    backgroundColor: '#dcdcdc',
    borderRadius: 5,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  activeHeaderText: {
    color: '#FD7702',
  },
  tableHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 5,
    color: '#666',
    marginLeft:'15%'
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    paddingLeft: 10,
    color: '#444',
    textAlign:'center'
  },
  playerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  playerInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignItems:'center'

  },
  playerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  playerDetails: {
    fontSize: 14,
    color: '#666',
  },
  actionButton: {
    backgroundColor: '#FD7702',
    borderRadius: 5,
    padding: 10,
  },
  actionButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default EditTeam;
