const mongoose = require("mongoose");

const atividadesSchema = new mongoose.Schema ({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    categoria:{
        required: true,
        type: [String],
    },
    nome: {
        required: true,
        unique: true,
        type: String
    },    
    gratuito: {
        required: true,
        type: Boolean,
    },
    responsavel:{
        required: true,
        type: [String],
    },
    frequencia:{
        required: true,
        type: String,
    },
    publicoAlvo:{
        required: true,
        type: String,
    },

    terreiro: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'terreiro'
    }
}, {timestamps: true});

const Model = mongoose.model("atividades", atividadesSchema);

module.exports = Model;
