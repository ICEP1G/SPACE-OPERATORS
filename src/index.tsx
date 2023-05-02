import * as React from "react";
import { NativeRouter, Route, Routes } from 'react-router-native';
import { Provider } from 'react-redux';
import { useWindowDimensions, Platform, SafeAreaView as SafeAreaViewIOS, StatusBar} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { initializeDatabase } from "./database/space_operators_db";
import Home from "./pages/Home/index";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Lobby from "./pages/Lobby";
import InGame from "./pages/InGame";
import Historic from "./pages/Historic";
import store from "./store";
import { socket } from "./services/WebSocket";



initializeDatabase();
socket.onopen;

const App = () => {
  SplashScreen.preventAutoHideAsync();
  const phoneScreen = useWindowDimensions();

  // Load the fonts for the entire app when launching the app
  const [fontsLoaded] = useFonts({
    'protomolecule': require('../assets/fonts/Protomolecule.ttf'),
    'roboto-light': require('../assets/fonts/Roboto/Roboto-Light.ttf'),
    'roboto-light-italic': require('../assets/fonts/Roboto/Roboto-LightItalic.ttf'),
    'roboto-regular': require('../assets/fonts/Roboto/Roboto-Regular.ttf'),
    'roboto-medium': require('../assets/fonts/Roboto/Roboto-Medium.ttf'),
    'roboto-medium-italic': require('../assets/fonts/Roboto/Roboto-MediumItalic.ttf'),
    'roboto-bold': require('../assets/fonts/Roboto/Roboto-Bold.ttf'),
    'roboto-bold-italic': require('../assets/fonts/Roboto/Roboto-BoldItalic.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }
  else
  {
    SplashScreen.hideAsync();
  }
  

  return (
    <Provider store={store}>
      {Platform.OS === 'android' ?
        <SafeAreaView style={{width: phoneScreen.width, height: phoneScreen.height, flex: 1, flexDirection: "column", position: "relative", zIndex: 10, backgroundColor: 'black'}}>
          <StatusBar />
          <NativeRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Lobby" element={<Lobby/>} />
            <Route path="/InGame" element={<InGame/>} />
            <Route path="/Historic" element={<Historic/>} />
          </Routes>
        </NativeRouter>
      </SafeAreaView>
        :
        <SafeAreaViewIOS style={{width: phoneScreen.width, height: phoneScreen.height, flex: 1, flexDirection: "column", position: "relative", zIndex: 10, backgroundColor: 'black'}}>
          <NativeRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Lobby" element={<Lobby/>} />
            <Route path="/InGame" element={<InGame/>} />
            <Route path="/Historic" element={<Historic/>} />
          </Routes>
        </NativeRouter>
      </SafeAreaViewIOS>
      }
    </Provider>
  );
};

export default App;