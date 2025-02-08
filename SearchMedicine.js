import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const medicinesData = [
  {
    name: "Cephalexin",
    description: "Used to treat bacterial infections.",
    dosage: "100 mg/day",
    frequency: "2 times/day",
    duration: "8 weeks",
  },
  {
    name: "Amoxicillin",
    description: "An antibiotic for treating infections.",
    dosage: "500 mg/day",
    frequency: "3 times/day",
    duration: "6 weeks",
  },
  {
    name: "Ibuprofen",
    description: "Used for pain relief and inflammation.",
    dosage: "200 mg/day",
    frequency: "1 times/day",
    duration: "4 weeks",
  },
];

const SearchMedicine = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [selectedMedicine, setSelectedMedicine] = useState(null);

  const filteredMedicines = medicinesData.filter((medicine) =>
    medicine.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backText}>{"<"} Prescribe</Text>
      </TouchableOpacity>

      {/* Search Bar */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        placeholderTextColor="#888"
        value={searchText}
        onChangeText={setSearchText}
      />

      {/* Medicine List */}
      {searchText.length > 0 && !selectedMedicine && (
        <ScrollView style={styles.medicineList}>
          {filteredMedicines.map((medicine, index) => (
            <TouchableOpacity
              key={index}
              style={styles.medicineItem}
              onPress={() => setSelectedMedicine(medicine)}
            >
              <Text style={styles.medicineName}>{medicine.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}

      {/* Medicine Details */}
      {selectedMedicine && (
        <View style={styles.detailsContainer}>
          <Te````````````````````````````````````xt style={styles.medicineTitle}>{selectedMedicine.name}</Text>
          <Text style={styles.description}>{selectedMedicine.description}</Text>

          <TouchableOpacity style={styles.dosfreq}>
            <Text style={styles.sectionTitle}>Dosage</Text>
            <Text style={styles.infoBox}>{selectedMedicine.dosage}</Text>

            <Text style={styles.sectionTitle}>Frequency</Text>
            <Text style={styles.infoBox}>{selectedMedicine.frequency}</Text>
          </TouchableOpacity>

          <Text style={styles.sectionTitle}>Duration</Text>
          <Text style={styles.infoBox}>{selectedMedicine.duration}</Text>

          {/* Add Button */}
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0F0F",
    padding: 20,
  },
  backButton: {
    marginBottom: 10,
  },
  backText: {
    fontSize: 18,
    color: "white",
  },
  searchInput: {
    backgroundColor: "#2C2B27",
    color: "white",
    padding: 10,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  medicineList: {
    backgroundColor: "#1E1E1E",
    borderRadius: 10,
    padding: 10,
    maxHeight: 150,
  },
  medicineItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#444",
  },
  medicineName: {
    color: "white",
    fontSize: 16,
  },
  detailsContainer: {
    flex: 0,
    marginTop: 20,
    backgroundColor: "#1E1E1E",
    padding: 15,
    borderRadius: 10,
  },
  medicineTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  dosfreq: {
    flex: 1,

  },
  description: {
    fontSize: 14,
    color: "#ccc",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginTop: 10,
  },
  infoBox: {
    fontSize: 16,
    color: "white",
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 8,
    marginBottom: 5,
  },
  addButton: {
    backgroundColor: "#4A90E2",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  addButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});

export default SearchMedicine;