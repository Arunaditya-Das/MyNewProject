import React from "react";
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Button, Alert, Dimensions } from "react-native";
import { createRef, useEffect, useRef,useState } from "react";
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";
import { useNavigation } from '@react-navigation/native';
// import { useSessionContext } from "../context/SessionContext";
import { setItemLocal } from "../utils";
import axios from "axios";
import OtpInput from "./OtpInput";
import authAPI from "../api/authAPI";
import testAPI from "../api/testAPI";
// import { setItemLocal } from "../utils";
const OTP_TIMER = 30;

const { width } = Dimensions.get('window');


const PhoneInput = ({showError,showOtpMessage}) => {
    // const navigation = useNavigation();
    const [showOtpInput, setShowOtpInput] = useState(false);
    let showGetOtp= (!showOtpInput) ;
    const COUNTRY_CODE = "+971"; // Example country code
    const PHONE_FORMAT = "99 999 9999"; // Example phone format
    const [phoneNo, setPhoneNo] = useState("");
    const [otp, setOtp] = useState("");
    const [otpError, setOtpError] = useState(false);
    const [userFound, setUserFound] = useState(false);
    const navigation = useNavigation();
    const [animalList, setAnimalList] = useState([]);
    const [userID, setUserID] = useState("35053");
    // const { setSession, setIsLoggedIn } = useSessionContext();

    // useEffect(()=>{setUserID("35053")},[]);

      const handlePhoneNoChange = (text) => {
        setPhoneNo(text); // Just update the state with the phone number
      };
    
      const validatePhone = () => {
        const formattedPhoneNo = phoneNo.replace(/\s/g, ''); // Remove any spaces
        const formatLength = PHONE_FORMAT.replace(/\s/g, '').length; // Length of phone format without spaces
        
        // Basic validation
        if (formattedPhoneNo.length === 0) {
            showError("Phone number cannot be empty");
            return;
        } 
        else if (formattedPhoneNo.length < formatLength) {
            showError(`Phone number must be ${formatLength} digits long`);
            return;
        }
    
        // Call the API only if validation passes
        authAPI.generateOTP({ phoneNo: formattedPhoneNo })
            .then(({ data }) => {
                if (data.is_user_found) {
                    console.log("User found");
                    setShowOtpInput(true);
                    showOtpMessage("Otp sent");
                    console.log('Requesting OTP for phone number:', phoneNo);
                } else {
                    console.log("User not found");
                    showError("You are not registered");
                }
            })
            .catch((error) => {
                showError("Failed to send OTP. Please try again later.");
                console.error(error);
            });
    };

    const loginUser = (accountDetails) => {
        authAPI
            .setSession(accountDetails)
            .then((response) => {
                console.log('Set Session successful : ',response);
                // setSession(accountDetails);
                // setIsLoggedIn(true);
                // setItemLocal("session_id", accountDetails);
            })
            .catch((error) => {
                console.log(error);
            });
    };


    const handleAnimalList = () => {
        // console.log("function animal List running");
        testAPI.animalListOfUser({id : userID}).then(
            ({items})=>{
                setAnimalList(items);
                console.log("animals : ", items);
                console.log(userID)
            }
        )
        .catch((error)=>{
            console.log("error from handle animal list : ",error);
            // console.log(userID)
        })
    }

    const handleValidateOTP = () => {
        console.log("validateOTP function running");
    
        // Check for OTP errors before making the API request
        if (otp.length === 0) {
            const message = "Please enter OTP";
            setOtpError(true);
            showError(message);
            console.log(message);
            return;
        } else if (otp.length < 6) {
            const message = "Please enter a valid 6-digit OTP";
            setOtpError(true);
            showError(message);
            console.log(message);
            return;
        }
    
        // Proceed with OTP validation via API call
        authAPI.validate({ mobile: phoneNo, otp: otp })
            .then((response) => {
                console.log("Response after validate OTP : ",response[0] );
    
                // Assuming a successful validation returns a certain flag
                if (response.length > 0) {  // Change 'success' based on the actual API response structure 
                    loginUser(response[0]);    
                    setOtpError(false);
                    handleAnimalList();
                    showOtpMessage("OTP is correct");
                    navigation.navigate('Home');  // Navigate to the home screen
                } else {
                    setOtpError(true);
                    showError("Invalid OTP");
                }
            })
            .catch((error) => {
                console.error("Error validating OTP:", error);
                // showError("Failed to validate OTP. Please try again.");
                showError("Invalid OTP");
            });
    };
    

      const getOtpInvalidationMessage = () => {
        const OTPcorrect = "654321";
        let message = null;
        if (showOtpInput && otp.length === 0) {
            message = "Please enter OTP";
            setOtpError(true);
            showError(message);
        } else if (showOtpInput && otp.length < 6) {
            message = "Please enter valid OTP";
            setOtpError(true);
            showError(message);
        }
        else if( showOtpInput && otp === OTPcorrect){
            setOtpError(false);
            showOtpMessage("OTP is correct")
            navigation.navigate('Home')
            
        }
        else{
            setOtpError(true);
            showError("Invalid OTP");
        }
        return message;
    };

    const handleChangeBtnClick = () => {
        setShowOtpInput(false);
        setPhoneNo(''); // Clear phone number
        setOtp(''); // Clear OTP
        // Alert.alert("Change button clicked");
    };

    return (
        <View style={styles.container}>
            <View style={styles.phoneinput}>
            {/* Country Code */}
            <Text style={styles.countryCode}>{COUNTRY_CODE}</Text>
            {/* Phone Number Input */}
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={phoneNo}
                editable={!showOtpInput}
                onChangeText={handlePhoneNoChange}
                placeholder="Phone Number"
            />
            
            </View>
            <Text style={styles.helpertext}>Please enter your mobile number without prefixing Zero. Ex: 5x xxx xxxx</Text>

            {showOtpInput && (
                <TouchableOpacity onPress={handleChangeBtnClick}>
                    <Text style={styles.changeBtnText}>Change Number</Text>
                </TouchableOpacity>
            )}

            {showGetOtp && (<View style={styles.button}><TouchableOpacity 
                style={styles.customButton} 
                onPress={()=>{validatePhone();setOtp("")}}
            >
                <Text style={styles.buttonText}>Get OTP</Text>
            </TouchableOpacity></View>) }
            {/* <Button
                title="Get OTP"
                color="red"
                onPress={() => Alert.alert('Simple Button pressed')}
            /> */}
            {/* OTP Change Button */}
            {showOtpInput && (
                <View style={styles.otpContainer}>
                    <OtpInput
                        otp={otp}
                        setOtp={setOtp}
                        show={showOtpInput}
                        setShow={setShowOtpInput}
                        // validate={handleContinueClick}
                        validateOTP={handleValidateOTP}
                        // onChange={handleOtpChange}
                    />
                </View>
            )}
            
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {

    },
    phoneinput : {
        maxWidth:"70%",
        flexDirection:"row",
        // justifyContent: "flex-end",
        paddingLeft : 9,
        alignItems : "center",
    },
    tooltipContainer: {
        alignSelf: 'flex-start',
        marginBottom: 20,
    },
    input: {
        height: 45,
        width : "100%",
        // borderColor: '#D4D3DC',
        borderColor : "black",
        borderWidth: 1,
    },
    countryCode: {
        borderColor : "black",
        padding : 7,
        height: 45,
        textAlign:"center",
        textAlignVertical:"center",
        maxWidth : 70,
        marginRight:3,
        // width : "100%",
        width : "auto",
        // borderColor: '#D4D3DC',
        borderWidth: 1,

    },
    changeBtnText: {
        color: 'red',
        marginTop: 10,
        paddingLeft : 9,
    },
    helpertext : {
        maxWidth:"70%",
        paddingLeft : 9,
        paddingTop : 5,
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
        paddingTop : 19,
        paddingLeft : 9,
    },
    otpContainer: {
        marginBottom: 20, // Adjust spacing as needed
    },
});

export default PhoneInput;
