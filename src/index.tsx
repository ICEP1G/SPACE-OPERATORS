import * as React from "react";
import { NativeRouter, Route, Routes } from 'react-router-native';
import { Provider } from 'react-redux';
import { View, ScrollView, Text, Image, StyleSheet, Button, TouchableOpacity, TextInput, Dimensions, useWindowDimensions} from "react-native"
import { initializeDatabase } from "./database/space_operators_db";
import Home from "./pages/Home/index";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState, useCallback } from 'react';
import Lobby from "./pages/Lobby";
import InGame from "./pages/InGame";
import Historic from "./pages/Historic";
import store from "./store";


initializeDatabase();

const App = () => {
  SplashScreen.preventAutoHideAsync();
  const phoneScreen = useWindowDimensions();

  // Load the fonts for the entire app when launching the app
  const [fontsLoaded] = useFonts({
    'protomolecule': require('../assets/fonts/Protomolecule.ttf'),
    'roboto-light': require('../assets/fonts/Roboto/Roboto-Light.ttf'),
    'roboto-regular': require('../assets/fonts/Roboto/Roboto-Regular.ttf'),
    'roboto-medium': require('../assets/fonts/Roboto/Roboto-Medium.ttf'),
    'roboto-bold': require('../assets/fonts/Roboto/Roboto-Bold.ttf'),
    'roboto-bold-italic': require('../assets/fonts/Roboto/Roboto-BoldItalic.ttf')
  });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  else
  {
    SplashScreen.hideAsync();
  }
  

  return (
    <Provider store={store}>
      <View style={{width: phoneScreen.width, height: phoneScreen.height, flex: 1, flexDirection: "column", position: "absolute", zIndex: 10}}>
        <NativeRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Lobby" element={<Lobby/>} />
            <Route path="/InGame" element={<InGame/>} />
            <Route path="/Historic" element={<Historic/>} />
          </Routes>
        </NativeRouter>
      </View>
    </Provider>
  );
};


// Get the real size of the phone screen and apply it to the former View
const styles = StyleSheet.create({
  indexView:{
      // width: Dimensions.get('window').width,
      // height: Dimensions.get('window').height,
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      zIndex: 10
  }
})

export default App;