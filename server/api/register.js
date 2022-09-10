const express = require("express")
const bcrypt = require('bcrypt')
const router = express.Router()

/**
 * Router for registering new users
 */

// Import our mongoose schema
const RegisterSchema = require('../schemas/register')

router.post("/", async (req, res) => {

    // Get password and username from the request body
    // Encrypt the password with the bcrypt library
    const { username, password: plainTextPassword } = req.body
    const password = await bcrypt.hash(plainTextPassword, 10)

    // Sets username an password requirements
    if (typeof username !== "string" || typeof plainTextPassword !== "string") {
        return res.status(400).json({ status: "error", error: "Invalid Username or Password" })
    }

    try {

        // Add user to dbs
        const user = await RegisterSchema.create({
            username: username,
            password: password
        })

        console.log(user);
        res.send(201)

    } catch (err) {
        err.code == 11000 ?
            res.status(400).send({ status: "error", error: "Username taken" })
            : res.json(err)

    }
})

module.exports = router