import mongoose from 'mongoose';

const LoginSchema = new mongoose.Schema({
    email: String,
    password: String
}, {
    collection: 'Login-Information' // Specify the collection name
});

const Login = mongoose.model('Login', LoginSchema);

export default Login;