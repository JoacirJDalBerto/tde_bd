const express = require('express');
const router = express();

router.get('/sobre', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

module.exports = app => app.use(router);