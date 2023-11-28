const express = require('express')
const router = express.Router()
const noteController = require('../controller/noteController')

router.get('/getAll', noteController.getAllNotes)
router.get('/:id', noteController.getById)


module.exports = router