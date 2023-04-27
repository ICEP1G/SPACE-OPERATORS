import * as SQLite from 'expo-sqlite';
import { OldGame } from '../models/OldGame';
import space_operator_db, { executeSQL, getSQLData } from '../database/space_operators_db' 


const space_operators_db = SQLite.openDatabase('space_operators.db');

// Get the User of the section
export const GetAllGames = (): Promise<OldGame[]> => {
    return getSQLData(
        'SELECT * FROM OldGames ORDER BY rowid DESC',
        [],
        (rows) => rows.map((row) =>
            OldGame(
                row['GameId'],
                row['Rounds'],
                row['GameCreationDate'],
                row['PlayersNames']
            ))
    );
};


// Get infos for history 
export const createOldGame = (OldGame: OldGame): Promise<number> => {
    return executeSQL(
        `INSERT INTO OldGames(GameId, Rounds, GameCreationDate, PlayersNames)
        VALUES (?, ?, ?, ?)`,
        [OldGame.gameId, OldGame.rounds, OldGame.gameCreationDate, OldGame.playersNames]
    );
};
