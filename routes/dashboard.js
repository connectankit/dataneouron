const express = require('express');
const { getAllDashboardData } = require('../controller');
const router = express.Router()


router.get('/dashboard',getAllDashboardData)


module.exports = router