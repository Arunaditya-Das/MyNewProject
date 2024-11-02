import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

const Dropdown = ({ data, onSelect }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedClinic, setSelectedClinic] = useState(null);

  const handleSelect = (item) => {
    setSelectedClinic(item);
    setDropdownOpen(false);
    if (onSelect) {
      onSelect(item);
    }
  };

  return (
    <View style={styles.containerTotal}>
        <View style={{}}>
            <Text style={{textAlign : "left", fontSize : 20,color: '#252354', fontWeight : 600}}>Select a Clinic</Text></View>

    <View style={styles.container}>
      {/* Dropdown trigger */}
      <TouchableOpacity
        style={styles.dropdownTrigger}
        onPress={() => setDropdownOpen(!isDropdownOpen)}
      >
        <Text style={styles.selectedText}>
          {selectedClinic ? selectedClinic.name : 'Clinics'}
        </Text>
      </TouchableOpacity>

      {/* Dropdown content */}
      {isDropdownOpen && (
        <View style={styles.dropdownContent}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.dropdownItem}
                onPress={() => handleSelect(item)}
              >
                <Image
                  source={item.img  }
                  style={styles.clinicImage}
                />
                <View>
                    <Text style={styles.clinicName}>{item.name}</Text>
                    <Text style={styles.clinicType}>{item.type}</Text>
                </View>
                
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
    </View>
  );
};

// Example Usage
const Page2Clinics = () => {
    
  const clinics = [
    {
      name: 'Modern Vet Hospital',
      type: 'Division',
      id: 4,
      img: require('../../assets/images/Banner-2.jpg'), // Replace with actual image URL
    },
    {
      name: 'Modern Vet - Palm Branch',
      type: 'Division',
      id: 23,
      img: require('../../assets/images/banner-test.jpg'),
    },
    {
      name: 'Modern Vet - Downtown Branch',
      type: 'Division',
      id: 18,
      img: require('../../assets/images/Banner-2.jpg'),// Replace with actual image URL
    },
    {
      name: 'Modern Vet - JLT Branch',
      type: 'Division',
      id: 8,
      img: require('../../assets/images/banner-test.jpg'),// Replace with actual image URL
    },
    {
      name: 'Modern Vet - JVC Branch',
      type: 'Division',
      id: 16,
      img: require('../../assets/images/Banner-2.jpg'), // Replace with actual image URL
    },
  ];

  const handleClinicSelect = (selectedClinic) => {
    console.log('Selected clinic:', selectedClinic);
  };

  return (
    <View style={styles.pageContainer}>
      <Dropdown data={clinics} onSelect={handleClinicSelect} />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
    containerTotal : {
        flexDirection : "column",
        padding : 10,
        // alignContent : "flex-start",
        // alignItems : "flex-end",
        // alignSelf : "flex-start/"
        backgroundColor : "#CECECE",
        textAlign : "left",
        borderRadius : 5, 
        // borderWidth : 0.5,
        // shadowColor: '#000',    // Color of the shadow
        // shadowOpacity: 0.5,     // Opacity of the shadow
        // shadowRadius: 5,        // Blur radius of the shadow
        // shadowOffset: {         // Position of the shadow
        //   width: 10,             // Horizontal shadow offset
        //   height: 10,            // Vertical shadow offset
        // },
        // elevation: 10, 
    },
  container: {
    width: '100%',
    marginVertical: 10,
    alignItems : "center",
    
  },
  dropdownTrigger: {
    width : 300,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    // borderWidth : 1,
  },
  selectedText: {
    fontSize: 16,
    color: '#333',
  },
  dropdownContent: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    maxHeight: 200, // Adjust height if needed
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  clinicImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  clinicName: {
    fontSize: 16,
    fontWeight : "800",
    color: '#333',
  },
  pageContainer: {
    padding: 20,
  },
});

export default Page2Clinics;
