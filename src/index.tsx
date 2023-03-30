import * as React from "react";
import { NativeRouter, Route, Routes } from 'react-router-native';
import { Provider } from 'react-redux';
// import store from './store';
import { View, ScrollView, Text, Image, StyleSheet, Button, TouchableOpacity, TextInput, Dimensions} from "react-native"
import { initializeDatabase } from "./database/space_operators_db";
import Home from "./pages/Home/index";


initializeDatabase();

const App = () => {
  return (
    // <Provider store={store}>
      <View style={styles.indexView}>
        <NativeRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            {/* <Route path="/Lobby" element={<Historic/>}
            <Route path="/InGame" element={<InGame/>}
            <Route path="/Historic" element={<Historic/>} */}
          </Routes>
        </NativeRouter>
      </View>
    // </Provider>
  );
};


// Get the real size of the phone screen and apply it to the former View
const styles = StyleSheet.create({
  indexView:{
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      zIndex: 10
  }
})

export default App;