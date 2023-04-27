import { createSlice } from '@reduxjs/toolkit';
import { OldGame } from '../../models/OldGame';
import { setOldGamesAction } from './action';

export interface HistoricState {
    oldGames: OldGame[]
}

const initialState: HistoricState = {
    oldGames: []
};

    
const reducer = createSlice({
    name: "historic",
    initialState: initialState,
    reducers: {
        setOldGames: setOldGamesAction
    },
});

export const { setOldGames } = reducer.actions;
export default reducer.reducer;