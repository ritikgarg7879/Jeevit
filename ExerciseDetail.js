import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const exercised = {
  name: "Hamstring Curls",
  image: "https://via.placeholder.com/300", // Replace with real image URL if needed
  description: "A great exercise for strengthening your hamstring muscles.",
  do: "Keep your back straight and perform slow controlled movements.",
  dont: "Avoid using momentum or straining your lower back.",
  sets: 3,
  duration: 15 // in minutes
}

const ExerciseDetail = ({ route, navigation }) => {
  const [exercise, setExercise] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExercise = async () => {
      try {
        // const response = await axios.get('https://api.example.com/exercises/1'); // Replace with actual API
        setExercise(exercised);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchExercise();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>{exercise?.name}</Text>
      </View>

      {/* Exercise Image */}
      <Image source={{ uri: exercise.image }} style={styles.exerciseImage} />

      {/* Content Section */}
      <View style={styles.content}>
        <Text style={styles.title}>{exercise?.name}</Text>
        <Text style={styles.description}>{exercise.description}</Text>

        <Text style={styles.doTitle}>Do:</Text>
        <Text style={styles.doText}>{exercise.do}</Text>

        <Text style={styles.doTitle}>Do not:</Text>
        <Text style={styles.doText}>{exercise.dont}</Text>

        {/* Sets & Duration Section */}
        <View style={styles.infoBoxContainer}>
          <View style={styles.infoBox}>
            <Text style={styles.infoValue}>{exercise.sets}</Text>
            <Text style={styles.infoLabel}>set</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoValue}>{exercise.duration}</Text>
            <Text style={styles.infoLabel}>minutes</Text>
          </View>
        </View>

        {/* Start Exercise Button */}
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startButtonText}>Start exercise</Text>
        </TouchableOpacity>
      </View>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 20, paddingTop: 30 },
  header: { flexDirection: 'row', alignItems: 'center', padding: 15 },
  backButton: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#1f1f1f', justifyContent: 'center', alignItems: 'center' },
  backArrow: { color: 'white', fontSize: 20 },
  headerText: { color: 'white', fontSize: 16, marginLeft: 10 },
  exerciseImage: { width: '100%', height: 200 },
  content: { padding: 20, backgroundColor: '#1f1f1f', flex: 1 },
  title: { color: 'white', fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  description: { color: 'white', fontSize: 14, marginBottom: 10 },
  doTitle: { color: 'white', fontSize: 16, fontWeight: 'bold', marginTop: 10 },
  doText: { color: 'white', fontSize: 14, marginBottom: 5 },
  infoBoxContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 },
  infoBox: { width: '48%', borderRadius: 10, padding: 15, backgroundColor: '#333', alignItems: 'center' },
  infoValue: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  infoLabel: { color: 'gray', fontSize: 14 },
  startButton: {
    backgroundColor: '#D4D4D4',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    position: 'absolute',
    bottom: 20,
    left: '10%',
    width: '80%',
  },
  startButtonText: { fontSize: 16, fontWeight: 'bold' },
  fab: { position: 'absolute', bottom: 20, right: 20, width: 50, height: 50, borderRadius: 25, backgroundColor: '#3366FF', justifyContent: 'center', alignItems: 'center' },
  fabText: { fontSize: 24, color: 'white', fontWeight: 'bold' },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' },
  errorContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' },
  errorText: { color: 'red', fontSize: 16 },
});

export default ExerciseDetail;
