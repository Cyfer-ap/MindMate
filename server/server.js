const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("MindMate API"));

mongoose.connect(process.env.MONGO_URI)
    .then(() => app.listen(5000, () => console.log("Server running on port 5000")))
    .catch(err => console.log(err));
