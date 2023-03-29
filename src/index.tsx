import * as React from "react";
import { NativeRouter, Route, Routes } from 'react-router-native';
import { IndexScrollView, IndexSafeAreaView } from "./styles_general"
import { Provider } from 'react-redux';
// import store from './store';
import Home from "./pages/Home/index";



const App = () => {
  return (
    // <Provider store={store}>
      <IndexSafeAreaView>
        <NativeRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </NativeRouter>
      </IndexSafeAreaView>
    // </Provider>
  );
};

export default App;