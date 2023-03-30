import * as SQLite from 'expo-sqlite';

const space_operators_db = SQLite.openDatabase('space_operators.db');

export const initializeDatabase = () => {
    space_operators_db.transaction((tx) => {
        tx.executeSql(`
            CREATE TABLE IF NOT EXISTS Players(
                Id INTEGER PRIMARY KEY NOT NULL,
                Uuid VARCHAR(40) NOT NULL,
                Name VARCHAR(20) NOT NULL);`
        );
        tx.executeSql(`
            CREATE TABLE IF NOT EXISTS OldGames(
                Id VARCHAR(10) NOT NULL,
                Rounds INTEGER NOT NULL,
                GameCreationDates DATETIME NOT NULL,
                PlayersNames VARCHAR(500) NOT NULL);`
        );
    });
};

export default space_operators_db;
