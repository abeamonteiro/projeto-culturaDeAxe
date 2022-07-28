const mongoose = require("mongoose")

const terreiroSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    name:{
        required: true,
        unique: true,
        type: String
    },
    anoDeAbertura:{
        type: Number
    },
    pessoaResponsavel: {
        required: true,
        type: String
    },
    tradicao:{
        required: true,
        type: String
    }
}, 

{timestamps: true});

const Model = mongoose.model("terreiro", terreiroSchema);

module.exports = Model