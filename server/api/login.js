const express = require("express")
const Users = require('../schemas/register')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()

/**
 * Router for handling login requests
 */

const router = express.Router()


router.post("/", async (req, res) => {

    // Declaring username and password from the request body
    const { username, password } = req.body

    // Using mongoose to see if user is in dbs
    const user = await Users.findOne({ username }).lean()

    // If user not in dbs, throw error
    if (!user) {
        return res.status(401).send({ status: "error", error: "Username/Password not valid" })
    }

    // If user is in dbs, compare the password to the-
    // encrypted password in the dbs
    if (await bcrypt.compare(password, user.password)) {

        // jwt sign a token and then returns it to the client
        const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_TOKEN)

        return res.status(200).send({ status: "ok", data: token })
    }

    res.status(401).send({ status: "error", error: "Username/Password not valid" })
})

module.exports = router