const mongoose = require("mongoose")

/**
 * Schema for registering new users
 */

const Register = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    }
);

const RegisterSchema = mongoose.model('Register', Register, "registered_users");


module.exports = RegisterSchema