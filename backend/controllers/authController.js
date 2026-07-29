const bcrypt = require("bcrypt");
const generateToken = require("../utils/generateToken");

// Register (Database logic will be added later)
const register = async (req, res) => {
  res.status(201).json({
    success: true,
    message: "Register API Ready (Database Pending)",
  });
};

// Login (Using Dummy Data)
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Dummy user
    const user = {
      id: 1,
      full_name: "Nandhu",
      email: "nandhu@gmail.com",
      password: await bcrypt.hash("123456", 10),
      role: "customer",
    };

    if (email !== user.email) {
      return res.status(401).json({
        success: false,
        message: "Invalid Email",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid Password",
      });
    }

    const token = generateToken(user);

    res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      user: {
        id: user.id,
        full_name: user.full_name,
        email: user.email,
        role: user.role,
      },
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  register,
  login,
};