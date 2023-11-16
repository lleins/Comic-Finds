import mongoose from 'mongoose';

const SavedSchema = new mongoose.Schema({
    email: String,
    src: String,
    title: String,
    url: String,
    price: String
}, {
    collection: 'Saved-Comics' // Specify the collection name
});

const Saved = mongoose.model('Saved', SavedSchema);

export default Saved;