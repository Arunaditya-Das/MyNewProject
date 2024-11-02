import * as React from 'react';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
// import App from './src/App';
import Page2Clinics from "./Page2Clinics"

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

export default function Page2() {
  return (
    <PaperProvider theme={theme}>
       <Page2Clinics/>
    </PaperProvider>
  );
}

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import Page2Clinics from "./Page2Clinics"

// export default function Page2() {
//   return (
//     <View>
//       {/* <Text>Page2</Text> */}
//         <Page2Clinics/>
//     </View>
//   )
// }

// const styles = StyleSheet.create({})