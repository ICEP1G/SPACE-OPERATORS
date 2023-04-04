import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import mainUserReducer from './reducers/mainUser/reducer';


const store = configureStore({
  reducer: {
    mainUser: mainUserReducer
  }
});

// Types permettant de simplifier l'utilisation de useSelector et useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;