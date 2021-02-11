const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imagesSchema = new Schema({
    url: String
});
mongoose.model('images', imagesSchema);


const googleUsersSchema = new Schema({
    googleId: String,
    favoriteImages: [ { type: Schema.Types.ObjectId, ref: 'images'} ]
});
mongoose.model('google_users', googleUsersSchema);