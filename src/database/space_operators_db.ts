import * as SQLite from 'expo-sqlite';
import { actualUser, createUser } from '../databaseObjects/UsersDAO';
import { User } from '../models/User';
import uuid from 'react-native-uuid';
import { randomUserName } from "../services/RandomNameGenerator";

const space_operators_db = SQLite.openDatabase('space_operators.db');

export const initializeDatabase = () => {
  // space_operators_db.closeAsync();
  // space_operators_db.deleteAsync();
    space_operators_db.transaction((tx) => {
        tx.executeSql(`
            CREATE TABLE IF NOT EXISTS Users(
                Id INTEGER PRIMARY KEY NOT NULL,
                Uuid VARCHAR(50) NOT NULL,
                Name VARCHAR(20) NOT NULL
                )
        `);
        tx.executeSql(`
            CREATE TABLE IF NOT EXISTS OldGames(
                Id VARCHAR(10) NOT NULL,
                Rounds INTEGER NOT NULL,
                GameCreationDates VARCHAR(10) NOT NULL,
                PlayersNames VARCHAR(500) NOT NULL
                )
        `);
    });
};


// Method to call when using a SELECT statement
export const getSQLData =
    <T>(query: string, args: (string | number | null)[], cb: (rows: any[]) => T): Promise<T> =>
        new Promise<T>((resolve, reject) => {
            space_operators_db.readTransaction((tx) =>
                tx.executeSql(
                    query,
                    args,
                    (tx, resultSet) => {
                        resolve(
                            cb(resultSet.rows._array)
                        );
                    },
                    (tx, error) => {
                        reject(error);
                        return true;
                    }
                )
            )
        });


// Method to call when using an INSERT, UPDATE or DELETE statement
export const executeSQL =
(query: string, args: (string | number | null)[]): Promise<number> =>
  new Promise<number>((resolve, reject) => {
    space_operators_db.transaction((tx) => {
      tx.executeSql(
        query,
        args,
        (tx, resultSet) => {
          if (resultSet.insertId)
            resolve(resultSet.insertId);
          else
            resolve(resultSet.rowsAffected);
        },
        (tx, error) => {
          reject(error);
          return true;
        }
       )
    })
  });


export default space_operators_db;
