const mongoose = require("mongoose")

const terreiroSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    name:{
        type: String,
        required: true,
        unique: true
    },
    anoDeAbertura:{
        type: Number
    },
    pessoaResponsavel: {
        type: String,
        required: true,
    },
    tradicao:{
        type: String,
        required: true
    },
}, 

{timestamps: true});

const Model = mongoose.model("terreiro", terreiroSchema);

module.exports = Model