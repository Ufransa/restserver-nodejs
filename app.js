require('dotenv').config()


const Server = require('./models/server')

//Declaramos el server que creamos en la carpeta models
const server = new Server()

//Así corremos nuestro servidor
server.listen()