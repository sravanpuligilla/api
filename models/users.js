const mongoose = require('mongoose');

var ObjectIdSchema = mongoose.Types.ObjectId;
const schema = mongoose.Schema({
    // uid : {
    //     type : String,
    //     default : ObjectIdSchema
    // },
    name : String,
    token : String,
    email : String, 
    provider : String,
    providerId : String,
    providerPic : String
});

module.exports = mongoose.model('Users', schema);