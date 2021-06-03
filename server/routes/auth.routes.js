const {Router} = require('express')
const {login, createUSer } = require('../controllers/auth.controllers')
const router = Router()

router.post('/admin/login', login )

router.post('/admin/create', createUSer )

module.exports = router
