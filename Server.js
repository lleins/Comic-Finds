const app = express();
const port = process.env.PORT || 5000;
import User from './Models/User.js'; //For loggin and creating account
import Saved from './Models/Saved.js'; //For saved pics/vids
import Login from './Models/Login.js'; //For loggin and creating account
import News from './Models/News.js'; //For saved pics/vids
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from 'bcrypt';
import jsonwebtoken from "jsonwebtoken";
import dotenv from 'dotenv';
import cookie from "cookie";
import https from "https";



dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server Running...');
});


const secretKey = process.env.JWT_SECRET;



mongoose.connect('mongodb://127.0.0.1:27017/Comic-Finds', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const PP_Login_Connection = mongoose.connection; //establish connection to database

PP_Login_Connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
PP_Login_Connection.once('open', () => {
    console.log('Connected to MongoDB - Comic-Finds');
});



// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});






























