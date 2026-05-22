const connection = require("../database/connection")

const GeneroModel = {
    async findAll() {
        const result = await connection.raw("SELECT * FROM generos")

        return result
    },

    async create(data) {
        const { name } = data

        const result = await connection.raw(
            "INSERT INTO generos (nome) VALUES (?)",
            [ name ]
        )

        return result
    }
}

module.exports = GeneroModel