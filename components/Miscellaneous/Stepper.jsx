
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import SelectionList from '../AfterLogin/SelectionList';
import { useState,useRef } from 'react';
import Page2 from '../AfterLogin/Page2';
import ConsultationType from '../AfterLogin/ConsultationType';

function Stepper() {
    const [bgColor, setBgColor] = useState('white');
    const [text, setText] = useState('');
    const [petselected, setPetselected] = useState(false);
    const [appointType, setAppointType] = useState(false);
  const [error, setError] = useState('');
  const [noerror, setNoerror] = useState(false);
  // const scrollViewRef = useRef<ScrollView>(null);

  const handleSubmit = () => {
    if (text.trim() === '' || !petselected || !appointType) {
        setError('Please fill all fields');
        // return false; // Return false to prevent proceeding
        setNoerror(true);
    } else {
        setError('');
        setNoerror(false);
        return true; // Return true to allow proceeding
        // scrollViewRef.current?.scrollToEnd({ animated: true });
    }
  };


  const handlePress = () => {
    // Toggle the background color when the view is pressed
    setBgColor(prevColor => (prevColor === 'white' ? '#FCC198' : 'white'));
    setAppointType(!appointType);
  };

  return (
    <ScrollView
    // ref={scrollViewRef}
    contentContainerStyle={{ flexGrow: 1 }}
    style={{ flex: 1 }}
>
    <View style={{flex: 1, justifyContent : "center", alignItems : "stretch",}}>
    <ProgressSteps
    activeStepIconBorderColor="#FAE3D6"
    activeStepIconColor="#FAE3D6"
    completedProgressBarColor="#515147"
    completedStepIconColor="#C1A697"
    disabledStepIconColor="#C1A697"
    progressBarColor="#C1A697"
    activeLabelColor="#C1A697"
    
    >
        <ProgressStep label="Pet and Appointment"
        onNext={handleSubmit}
        nextBtnStyle={{ padding: 10, backgroundColor: '#252354', borderRadius: 5 }}
        nextBtnTextStyle={{ color: '#FAE3D6' }}
        errors={noerror}
        previousBtnStyle={{  }}
        previousBtnTextStyle={{color: '#252354', fontWeight : 600}}
        >
            <View style={{}}>
                {/* <Text style={{color : "black", fontSize : 16}}>This is the content within step 1!</Text> */}
                <Text style={{textAlign : "left", paddingHorizontal : 25, fontSize : 26, color: '#252354'}}>My Pets</Text>
                <SelectionList setPetSelected={setPetselected} petselected={petselected} setAppointType={setAppointType}/>
                <Text style={{textAlign : "left", paddingHorizontal : 20, fontSize : 26, color: '#252354', marginVertical : 10}}>Choose Appointment Type</Text>
                <View style={{alignItems : "center"}} ><TouchableOpacity style={[styles.box,{ backgroundColor: bgColor }]} onPress={handlePress}>
                    <ConsultationType/>
                    {/* <View><Text style={{textAlign : "center",color : "#2C2856",fontSize : 16, padding:3, fontWeight : 500 }}>Consultation</Text></View>
                    <View><Text style={{textAlign : "center",color : "#2C2856",fontSize : 16, padding:3}}>Price : AED 241.5</Text></View> */}
                </TouchableOpacity></View>
                <View style={{position : "relative", paddingRight: 10,}} >
                <Text style={{textAlign : "left", paddingHorizontal : 20, fontSize : 26, color: '#252354', marginVertical : 10}}>Reason For Visit
                <Text style={styles.required}> *</Text>
                </Text>
                <View>
                <TextInput
                    style={styles.input}
                    placeholder="Type here"
                    value={text}
                    onChangeText={(value) => setText(value)}
                />
                    {error ? <Text style={styles.errorText}>{error}</Text> : null}
                </View>
                </View>
            </View>
        </ProgressStep>
        <ProgressStep label="Clinic and Vet"
         nextBtnStyle={{ padding: 10, backgroundColor: '#252354', borderRadius: 5 }}
         nextBtnTextStyle={{ color: '#FAE3D6' }}
         previousBtnStyle={{  }}
         previousBtnTextStyle={{color: '#252354', fontWeight : 600}}
         >
            <View style={{ alignItems: 'center' }}>
                {/* <Text>This is the content within step 2!</Text> */}
                <Page2/>
            </View>
        </ProgressStep>
        <ProgressStep label="Confirmation"
        nextBtnStyle={{ padding: 10, backgroundColor: '#252354', borderRadius: 5 }}
        nextBtnTextStyle={{ color: '#FAE3D6' }}
        previousBtnStyle={{  }}
        previousBtnTextStyle={{color: '#252354', fontWeight : 600}}
        >
            <View style={{ alignItems: 'center' }}>
                <Text>This is the content within step 3!</Text>
            </View>
        </ProgressStep>
    </ProgressSteps>
</View>
</ScrollView>
  );
}
const styles = StyleSheet.create({
    box: {
        width: "70%",
        // height: "50%",
        alignContent : "center",
        justifyContent : "center",
        marginVertical : 15,
        height: 120,
        // borderColor : "black",
        // borderWidth : 0.1,
        borderRadius : 10,
        backgroundColor: 'white',
        shadowColor: '#000',    // Color of the shadow
        shadowOpacity: 0.5,     // Opacity of the shadow
        shadowRadius: 5,        // Blur radius of the shadow
        shadowOffset: {         // Position of the shadow
          width: 10,             // Horizontal shadow offset
          height: 10,            // Vertical shadow offset
        },
        elevation: 10,           // Adds shadow on Android (necessary for Android)
      },
      required: {
        color: 'red', // Style for the asterisk to make it red
        fontSize: 18, // Same font size as the label
        // justifyContent : "flex-start",
        position: 'absolute',
    top: -5,             // Position the asterisk to the top
    right: -10,   
        // textAlign : "auto",
      },
      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
      errorText: {
        color: 'red',
        marginBottom: 10,
        paddingHorizontal: "auto",
        marginLeft : 10
      },
  })
export default Stepper;