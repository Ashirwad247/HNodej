const express = require('express')
const router = express.Router()
const {generateNewshortURL, handleGetAnalytics} = require('../controllers/url')


router.post('/', generateNewshortURL)

router.get('/analytics/:shortId', handleGetAnalytics)

module.exports = router;