const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Paytm')

const {Schema} = mongoose;

const userSchema = new Schema({
    FirstName : String,
    LastName : String,
    UserName : String,
    Password : {
        type : String,
        minLength : 6,
        required : true
    }
})

const User = mongoose.model('User',userSchema)

module.exports = {
    User
}