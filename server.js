const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const PORT = 5000;

const app = express();

const MONGO_URI = "mongodb+srv://admin:parhladSingh@cluster0.w4wq4bu.mongodb.net/Contact?retryWrites=true&w=majority";

// Middleware
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'frontend', 'dist')));

mongoose.connect(MONGO_URI);

const db = mongoose.connection;
db.on('error', (err) => {
    console.error('Mongodb connection error', err);
});
db.once('open', () => {
    console.log('Mongodb is connected');
});

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    emailaddress: String,
    phone: Number,
    yourmessage: String
});

const User = mongoose.model('User', userSchema);

app.post('/contact', async (req, res) => {
    try {
        const newUser = new User({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            emailaddress: req.body.emailaddress,
            phone: req.body.phone,
            yourmessage: req.body.yourmessage
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        console.error("Error during registration", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}/`);
});

module.exports = app;