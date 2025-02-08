import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import SearchBar from "./SearchBar";
import tickIcon from './assets/ok-icon.svg'
import morning from './assets/morning.svg'
import evening from './assets/evening.svg'

const Prescription = () => {
  const [searchText, setSearchText] = useState("");
  const [medicines, setMedicines] = useState(["Cetaphil", "Sakshi Wardhak", "Baby Johny"]);
  const [filteredMedicines, setFilteredMedicines] = useState(medicines);

  const colors = {
    morning: "#3B3885",
    afternoon: "#E5A924",
    evening: "#C66B1B",
    night: "#501258",
  };

  useEffect(() => {
    const filtered = medicines.filter((medicine) =>
      medicine.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredMedicines(filtered);
  }, [searchText, medicines]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Back Button */} 
        <TouchableOpacity onPress={() => navigation.navigate("MainDashboard")}>
          <View style={styles.header}>
            <Text style={styles.headerText}>{'<-'}</Text>
            <Text style={styles.headerText}>My Prescription</Text>
          </View>
        </TouchableOpacity>


        {/* Search Bar */}
        <TouchableOpacity tyle={styles.bar}>
          <SearchBar searchText={searchText} setSearchText={setSearchText} />
        </TouchableOpacity>

        {/* Medicine List */}
        {filteredMedicines.map((medicine, index) => (
          <View key={index} style={styles.medicineCard}>
            <View style={styles.medicineHeader}>
              <View style={styles.medicineNameContainer}>
                <Text style={styles.medicineName}>{medicine}</Text>
                <View style={styles.tickIcon}>
                  <Image source={tickIcon} style={styles.tickImage} />
                </View>
              </View>
              <Text style={styles.dosage}>500 mg/day</Text>
            </View>

            <View style={styles.medicineDetails}>
              <View style={styles.timeContainer}>
                <View style={[styles.timeBox, { backgroundColor: colors.morning }]}>
                  <Text style={styles.dosagesText}>Morning</Text>
                </View>
                <View style={[styles.timeBox, { backgroundColor: colors.afternoon }]}>
                  <Text style={styles.dosagesText}>Afternoon</Text>
                </View>
                <View style={[styles.timeBox, { backgroundColor: colors.evening }]}>
                  <Text style={styles.dosagesText}>Evening</Text>
                </View>
                <View style={[styles.timeBox, { backgroundColor: colors.night }]}>
                  <Text style={styles.dosagesText}>Night</Text>
                </View>
                
              </View>
              <Text style={styles.duration}>2 months</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
    paddingTop: 40,
  },
  scrollContent: {
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignSelf: 'left',
    alignItems: "center",
    width: "100%",
    marginBottom: 15,
  },
  headerText: {
    color: "white",
    fontSize: 20,
    marginLeft: 10,
  },
  bar: {
    marginBottom: 30,
  },
  dosagesText:{
    color: 'white',
    fontSize: 9,
  },
  medicineCard: {
    backgroundColor: "#2C2B27",
    padding: 25,
    borderRadius: 16,
    width: 320,
    marginVertical: 10,
  },
  medicineHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  medicineNameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  medicineName: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    marginRight: 10,
  },
  tickIcon: {
    width: 15,
    height: 15,
    backgroundColor: "#238B00",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  tickImage: {
    width: 10,
    height: 10,
    resizeMode: "contain",
  },
  dosage: {
    fontSize: 16,
    color: "white",
  },
  medicineDetails: {
    flexDirection: "row",
    borderRadius: 16,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  timeContainer: {
    flexDirection: "row",
    gap: 10,
  },
  timeBox: {
    padding: 2,
    paddingLeft: 4,
    paddingRight: 4,
    borderRadius: 8,
    fontSize: 0.5
  },
  timeIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  duration: {
    fontSize: 16,
    color: "white",
  },
});

export default Prescription;