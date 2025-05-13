// D:\OLP\MindMate\server\server.js

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const authRoutes = require('./routes/auth')

const app = express()
app.use(cors())
app.use(express.json())

// ✅ THIS IS THE CRUCIAL LINE
app.use('/api/auth', authRoutes)

app.get('/test', (req, res) => {
    res.send('API is working')  // test route
})

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () =>
            console.log(`Server running on port ${process.env.PORT}`)
        )
    })
    .catch(err => console.error(err))
