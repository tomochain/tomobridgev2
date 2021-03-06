'use strict'
const express = require('express')
const router = express.Router()

router.use('/api/config', require('./config'))
router.use('/api/wrap', require('./wrap'))
router.use('/api/account', require('./account'))

module.exports = router
