<<<<<<< HEAD
const db = require("../config/db");

const createUser = async (full_name, email, password, role) => {
  const query = `
    INSERT INTO users (full_name, email, password, role)
    VALUES ($1, $2, $3, $4)
    RETURNING id, full_name, email, role, created_at;
  `;

  const values = [full_name, email, password, role];

  const result = await db.query(query, values);

  return result.rows[0];
};

const findUserByEmail = async (email) => {
  const result = await db.query(
    "SELECT * FROM users WHERE email = $1",
    [email]
  );

  return result.rows[0];
};

module.exports = {
  createUser,
  findUserByEmail,
=======
exports.createUser = async (user) => {
    return db.query(
        "INSERT INTO users(name,email,password) VALUES(?,?,?)",
        [user.name, user.email, user.password]
    );
>>>>>>> a0661921be0c44435a670e2ef7f12de7f0cc07ad
};