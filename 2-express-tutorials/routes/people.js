const { getPeople, searchPeople, getPerson, createPerson, updatePerson, deletePerson } = require('../controller/people')
const express = require('express')
const router = express.Router()

router.get('/', getPeople)

router.get('/search', searchPeople)

router.get('/:id', getPerson)

router.post('/', createPerson)
router.put('/:id', updatePerson)

router.delete('/:id', deletePerson)

module.exports = router