import * as SQLite from 'expo-sqlite';
import { OldGame } from '../models/OldGame';
import space_operator_db, { getSQLData } from '../database/space_operators_db' 


const space_operators_db = SQLite.openDatabase('space_operators.db');

// Get the User of the section
export const GetAllGames = (): Promise<OldGame[]> => {
    return getSQLData(
        'SELECT * FROM oldGame ORDER BY Id DESC',
        [],
        (rows) => rows.map((row) =>
            OldGame(
                row['Id'],
                row['Rounds'],
                row['GameCreationDate'],
                row['PlayersNames']
            ))
    );
};

