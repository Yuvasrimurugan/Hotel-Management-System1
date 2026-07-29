exports.register = async (req, res) => {
    res.json({
        success: true,
        message: "Register API"
    });
};

exports.login = async (req, res) => {
    res.json({
        success: true,
        message: "Login API"
    });
};

exports.logout = async (req, res) => {
    res.json({
        success: true,
        message: "Logout API"
    });
};

exports.forgotPassword = async (req, res) => {
    res.json({
        success: true,
        message: "Forgot Password API"
    });
};

exports.resetPassword = async (req, res) => {
    res.json({
        success: true,
        message: "Reset Password API"
    });
};

exports.getProfile = async (req, res) => {
    res.json({
        success: true,
        message: "Profile API"
    });
};

exports.updateProfile = async (req, res) => {
    res.json({
        success: true,
        message: "Update Profile API"
    });
};