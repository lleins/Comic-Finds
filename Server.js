const app = express();
const port = process.env.PORT || 4000;
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
import Cookies from "js-cookie";


dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server Running...');
});


const secretKey = process.env.JWT_SECRET;



//Create Account----------------------------------------------------------------------------------------

async function HashPassword(pass) {
    const hashedValue = await bcrypt.hash(pass, 10); //bcrypt
    return hashedValue;
}

app.post('/api/create_account', async (req, res) => {  //Creating Account
    const { email_create, password_create, date_create, news_create } = req.body;

    const existingUser = await Login.findOne({ email: email_create });

    if (existingUser) {
        return res.status(409).json({ message: 3 }); // User already exists
    }
    try {
        const hashedPassword = await HashPassword(password_create);

        const newUser = new Login({ email: email_create, password: hashedPassword, date: date_create, newsletter: news_create }); // Create and save the new user
        await newUser.save();

        const token = jsonwebtoken.sign( //Assigns a login token
            {
                email: email_create,
            },
            secretKey, // Replace with your actual secret key
            {
                expiresIn: '1d', // Token expiration time (e.g., 1 hour)
            }
        );

        return res.status(201).json({ message: 1, token: token }); // User created successfully
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 0 }); // Server error
    }
});



//Create Account----------------------------------------------------------------------------------------



//Sign in------------------------------------------------------------------------------------------------

app.post('/api/login', (req, res) => { //Logging in
    const { email, password } = req.body;

    Login.findOne({ email: email }) //checks account with duplicate email
        .then(user => {
            if (!user) {
                // User not found
                console.log('User not found');
                res.status(400).json({ success: 0, message: 'User not found' });
            } else {
                bcrypt.compare(password, user.password, (err, result) => { //compares hashed passwords
                    if (err) {
                        res.status(401).json({ success: 0, message: 'Authentication failed' }); //Server failed/Issue
                        console.log("Error Comparing");
                        return;
                    }
                    if (result) {
                        const token = jsonwebtoken.sign( //Assigns a login token
                            {
                                email: user.email,
                            },
                            secretKey, // Replace with your actual secret key
                            {
                                expiresIn: '1d', // Token expiration time (e.g., 1 hour)
                            }
                        );

                        res.status(200).json({ success: 1, message: 'Authentication successful', token: token, }); //sends token
                        console.log("Password comparing success");
                    } else {
                        res.status(401).json({ success: 0, message: 'Authentication failed' }); //failed
                        console.log("Password Comparing Failed");
                    }
                });
            }
        })
        .catch(err => {
            console.error('Error finding user:', err);
            res.status(500).json({ success: 0, message: 'Server error' }); //Error with server communication
        });


});


//Sign in------------------------------------------------------------------------------------------------



//Return Account Info------------------------------------------------------------------------------------------------

app.post('/api/Account_Info', (req, res) => { //Logging in
    const { email } = req.body;

    try {
        // Verify and decode the token
        const decoded = jsonwebtoken.verify(email, secretKey);

        // Extract email from the decoded token
        const userEmail = decoded.email;

        console.log('Email:', userEmail);

        Login.findOne({ email: userEmail }) //checks account with duplicate email
            .then(user => {
                if (!user) {
                    // User not found
                    console.log('User not found');
                    res.status(400).json({ success: 0, message: 'User not found' });
                } else {
                    console.log('User found');
                    res.status(200).json({ success: 1, email: user.email, date: user.date });
                }

            })
            .catch(err => {
                console.error('Error finding user:', err);
                res.status(500).json({ success: 0, message: 'Server error' }); //Error with server communication
            });
    } catch (error) {
        // Handle token verification error
        console.error('Error decoding token:', error.message);
    }




});


//Return Account Info------------------------------------------------------------------------------------------------




//Save to Watchlist------------------------------------------------------------------------------------------------

app.post('/api/save_comic', async (req, res) => {
    const { email, url, description, price, write } = req.body;

    try {

        const savedCount = await Saved.countDocuments({ email: email });
        if (savedCount >= 30) {
            return res.status(201).json({ message: 3 });
        }


        const existingUser = await Saved.findOne({ email: email, description: description });

        if (existingUser) {
            console.log("exists");
            return res.status(201).json({ message: 0 });
        }


        const newUser = new Saved({ email: email, url: url, description: description, price: price, write: write });
        await newUser.save();
        console.log("doesnt exist and saved");
        return res.status(201).json({ message: 1 });

    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error: error });
    }
});

//Save to Watchlist------------------------------------------------------------------------------------------------





//Get Watchlist------------------------------------------------------------------------------------------------

app.post('/api/get_saved_comics', async (req, res) => {
    const { email } = req.body;

    const existingUsers = await Saved.find({ email: email });

    if (existingUsers.length > 0) {
        return res.status(201).json({ message: 1, existingUsers });
    } else {
        return res.status(201).json({ message: 0 });
    }
})

//Get Watchlist------------------------------------------------------------------------------------------------


//Delete Comic -------------------------------------------------------------------------------------------
app.post('/api/delete_saved_comic', async (req, res) => {
    const { email, description } = req.body;

    try {

        const existingDocument = await Saved.findOneAndDelete({ email: email, description: description });

        if (existingDocument) {
            return res.status(200).json({ message: 1 });
        } else {
            return res.status(200).json({ message: 0 });
        }
    } catch (error) {
        return res.status(500).json({ message: 3, error: error });
    }
});
//Delete Comic -------------------------------------------------------------------------------------------


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






























