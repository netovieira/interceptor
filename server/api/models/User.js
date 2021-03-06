// load the things we need
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

// define the schema for our user model
var userSchema = mongoose.Schema({
    name:String,
    image: String,
    local: {
        email: String,
        password: String
    },
    facebook: {
        id: String,
        token: String,
        email: String
    },
    google: {
        id: String,
        token: String,
        email: String
    },
    favorites:[{
        _id: mongoose.Schema.Types.ObjectId,
        name: String,
        tags:[{tag: String}]
    }],
    followers:[{
        _id: mongoose.Schema.Types.ObjectId,
        name: String,
        image: String
    }],
    following:[{
        _id: mongoose.Schema.Types.ObjectId,
        name: String,
        image: String
    }]

});

// generating a hash
userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
