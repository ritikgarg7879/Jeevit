import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const GeneticDashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={{ uri: 'https://i.ytimg.com/vi/kGtEax1WQFg/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDW2jZ6ucT6wEGkytwixofJxNnMNw' }} style={styles.profileIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.userButton}>
          <Text style={styles.userText}>User</Text>
        </TouchableOpacity>
      </View>

      {/* Title */}
      <TouchableOpacity>
          <Text style={styles.title}>
          Get personalized insights into your health and medications by uploading your genetic record
        </Text>

        {/* Upload Genetic Report Button */}
        <TouchableOpacity style={styles.uploadButton} onPress={() => navigation.navigate('UploadDNA')}>
          <Text style={styles.uploadButtonText}>Upload your genetic report</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      {/* Additional Buttons */}
      <TouchableOpacity>
      <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>My Medications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>New Prescription</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.footer}> Footer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    paddingTop: 40,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
  },
  userButton: {
    borderWidth: 1,
    borderColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  userText: {
    color: 'white',
    fontSize: 16,
  },
  title: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  uploadButton: {
    backgroundColor: '#3A3A8B',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  uploadButtonText: {
    color: 'white',
    fontSize: 16,
  },
  secondaryButton: {
    backgroundColor: '#C4C4C4',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  secondaryButtonText: {
    fontSize: 16,
    color: 'black',
  },
  footer: {
    color: 'white',
  }
});

export default GeneticDashboard;


