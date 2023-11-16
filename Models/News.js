import mongoose from 'mongoose';

const NewsSchema = new mongoose.Schema({
    email: String,
    date: String,
    count: String,
}, {
    collection: 'Newsletter' // Specify the collection name
});

const News = mongoose.model('News', NewsSchema);

export default News;