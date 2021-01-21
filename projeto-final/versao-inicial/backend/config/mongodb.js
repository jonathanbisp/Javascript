const mongoose = require('mongoose')
const { mongoPath } = require('../.env')

mongoose.connect(mongoPath, { useNewUrlParser: true })
    .catch(e => console.log("\x1b[41mERRO! Não foi possivel conectar com o servidor\033[m")) 