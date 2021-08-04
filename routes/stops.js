const express = require('express');
const router = express.Router();
const {
  getAllStops,
  getStop,
} = require('../controllers/stopsController');

router.route('/')
  .get(getAllStops);

router.route('/:id')
  .get(getStop);

module.exports = router;