const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
    title: {
        type: String,
        minLength: 3,
        trim: true
    }
})

const List = mongoose.model("List", listSchema);
module.exports = List;
