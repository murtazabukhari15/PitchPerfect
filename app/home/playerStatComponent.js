import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

export default class PlayerStats extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Player Profile */}
        <View style={styles.profileCard}>
          <Image
            style={styles.profileImage}
            source={{ uri: 'https://via.placeholder.com/80' }}
          />
          <View>
            <Text style={styles.profileText}>Full Name</Text>
            <Text style={styles.profileText}>Born</Text>
            <Text style={styles.profileText}>Batting Style</Text>
            <Text style={styles.profileText}>Bowling Style</Text>
          </View>
        </View>

        {/* Stats Section */}
        <Text style={styles.sectionHeader}>Stats:</Text>

        {/* Batting Stats */}
        <View style={styles.statsCard}>
          <Text style={[styles.subHeader, { backgroundColor: '#D6F7D8' }]}>
            Batting
          </Text>
          <View style={styles.statsTable}>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Format</Text>
              <Text style={styles.tableCell}>Mat</Text>
              <Text style={styles.tableCell}>Inns</Text>
              <Text style={styles.tableCell}>Runs</Text>
            </View>
            {Array.from({ length: 5 }).map((_, i) => (
              <View key={i} style={styles.tableRow}>
                <Text style={styles.tableCell}>Tests</Text>
                <Text style={styles.tableCell}>55</Text>
                <Text style={styles.tableCell}>100</Text>
                <Text style={styles.tableCell}>3997</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Bowling Stats */}
        <View style={styles.statsCard}>
          <Text style={[styles.subHeader, { backgroundColor: '#F7D8D8' }]}>
            Bowling
          </Text>
          <View style={styles.statsTable}>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Format</Text>
              <Text style={styles.tableCell}>Mat</Text>
              <Text style={styles.tableCell}>Balls</Text>
              <Text style={styles.tableCell}>Runs</Text>
            </View>
            {Array.from({ length: 5 }).map((_, i) => (
              <View key={i} style={styles.tableRow}>
                <Text style={styles.tableCell}>Tests</Text>
                <Text style={styles.tableCell}>55</Text>
                <Text style={styles.tableCell}>820</Text>
                <Text style={styles.tableCell}>42</Text>
              </View>
            ))}
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
    padding: '5%',
  },
  profileCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: '5%',
    marginBottom: '5%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: '5%',
  },
  profileText: {
    fontSize: 14,
    color: '#333',
    marginBottom: '3%',
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: '5%',
  },
  statsCard: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: '5%',
    marginBottom: '5%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  subHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: '2%',
    paddingHorizontal: '3%',
    borderRadius: 5,
    marginBottom: '5%',
  },
  statsTable: {
    width: '100%',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: '2%',
  },
  tableCell: {
    width: '25%',
    fontSize: 12,
    textAlign: 'center',
  },
});
