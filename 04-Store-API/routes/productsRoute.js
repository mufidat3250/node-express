const router = require('express').Router()
const {getAllProduct, getAllProductStatic} = require('../controller/products')
router.route('/').get(getAllProduct)
router.get('/static', getAllProductStatic)

module.exports= router