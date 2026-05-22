const FilmeModel = require("../models/FilmeModel")

const FilmeController = {
    async getAllFilmes(req, res) {
        const filmes = await FilmeModel.findAll()

        return res.json(filmes)
    },

    async createFilme(req, res) {
        const {
            titulo,
            diretorId,
            generos
        } = req.body

        const filmeId = await FilmeModel.create(
            {
                titulo,
                diretorId
            },
            generos
        )

        return res.status(201).json({ id: filmeId })
    }
}

module.exports = FilmeController