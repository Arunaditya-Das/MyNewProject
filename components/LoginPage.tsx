import { Dimensions, SafeAreaView, ScrollView,View, StyleSheet, Image } from 'react-native';
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";
import * as React from 'react';
import AppointmentForm from './AppointmentForm'; // Import the component
import PhoneInput from './PhoneInput'; // Import the component

const { width, height } = Dimensions.get('window');

export default function LoginPage() {
  const isLargeScreen = width >= 1200;

  const showError = (message) => {
    showMessage({
      message,
      type: "danger", // You can use "danger" for errors
      duration: 3000, // Duration in milliseconds
      position: "top", // Position of the message
    });
  };

  const showOtpMessage = (message) => {
    showMessage({
      message,
      type: "success", // You can use "danger" for errors
      duration: 3000, // Duration in milliseconds
      position: "top", // Position of the message
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backgroundContainer}>
        {/* Image as background */}
        {isLargeScreen ? (
          <Image
            style={styles.loginImage}
            source={require("../assets/images/Login_Screen.jpg")}
          />
        ) : (
          <View style={styles.backgroundColor} />
        )}
        {/* Integrating AppointmentForm component */}
        <ScrollView contentContainerStyle={styles.formContainer}>
          <AppointmentForm />
          <PhoneInput showError={showError} showOtpMessage={showOtpMessage}/>
        </ScrollView>
        <FlashMessage/> 
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundColor : {
    width: width,
    height: height,
    backgroundColor: '#FAE2D6',
    position: "absolute",
  },
  backgroundContainer: {
    flex: 1,
    position: 'relative', // Use relative positioning for the background
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginImage: {
    position: 'absolute', // Absolute positioning for background image
    width: width,
    height: height,
    top: 0,
    left: 0,
    zIndex: -1, // Place the image behind the form
  },
  formContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: 16,
    width: width,
    zIndex: 1, // Ensure form is on top of the image
  },
});