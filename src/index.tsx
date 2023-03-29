import { NativeRouter, Route, Routes } from 'react-router-native';
import { Provider } from 'react-redux';
import store from './store';


const App = () => {
  return (
    <Provider store={store}>
      <NativeRouter>
        <Routes>

        </Routes>
      </NativeRouter>
    </Provider>
  );
};

export default App;