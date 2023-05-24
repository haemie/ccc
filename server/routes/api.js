const express = require('express');
const cccController = require('../controllers/cccController');
const router = express.Router();

router.get('/', cccController.getAllParts, (req, res) => {
    res.status(200).json(res.locals.allParts)
})

module.exports = router;