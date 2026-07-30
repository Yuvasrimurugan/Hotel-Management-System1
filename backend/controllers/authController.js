const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { createUser, findUserByEmail } = require("../models/User");


// Register

exports.register = async (req, res) => {

    try {

        const { firstname, lastname, email, phone, Password } = req.body;

        const existingUser = await findUserByEmail(email);

        if (existingUser) {
            return res.status(400).json({
                message: "Email already exists"
            });
        }

        const hashPassword = await bcrypt.hash(Password, 10);

        const user = await createUser(
            firstname,
            lastname,
            email,
            phone,
            hashPassword
        );


        res.status(201).json({
            message: "User Registered Successfully",
            user
        });


    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};



// Login

exports.login = async (req, res) => {

    try {

        const { email, Password } = req.body;

        const user = await findUserByEmail(email);


        if (!user) {
            return res.status(400).json({
                message: "User not found"
            });
        }


        console.log("Entered Password:", Password);
        console.log("User Data:", user);
        console.log("Password Hash:", user.PasswordHash);


        const match = await bcrypt.compare(
            Password,
            user.PasswordHash
        );


        if (!match) {

            return res.status(400).json({
                message: "Invalid Password"
            });

        }


        const token = jwt.sign(
            {
                id: user.UserID
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );


        res.json({

            message: "Login successful",

            token,

            user: {
                id: user.UserID,
                firstname: user.FirstName,
                lastname: user.LastName,
                email: user.Email
            }

        });


    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};