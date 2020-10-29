const express = require('express')
const fs = require('fs');
const router = new express.Router()

const Motoristas = require('../model/motoristas')
let motoristasBD = []

router.post('/motoristas', (req, res) => {
    const novoMotorista = new Motoristas(req.body)

    motoristasBD.push(novoMotorista)
    const motoristaCriado = {
        nome: novoMotorista.getNome()
    }
    res.status(201).send(motoristaCriado)
})

router.get('/motoristas', (req, res) => {
    const {nome = ''} = req.query;

    const motoristas = motoristasBD.filter(motorista =>{
        return motorista.getNome()
    })
    return res.send(motoristas)
})

module.exports = router