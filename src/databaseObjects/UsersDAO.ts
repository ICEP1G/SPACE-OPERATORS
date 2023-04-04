import { User } from '../models/User';
import space_operator_db, { executeSQL, getSQLData } from '../database/space_operators_db' 


// Get the User of the section
export const actualUser = (): Promise<User[]> => {
    return getSQLData(
        'SELECT * FROM Users ORDER BY rowid ASC LIMIT 1',
        [],
        (rows) => rows.map((row) =>
            User(
                row['Id'],
                row['Uuid'],
                row['Name']
            ))
    );
};



// Create a new user in database
export const createUser = (user: User): Promise<number> => {
    return executeSQL(
        `INSERT INTO Users(Uuid, Name)
        VALUES (?, ?)`,
        [user.uuid, user.name]
    );
};

// Update the name of the User of the section
export const updateUserName = (user: User): Promise<number> => {
    return executeSQL(
        `UPDATE Users SET Name = ? WHERE rowid = 1`,
        [user.name]
    );
};