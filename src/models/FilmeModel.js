const connection = require("../database/connection")

const FilmeModel = {
    async findAll() {
        const result = await connection.raw("SELECT * FROM filmes")

        return result
    },

    async create(filme, generos) {
        const { titulo, diretorId } = filme

        const insereFilme = await connection.raw(
            "INSERT INTO filmes (titulo, diretor_id) VALUES (?, ?)",
            [ titulo, diretorId ]
        )

        const filmeId = insereFilme.lastID

        if( generos && generos.lenght > 0 ) {
            for( const generoId of generos ){
                await connection.raw(
                    "INSERT INTO filmes_generos (filme_id, genero_id) VALUES (?, ?)",
                    [ filmeId, generoId ]
                )
            }
        }

        return filmeId
    },

    async findById(id) {
        const filmeResult = await connection.raw(
            "SELECT * FROM filmes WHERE id = ?",
            [ id ]
        )

        const filme = filmeResult[0]

        if(!filme) return null

        return filme
    }
}

module.exports = FilmeModel