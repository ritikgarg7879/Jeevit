import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ActivityScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backText}>{'<'} All activity</Text>
      </TouchableOpacity>

      <Text style={styles.title}>All Activity</Text>

      {/* Activity Cards */}
      {Array(5).fill().map((_, index) => (
        <View key={index} style={styles.activityCard}>
          <Text style={styles.activityTitle}>Hamstring Curls</Text>
          <Text style={styles.activityAccuracy}>High Accuracy</Text>
          <Text style={styles.activityTime}>02:55PM</Text>
          <Text style={styles.activityCount}>10 times</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F0F',
    padding: 20,
    paddingTop: 45,
  },
  backButton: {
    marginBottom: 20,
  },
  backText: {
    fontSize: 16,
    color: 'white',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
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
});

export default ActivityScreen;
