const express = require('express');
const fs = require('fs');
const router = new express.Router()

const Automovel = require('../model/automovel')
let automovelBD = []

function verificarAtributos(req, res, next) {
    const vetorAtributos = ['placa', 'marca', 'cor']

    for(let automovelAtributos in req.body) {
        const existeAtributo = vetorAtributos.includes(automovelAtributos)
    
        if(!existeAtributo) {
            return res.status(400).send('Atributo ' + automovelAtributos + ' Errado')
        }
    }

    next()
}

router.post('/automovel', verificarAtributos, (req, res) => {
    const novoAutomovel = new Automovel(req.body)

    automovelBD.push(novoAutomovel)
    const automovelCriado = {
        cor: novoAutomovel.getCor(),
        marca: novoAutomovel.getMarca(),
        placa: novoAutomovel.getPlaca()
    }
    res.status(201).send(automovelCriado)
})

router.get('/automovel', (req, res) => {
    const {cor = '', marca = ''} = req.query;

    const automoveis = automovelBD.filter(automovel => {
        if(cor && marca) {
            return marca === automovel.getMarca() && cor === automovel.getCor()
        }
        return cor ? automovel.getCor() === cor : marca ? automovel.getMarca() === marca : automovel.toJSON()
    })
    return res.send(automoveis)
})

router.get('/automovel/:placa', (req, res) => {
    const placa = req.params.placa;
    //console.log(placa);
    const automovelEncontrado = automovelBD.find(automovel => automovel.getPlaca() === placa)

    if(!automovelEncontrado) return res.status(404).send('Automóvel não encontado')

    const automovel = {
        cor: automovelEncontrado.getCor(),
        placa: automovelEncontrado.getPlaca(),
        marca: automovelEncontrado.getMarca()
    }
    
    res.status(200).send(automovel)
})

router.put('/automovel/:placa', verificarAtributos, (req, res) => {    
    let automovelPosicao = undefined
    const placa = req.params.placa
    const automovelEncontrado = automovelBD.find((automovel, index) => {
        automovelPosicao = index
        return automovel.getPlaca() === placa && automovel
    })

    if(!automovelEncontrado) return res.status(404).send('Automóvel não encontado')

    automovelEncontrado.setCor(req.body.cor)
    automovelEncontrado.setMarca(req.body.marca)

    automovelAtualizado = {
        cor: automovelEncontrado.getCor(),
        marca: automovelEncontrado.getMarca(),
        placa: automovelEncontrado.getPlaca()
    }

    res.status(200).send(automovelAtualizado)
})

router.delete('/automovel/:placa', (req, res) => {
    let automovelPosicao = undefined
    const placa = req.params.placa
    const automovelEncontrado = automovelBD.find((automovel, index) => {
        automovelPosicao = index
        return automovel.getPlaca() === placa
    })

    if(!automovelEncontrado)
        return res.status(404).send('Automóvel não encontado')

    automovelBD.splice(automovelPosicao, 1)
    res.sendStatus(200)
})

module.exports = router