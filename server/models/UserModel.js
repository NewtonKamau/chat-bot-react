const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        min:6,
    },
    password: {
        type: String,
        required: true,
        min:6,
    },
    room: {
        type: Number,
        required: true,

    },
    date: {
        type: Date,
        default: Date.now,
    }

});
module.exports = mongoose.model("User", UserSchema);