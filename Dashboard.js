import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Profile Icon */}
        <Image source={{ uri: 'https://i.ytimg.com/vi/kGtEax1WQFg/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDW2jZ6ucT6wEGkytwixofJxNnMNw' }} style={styles.profileIcon} />

        {/* User Button (Navigates to UploadDNA) */}
        <TouchableOpacity 
          style={styles.userButton} 
          onPress={() => navigation.navigate('ExerciseDetail')}
        >
          <Text style={styles.userText}>User</Text>
        </TouchableOpacity>

      </View>

      {/* Streak & Accuracy Card */}
      <View style={styles.card}>
        <View style={styles.streakBox}>
          <Text style={styles.streakNumber}>09</Text>
          <Text style={styles.streakLabel}>days</Text>
          <Text style={styles.streakText}>Streak</Text>
        </View>
        <View style={styles.accuracyBox}>
          <Text style={styles.accuracyNumber}>86</Text>
          <Text style={styles.accuracyText}>Accuracy score</Text>
        </View>
      </View>

      {/* Exercises Section */}
      <Text style={styles.sectionTitle}>Exercises</Text>
      <View style={styles.exerciseContainer}>
        <TouchableOpacity style={styles.exerciseButton}><Text style={styles.exerciseText}>Prescribed</Text></TouchableOpacity>
        <TouchableOpacity style={styles.exerciseButton}><Text style={styles.exerciseText}>Favorites</Text></TouchableOpacity>
        <TouchableOpacity style={styles.exerciseButton}><Text style={styles.exerciseText}>Explore</Text></TouchableOpacity>
      </View>

      {/* Past Activity Section */}
      <Text style={styles.sectionTitle}>Past Activity</Text>
      <Text style={styles.subText}>Past 7 days</Text>

      <View style={styles.activityContainer}>
        {Array(2).fill().map((_, index) => (
          <View key={index} style={styles.activityCard}>
            <Text style={styles.activityTitle}>Hamstring Curls</Text>
            <Text style={styles.activityAccuracy}>High Accuracy</Text>
            <Text style={styles.activityTime}>02:55PM</Text>
            <Text style={styles.activityCount}>10 times</Text>
          </View>
        ))}
      </View>

      {/* See More Button (Navigates to ActivityScreen) */}
      <TouchableOpacity style={styles.seeMoreButton} onPress={() => navigation.navigate('ActivityScreen')}>
        <Text style={styles.seeMoreText}>see more</Text>
        <Text style={styles.arrow}>{'>'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F0F',
    paddingTop: 40,
    padding: 13,
    justifyContent: 'space-between',
  },  
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
    justifyContent: 'space-between',
  },
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
  },
  userButton: {
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
  },
  userText: {
    color: 'white',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#3A3A8B',
    borderRadius: 15,
    padding: 20,
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  streakBox: {
    alignItems: 'center',
  },
  streakNumber: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  streakLabel: {
    fontSize: 12,
    color: 'white',
  },
  streakText: {
    fontSize: 14,
    color: 'white',
  },
  accuracyBox: {
    backgroundColor: 'black',
    borderRadius: 70,
    width: 60,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  accuracyNumber: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'white',
  },
  accuracyText: {
    fontSize: 10,
    color: 'white',
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
  },
  subText: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
  },
  exerciseContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  exerciseButton: {
    backgroundColor: '#C4C4C4',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  exerciseText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  activityContainer: {
    marginVertical: 10,
  },
  activityCard: {
    backgroundColor: '#1E1E1E',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  activityTitle: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  activityAccuracy: {
    fontSize: 12,
    color: 'lightblue',
  },
  activityTime: {
    position: 'absolute',
    right: 10,
    top: 15,
    color: 'gray',
  },
  activityCount: {
    position: 'absolute',
    right: 10,
    bottom: 15,
    fontSize: 14,
    color: 'white',
  },
  seeMoreButton: {
    backgroundColor: '#3A3A8B',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  seeMoreText: {
    fontSize: 16,
    color: 'white',
  },
  arrow: {
    fontSize: 18,
    color: 'white',
    marginLeft: 5,
  },
});

export default Dashboard;
