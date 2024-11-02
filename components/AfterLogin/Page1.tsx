import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../Miscellaneous/Header'
import Stepper from '../Miscellaneous/Stepper'
import SelectionList from './SelectionList'

export default function Page1() {
  return (
    <View style={styles.container}>
      <Header/>
      <Stepper/>
      
      {/* <Text style={styles.pageText}>Page1</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,   
    backgroundColor : "white",    // Makes the view take up the entire screen
    
  },
})