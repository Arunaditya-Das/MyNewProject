import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useState } from 'react'
// import Logo from '../../assets/images/logo.svg';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Header() {
    const [firstName, setFirstName] = useState("Abdullah");
    const [lastName, setLastName] = useState("Rahman");
    const fullName = firstName+" "+lastName;

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'My Profile', value: 'myProfile'},
      {label: 'Logout', value: 'logout'}
    ]);

  return (
    <View style={styles.parent}>
      <View style={styles.container}>
        <View style={styles.imageParent}>
        <Image style={styles.image} source={require("../../assets/images/logo.png")} />
        </View>
        <View style={styles.name}>
            <Text style={styles.text}>{firstName} {lastName}</Text>
            {/* <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder={fullName}
                style={styles.dropdown} // Custom dropdown style
                textStyle={styles.text} // Custom text style for the dropdown
                dropDownContainerStyle={styles.dropDownContainer} // Custom dropdown container style
                zIndex={1000}
            /> */}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    parent : {
        // height: 50,
        backgroundColor: '#FAE3D6',
    },
    container : {
        padding:8,
        flexDirection:"row",
        justifyContent : "space-between",
        // justifyContent : "space-around",
    },
    image : {
        height : 40,
        width : 85,
        objectFit : "fill"
        // borderColor : "black",
    },
    name : {
        justifyContent : "center",
        textAlign : "center",
        zIndex : 1000,
    },
    text : {
        fontSize : 15,
        color : "#252354",
        fontWeight : "500"
    },
    dropdown : {
        backgroundColor: '#FAE3D6', // Brown background color
        // borderWidth: 0, // Removing the border
        height: 40, // Adjust height to match the image height
        width: 150, // Adjust width for the dropdown
        zIndex : 1000,
    },
    // dropdownText: {
    //     fontSize: 15,
    //     color: '#FFFFFF', // White text color for contrast
    //     fontWeight: '500',
    // },
    dropDownContainer: {
        backgroundColor: '#FAE3D6', // Brown background for the dropdown container
        borderWidth: 0, // Removing border of the dropdown container
        zIndex : 1000,
    }
})