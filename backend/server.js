require("dotenv").config();

const express = require("express");
const cors = require("cors");
require("./config/db"); 

const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoute");
const hotelRoutes = require("./routes/hotelRoute");

const app = express();


// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.use("/api/auth", authRoutes);
app.use("/api/admin",adminRoutes);
app.use("/api/hotel",hotelRoutes);



// Test API
app.get("/", (req, res) => {
    res.json({
        message: "Hotel Management Backend Running"
    });
});


// Server Start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});