const TerreiroModel = require("../Models/terreiroModel")
const AtividadesModel = require("../Models/atividadesModel")

const createTerreiro = async (req, res) => {
    try {
        const { name, anoDeAbertura, pessoaResponsavel, tradicao } = req.body

        const newTerreiro = new TerreiroModel({
            name, anoDeAbertura, pessoaResponsavel, tradicao
        })

        const savedTerreiro = await newTerreiro.save()
        res.status(201).json(savedTerreiro)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const getAllTerreiros = async (req, res) => {
    try {
        const allTerreiros = await TerreiroModel.find()
        res.status(200).json(allTerreiros)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const getTerreiroById = async (req, res) => {
    try {
        const findTerreiroById = await TerreiroModel.findById(req.params.id)
        res.status(200).json(findTerreiroById)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const getTypeActivity = async (req, res) => {
    try {
        const typeActivity = req.query.categoria;

        const findCategoria = await AtividadesModel.find({
            categoria: { $regex: typeActivity, $options: "i" },
        });

        if (findCategoria.length > 0) {
            res.status(200).json(findCategoria);
        } else {
            return res.status(404).json({ message: "Nenhum terreiro encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getTerreiroByResp = async (req, res) => {
    try {
        const terreiroByResp = req.query.pessoaResponsavel;

        const findResp = await TerreiroModel.find({
            pessoaResponsavel: { $regex: terreiroByResp, $options: "i" },
        });

        if (findResp.length > 0) {
            res.status(200).json(findResp);
        } else {
            return res.status(404).json({ message: "Nenhum terreiro encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateTerreiro = async (req, res) => {
    try {
        const { name, anoDeAbertura, pessoaResponsavel, tradicao } = req.body
        await TerreiroModel.findByIdAndUpdate(req.params.id, {
            name, anoDeAbertura, pessoaResponsavel, tradicao
        })
        const updatedTerreiro = await TerreiroModel.findById(req.params.id)

        res.status(200).json(updatedTerreiro)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const deleteTerreiro = async (req, res) => {
    try {
        const { id } = req.params
        await TerreiroModel.findByIdAndDelete(id)
        const message = `O terreiro com o id ${id} foi deletado com sucesso.`
        res.status(200).json({ message })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}


module.exports = {
    createTerreiro,
    getAllTerreiros,
    getTerreiroById,
    getTypeActivity,
    getTerreiroByResp,
    updateTerreiro,
    deleteTerreiro
}