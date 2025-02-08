import React from 'react';
import { View, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import searchIcon from './assets/search.svg'

const SearchBar = ({ searchText, setSearchText }) => {
  const handleChange = (text) => {
    setSearchText(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="black"
        value={searchText}
        onChangeText={handleChange}
      />
      <TouchableOpacity style={styles.iconContainer}>
        <Image source={searchIcon} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 320,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#D4D4D4',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: 'black',
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: '#D4D4D4',
  },
  iconContainer: {
    padding: 5,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default SearchBar;