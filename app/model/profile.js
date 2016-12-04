var mongoose = require('mongoose');

var profileSchema = mongoose.Schema({
    FirstName: String,
    LastName: String,
    Age: Number,
    AddressLine1: String,
    AddressLine2: String,
    UserName: String,
    Password: String,
    updated: {
        type: Date
    },
    created: {
        type: Date,
        default: Date.now
    }
});

var Profile = mongoose.model('Profile', profileSchema);

