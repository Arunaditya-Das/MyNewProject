import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import bookingAPI from '../../api/bookingAPI'

export default function ConsultationType() {
    const [bookType, setBookType] = useState("");
    const [allBookTypes, setAllBookTypes] = useState([]);
    const [bookPrice, setBookPrice] = useState("");

    const AllBookingTypes = () => {
        // console.log("booking Type");
        bookingAPI.getAppointmentTypes({})
        .then((response)=>{
            console.log("booking Type entered : ",response)
            setAllBookTypes(response);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    useEffect(()=>{AllBookingTypes();console.log("All booking types : ",allBookTypes)},[])

  return (
    <View>
      <View><Text style={{textAlign : "center",color : "#2C2856",fontSize : 16, padding:3, fontWeight : 500 }}>Consultation</Text></View>
      <View><Text style={{textAlign : "center",color : "#2C2856",fontSize : 16, padding:3}}>Price : AED 241.5</Text></View>
    </View>
  )
}

const styles = StyleSheet.create({})