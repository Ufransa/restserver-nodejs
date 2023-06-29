const { response, request } = require('express')


const usuariosGet = (req, res = response) => {

    const { q, nombre, apikey } = req.query


    res.json({

        msg: "Get API - controlador",
        q,
        nombre,
        apikey

    })
}

const usuariosPut = (req, res) => {

    const id = req.params.id


    res.json({

        msg: "Put API - controlador",
        id

    })
}

const usuariosPost = (req, res) => {

    const body = req.body


    res.json({

        msg: "Post API - controlador",
        body

    })
}

const usuariosDelete = (req, res) => {
    res.json({

        msg: "Delete API - controlador"

    })
}


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete

}