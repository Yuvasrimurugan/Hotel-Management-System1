const db = require("../config/db");

// ================= ADMIN DASHBOARD =================

exports.getDashboard = (req, res) => {
  const usersQuery = `
        SELECT COUNT(*) AS total_users
        FROM users
    `;

  const hotelsQuery = `
        SELECT COUNT(*) AS total_hotels
        FROM hotels
    `;

  db.query(usersQuery, (err, usersResult) => {
    if (err) {
      console.log("Users Error:", err);

      return res.status(500).json({
        message: "Users query error",
      });
    }

    db.query(hotelsQuery, (err, hotelsResult) => {
      if (err) {
        console.log("Hotels Error:", err);

        return res.status(500).json({
          message: "Hotels query error",
        });
      }

      res.status(200).json({
        users: usersResult[0].total_users,

        hotels: hotelsResult[0].total_hotels,

        // Tables not created yet
        bookings: 0,

        revenue: 0,
      });
    });
  });
};
