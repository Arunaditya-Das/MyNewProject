import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AppointmentForm = () => {
  return (
    <View style={styles.formControl}>
      <View style={styles.stack}>
        <View style={styles.labelContainer}>
          <Text style={styles.titleText}>Book an</Text>
          <Text style={styles.titleText}>appointment.</Text>
          <Text style={styles.subtitleText}>
            For <Text style={styles.highlightText}>new</Text> and{" "}
            <Text style={styles.highlightText}>returning</Text> customers.
          </Text>
          <Text style={styles.phoneLabel}>Phone Number</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formControl: {
    // marginBottom: 16,
    padding: 10,
    width: '100%', // Ensure it takes up the full width of its container
  },
  stack: {
    marginBottom: 8,
    flexDirection: "column", // Changed to column for better text stacking
    justifyContent: "center",
    alignItems: "flex-start", // Align text to the start (left)
  },
  labelContainer: {
    // Any additional styling for the label container
  },
  titleText: {
    color:"#3E3B63",
    fontSize: 35,
    fontWeight: "700",
    lineHeight: 40,
    letterSpacing: 5,
  },
  subtitleText: {
    marginTop: 8,
    marginBottom: 16,
    fontSize: 14,
    letterSpacing: 1,
    color:"#3E3B63",
  },
  highlightText: {
    textTransform: "uppercase",
    fontWeight: "700",
  },
  phoneLabel: {
    color:"#3E3B63",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 1,
  },
});

export default AppointmentForm;
