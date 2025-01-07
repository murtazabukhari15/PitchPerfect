import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { withRouter } from '../../component/withRouter';

class Settings extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Manage Account</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Personal Details</Text>
          <Text style={styles.cardDescription}>
            Update your name, country/region of residence, gender and phone number.
          </Text>
          <TouchableOpacity style={styles.button}
              onPress={()=> this.props.router.navigate("/home/updatePersonalDetails")}          
          >
            <Text style={styles.buttonText}>Update Personal Details</Text>
          </TouchableOpacity>
          <Text style={styles.cardDescription}>
            Update the email address on your account.
          </Text>
          <TouchableOpacity style={styles.button}
              onPress={()=> this.props.router.navigate("/home/updateEmail")}
          >
            <Text style={styles.buttonText}>Update Email Address</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Preferences</Text>
          <Text style={styles.cardDescription}>
            Manage the clubs you follow and opt in or out of email communications with the Premier League, FPL, clubs, and sponsors.
          </Text>
          <TouchableOpacity style={styles.button}
            onPress={()=> this.props.router.navigate("/home/favouriteScreen")}
          >
            <Text style={styles.buttonText}>Update Preferences</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Account Security</Text>
          <Text style={styles.cardDescription}>
            Update your password, link social media accounts, and manage two-factor authentication.
          </Text>
          <TouchableOpacity style={styles.button}
            onPress={()=> this.props.router.navigate("/home/updatePassword")}
          >
            <Text style={styles.buttonText}>Account Security</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Delete Account</Text>
          <Text style={styles.cardDescription}>
            Permanently delete your Premier League account including your Fantasy Premier League team.
          </Text>
          <TouchableOpacity style={[styles.button]}>
            <Text style={[styles.buttonText, styles.deleteButtonText]}>
              Delete Account
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default withRouter(Settings)

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
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  button: {
    backgroundColor:"#FD7702",
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginBottom: 8,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#FF4D4D',
  },
  deleteButtonText: {
    color: '#FFF',
  },
});
