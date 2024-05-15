const express = require('express');
const { getAllDashboardData, create_component, update_component, delete_component } = require('../controller');
const router = express.Router()


router.get('/dashboard',getAllDashboardData)
router.post('/dashboard',create_component)
router.put('/dashboard',update_component)
router.put('/dashboard/:id',delete_component)


module.exports = router