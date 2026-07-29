exports.createUser = async (user) => {
    return db.query(
        "INSERT INTO users(name,email,password) VALUES(?,?,?)",
        [user.name, user.email, user.password]
    );
};