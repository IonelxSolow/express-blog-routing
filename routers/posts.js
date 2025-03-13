const express = require('express');
const router = express.Router();


//index
router.get('/', (req, res) => {
    res.send('Lista dei posts')
});

//show
router.get('/:id', (req, res) => {
    const userId = req.params.id
    res.send(`Mostra il post: ${userId}`)
});

//create
router.post('/', (req, res) => {
    res.send('Crea un post')
});

//update
router.put('/:id', (req, res) => {
    res.send(`Aggiorna il post:${req.params.id}`)
});

//delete
router.delete('/:id', (req, res) => {
    res.send(`Cancelazione del post: ${req.params.id}`)
});

module.exports = router;
