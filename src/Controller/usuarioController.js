const usuarioModel = require("../Models/usuarioModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const SECRET = process.env.SECRET

const criarUsuario = async (req, res) => {
    const senhaComHash = bcrypt.hashSync(req.body.senha, 10)
    req.body.senha = senhaComHash
    const usuario = new usuarioModel(req.body)
    await usuario.save (function(error) {
        if(error){
            res.status(500).json({ message: error.message})
        }
        res.status(201).json(usuario)
    })
}

const listarUsuarios = async (req, res) => {
    await usuarioModel.find (function(error, pessoas) {
        if(error){
            res.status(500).json({ message: error.message})
        }
        res.status(200).json(pessoas)
    })
}

const deletarUsuario = async (req, res) => {
    try {
        const {id} = req.params 
        await usuarioModel.findByIdAndDelete(id)
        res.status(200).json({ message: "Usuário Deletado"})
        
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message})
    }
}

const login = async (req, res) => {
    usuarioModel.findOne({ email: req.body.email}, function(error, pessoa) { 
        if (!pessoa){
            return res.status(404).send("Usuário não encontrado")
        }
        const senhaValida = bcrypt.compareSync (req.body.senha, pessoa.senha)
        if (!senhaValida){
            res.status(403).send("Senha inválida! :(")
        }
        const token = jwt.sign(req.body.email, SECRET)
        res.status(200).json(token)
    })
}

module.exports = {criarUsuario, listarUsuarios, deletarUsuario, login}
