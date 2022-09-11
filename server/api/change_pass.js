const express = require("express");
const Users = require("../schemas/register");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

/**
 * Router for handling change of password request
 */

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    // Declaring token and password from requested body
    const { token, newPassword: plainTextPassword } = req.body;

    // Verify the token hasnt been tampered with
    const user = jwt.verify(token, process.env.JWT_TOKEN);

    const _id = user.id;

    // Hashing the new password
    const password = await bcrypt.hash(plainTextPassword, 10);

    // Updating the new password in mongodb
    await Users.updateOne(
      { _id },
      {
        $set: { password: password },
      }
    );

    res.status(200);
  } catch (err) {
    res.status(400);
  }
});

module.exports = router;
