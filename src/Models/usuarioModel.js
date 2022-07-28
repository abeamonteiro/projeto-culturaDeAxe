const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    nome:{
        required: true,
        unique: true,
        type: String
    },
    senha:{
        required: true,
        type: Number
    },
    email:{
        required: true,
        unique: true,
        type: String
    }      
}, { versionKey: false});

const Model = mongoose.model("usuario", usuarioSchema);

module.exports = Model;