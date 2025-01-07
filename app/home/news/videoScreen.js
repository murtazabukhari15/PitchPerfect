import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Video } from 'expo-av';

class Videos extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Videos</Text>

        {/* First Video */}
        <View style={styles.videoCard}>
          <Video
            source={require('../../../assets/videos/Pakistan team practice session in Cape Town .mp4')} // Replace with your video URL
            style={styles.video}
            useNativeControls
            resizeMode="cover"
          />
          <View style={styles.videoDetails}>
            <Text style={styles.title}>
              Pakistan team practice session in Cape Town 
            </Text>
            <Text style={styles.info}>437K views · 7 days ago</Text>
          </View>
        </View>

        {/* Second Video */}
        <View style={styles.videoCard}>
          <Video
            source={require('../../../assets/videos/videoplayback.mp4')} // Replace with your video URL
            style={styles.video}
            useNativeControls
            resizeMode="cover"
          />
          <View style={styles.videoDetails}>
            <Text style={styles.title}>
              According to media reports, PCB wants to make Mickey Arthur
            </Text>
            <Text style={styles.info}>500K views · 2 days ago</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: '5%',
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: '5%',
    textAlign: 'center',
    color: '#333',
  },
  videoCard: {
    marginBottom: '5%',
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  video: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  videoDetails: {
    padding: '3%',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '2%',
  },
  info: {
    fontSize: 14,
    color: '#888',
  },
});

export default Videos;
