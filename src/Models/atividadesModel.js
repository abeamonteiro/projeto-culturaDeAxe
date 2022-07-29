const mongoose = require("mongoose");

const atividadesSchema = mongoose.Schema ({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    categoria:{
        type: [String],
        required: true,
    },
    nome: {
        type: String,
        required: true,
        unique: true,
    },    
    gratuidade: {
        type: Boolean,
        required: true,
    },
    responsavel:{
        type: [String],
        required: true,
    },
    frequencia:{
        type: String,
        required: true,
    },
    publicoAlvo:{
        type: String,
        required: true,
    },

    terreiroId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'terreiro'
    }
}, {timestamps: true});

const Model = mongoose.model("atividades", atividadesSchema);

module.exports = Model;
