const express = require('express');
const bodyParser = require('body-parser');

const automovelRouter = require('./routes/automovel')
const motoristaRouter = require('./routes/motoristas')
const app = express();

app.use(bodyParser.json())
app.use(automovelRouter)
app.use(motoristaRouter)
//post http://localhost:3000/automovel
//get http://localhost:3000/automovel
//get http://localhost:3000/automovel/12342
const port = 3000

app.listen(port, () => {
    console.log('O servidor está rodando na porta 3000')
})