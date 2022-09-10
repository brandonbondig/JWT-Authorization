const express = require("express")
const cors = require('cors')
const mongoose = require("mongoose")
const app = express()

// Connect server to mongoose dbs

mongoose.connect("mongodb+srv://mongo:mongo@playground.3qfbq5z.mongodb.net/backend?retryWrites=true&w=majority", () => {
    console.log("connected");
})

// Middleware
app.use(cors())
app.use(express.json())

// Routes
const register = require("./api/register")
const login = require("./api/login")
const changePass = require("./api/change_pass")

// Endpoints
app.use("/api/register", register)
app.use("/api/login", login)
app.use("/api/change_password", changePass)

// Listener
app.listen(3000, () => {
    console.log("Server started");
})