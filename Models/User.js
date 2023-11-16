import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    email: String,
    date: String,
    title: String,
    url: String,
    price: String
}, {
    collection: 'User-Information' // Specify the collection name
});

const User = mongoose.model('User', UserSchema);

export default User;