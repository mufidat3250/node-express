const router = require('express').Router()
const {getAllUser} = require('../controllers/users')
router.route('/').get(getAllUser)

module.exports = router