
const router = require('express').Router()
const postagem = require('./src/postagens')
// const = require()

router.post('/neo', (req, res) =>  res.json({success: true}))
router.post('/mongo', (req, res) =>  res.json({success: true}))




router.post('/test', postagem.insertFuncionario)













module.exports = router









/*
const express = require('express');
const router = express();

router.get('/sobre', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

module.exports = app => app.use(router);*/
