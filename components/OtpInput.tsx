// OtpInput.tsx
import React, { useRef, useEffect } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';


const OtpInput = ({ otp, setOtp,show, setShow, validateOTP }) => {
  const inputsRef = useRef([]);

  const handleChange = (index, text) => {
    const newOtp = otp.split('');
    newOtp[index] = text;
    setOtp(newOtp.join(''));

    // If text is entered, move to the next input
    if (text && index < 5) {
      inputsRef.current[index + 1]?.focus(); // Focus the next input if available
    }

  };

  const handleBackspace = (index, key) => {
    if (key === 'Backspace' && index > 0) {
      inputsRef.current[index - 1]?.focus(); // Move to the previous input when backspace is pressed
    }
  };

  

  useEffect(() => {
    if (otp === '') {
      inputsRef.current[0]?.focus();
    }
  }, [otp]);
  



  return (
    <View style={styles.containerTotal}>
    <View style={styles.container}>
      {[...Array(6)].map((_, index) => (
        <TextInput
          key={index}
          ref={(el) => (inputsRef.current[index] = el)}
          style={styles.input}
          maxLength={1}
          keyboardType="numeric"
          value={otp[index] || ''}
          onChangeText={(text) => handleChange(index, text)}
          onKeyPress={({ nativeEvent }) => handleBackspace(index, nativeEvent.key)}
        />
      ))}
    </View>
    <View style={styles.button}><TouchableOpacity 
                style={styles.customButton} 
                onPress={()=>{setShow(!show); validateOTP()}}
            >
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity></View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerTotal : {
    flexDirection:"column",
  },
  container: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    gap : 3,
    paddingLeft : 9,
    marginBottom: 10,
    marginTop : 15,
  },
  input: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
  },
  customButton: {
    backgroundColor: 'red',
    height: 50, // Custom height
    width: 150, // Custom width
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8, // Custom border radius for rounded corners
    paddingHorizontal: 20,
    
},
buttonText: {
    color: '#fff', // White text color
    fontSize: 16,
    fontWeight: 'bold',
    
},
button : {
    flexDirection : "column",
    paddingTop : 19,
    paddingLeft : 9,
},
});

export default OtpInput;
