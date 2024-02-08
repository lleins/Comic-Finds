import mongoose from 'mongoose';

const SavedSchema = new mongoose.Schema({
    email: String,
    url: String,
    description: String,
    price: String,
    write: String
}, {
    collection: 'Saved-Comics' // Specify the collection name
});

const Saved = mongoose.model('Saved', SavedSchema);

export default Saved;