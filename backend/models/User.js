const db = require("../config/db");


// Create User
const createUser = async (
    firstname,
    lastname,
    email,
    phone,
    passwordhash
) => {

    const [result] = await db.promise().query(
        `
        INSERT INTO users
        (FirstName, LastName, Email, Phone, PasswordHash)
        VALUES (?, ?, ?, ?, ?)
        `,
        [
            firstname,
            lastname,
            email,
            phone,
            passwordhash
        ]
    );


    return {
        id: result.insertId,
        firstname,
        lastname,
        email,
        phone
    };
};


// Find User By Email
const findUserByEmail = async(email)=>{

    const [rows] = await db.promise().query(
        `
        SELECT * FROM users
        WHERE Email = ?
        `,
        [email]
    );

    return rows[0];

};
module.exports = {
  createUser,
  findUserByEmail,

    createUser,
    findUserByEmail
};