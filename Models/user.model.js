let mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
     
    name: {
        type: String, required: true
    }, 
    age: {
        type: Number, require: true
    },
    email: {
        type: String, require: true, unique: true
    }
});

module.exports = mongoose.model('User', userSchema);