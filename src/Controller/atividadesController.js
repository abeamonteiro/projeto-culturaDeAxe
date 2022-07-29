const TerreiroModel = require("../Models/terreiroModel")
const AtividadesModel = require("../Models/atividadesModel")

const createActivity = async (req, res) => {
  try {
    const { categoria, nome, gratuidade, responsavel, frequencia, publicoAlvo, terreiroId } = req.body

    if (!terreiroId) {
      return res.status(404).json({ message: 'É obrigatório o Id do terreiro' })
    }
    const findTerreiro = await TerreiroModel.findById(terreiroId)

    if (!findTerreiro) {
      return res.status(404).json({ message: 'O terreiro não foi encontrado!' })
    }
    const newActivity = new AtividadesModel({
      categoria, nome, gratuidade, responsavel, frequencia, publicoAlvo, terreiroId
    })

    const savedActivity = await newActivity.save()
    res.status(200).json(savedActivity)

  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}

const getAllActivities = async (req, res) => {
  try {
    const allActivities = await AtividadesModel.find().populate("terreiroId", "categoria  -_id,");
    res.status(200).json(allActivities)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}

const updateActivityById = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const {
      categoria, nome, gratuidade, responsavel, frequencia, publicoAlvo, terreiroId

    } = req.body;
    const findActivity = await AtividadesModel.findById(id);
    if (!findActivity) {
      return res.status(404).json({ message: "Atividade não encontrada" });
    }
    if (terreiroId) {
      const findTerreiro = await TerreiroModel.findById(terreiroId);

      if (!findTerreiro) {
        return res.status(404).json({ message: "Terreiro não encontrado" });
      }
    }
    findActivity.categoria = categoria || findActivity.categoria;
    findActivity.nome = nome || findActivity.nome;
    findActivity.gratuidade = gratuidade || findActivity.gratuidade;
    findActivity.responsavel = responsavel || findActivity.responsavel;
    findActivity.frequencia = frequencia || findActivity.frequencia;
    findActivity.publicoAlvo = publicoAlvo || findActivity.publicoAlvo;
    findActivity.terreiroId = terreiroId || findActivity.terreiroId;
    
    const savedActivity = await findActivity.save();
    res.status(200).json(savedActivity);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const deleteActivityById = async (req, res) => {
  try {
    const { id } = req.params
    await AtividadesModel.findByIdAndDelete(id)
    const message = `A atividade com o id ${id} foi deletada com sucesso!`
    res.status(200).json({ message })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  createActivity,
  getAllActivities,
  updateActivityById,
  deleteActivityById
}