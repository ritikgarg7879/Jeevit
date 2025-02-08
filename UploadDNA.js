import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import axios from 'axios';

const UploadDNA = ({ navigation }) => {
  const [fileName, setFileName] = useState('');
  const [fileUri, setFileUri] = useState(null);

  useEffect(() => {
    if (fileUri) {
      handleUpload();
    }
  }, [fileUri]);

  const handleFileSelection = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: 'application/pdf',
      });

      if (result.assets && result.assets.length > 0) {
        const file = result.assets[0];
        setFileName(file.name);
        setFileUri(file.uri);
        Alert.alert('File Selected', `You selected: ${file.name}`);
      } else {
        console.log('No file selected');
      }
    } catch (error) {
      console.error('Error selecting file:', error);
      Alert.alert('Error', 'Unable to select file.');
    }
  };

  const handleUpload = async () => {
    if (!fileUri) {
      Alert.alert('Error', 'Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', {
      uri: fileUri,
      name: fileName,
      type: 'application/pdf',
    });

    try {
      const response = await axios.post('https://your-api-endpoint.com/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        Alert.alert('Success', 'File uploaded successfully!');
        navigation.navigate('MainDashboard');
      } else {
        Alert.alert('Error', 'File upload failed.');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      Alert.alert('Error', 'An error occurred while uploading the file.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backText}>{'<'} Back</Text>
      </TouchableOpacity>

      {/* Image Placeholder */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: 'https://via.placeholder.com/300' }} style={styles.image} />
      </View>

      {/* Content */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Upload your genetic profile from 23andMe, OtherDNA, and Ancestry</Text>
        <Text style={styles.paragraph}>Only .pdf files are supported</Text>
        
        {/* File Selection Button */}
        <TouchableOpacity style={styles.button} onPress={handleFileSelection}>
          <Text style={styles.buttonText}>{fileName ? fileName : 'Choose a File'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F0F',
    padding: 20,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  backText: {
    fontSize: 16,
    color: 'white',
  },
  imageContainer: {
    width: '100%',
    height: '40%',
    backgroundColor: '#9B9B9B',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  image: {
    width: '80%',
    height: '100%',
    resizeMode: 'contain',
  },
  contentContainer: {
    width: '100%',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 14,
    color: 'red',
    textAlign: 'left',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#D4D4D4',
    padding: 15,
    alignItems: 'center',
    borderRadius: 8,
    width: '80%',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
  },
});

export default UploadDNA;