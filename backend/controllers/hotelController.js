const bcrypt = require("bcrypt");
const db = require("../config/db");

exports.registerHotel = async (req, res) => {
  try {
    const {
      hotelName,
      hotelEmail,
      hotelPhone,
      hotelCategory,
      ownerName,
      ownerEmail,
      address,
      city,
      state,
      pincode,
      password,
    } = req.body;

    const passwordHash = await bcrypt.hash(password, 10);

    const sql = `
INSERT INTO hotels
(
hotelName,
hotelEmail,
hotelPhone,
hotelCategory,
ownerName,
ownerEmail,
address,
city,
state,
pincode,
password,
role
)

VALUES (?,?,?,?,?,?,?,?,?,?,?,?)
`;

    db.query(
      sql,

      [
        hotelName,
        hotelEmail,
        hotelPhone,
        hotelCategory,
        ownerName,
        ownerEmail,
        address,
        city,
        state,
        pincode,
        passwordHash,
        "Manager",
      ],

      (err, result) => {
        if (err) {
          return res.status(500).json({
            message: err.message,
          });
        }

        res.json({
          message: "Hotel Registered Successfully",
        });
      },
    );
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
