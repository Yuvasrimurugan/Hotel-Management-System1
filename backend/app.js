<<<<<<< HEAD
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

require("./config/db");

const authRoutes = require("./routes/authRoutes");
=======
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const db = require("./config/database");
>>>>>>> a0661921be0c44435a670e2ef7f12de7f0cc07ad

const app = express();

app.use(cors());
app.use(express.json());

<<<<<<< HEAD
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Hotel Management API Running...");
});

module.exports = app;
=======
// Auth Routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Hotel Management API Running");
});

app.get("/test-db", async (req, res) => {
    try {
        const [rows] = await db.query("SELECT NOW() AS currentTime");

        res.json({
            success: true,
            data: rows
        });
    } catch (err) {
        console.log(err);

        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
>>>>>>> a0661921be0c44435a670e2ef7f12de7f0cc07ad
