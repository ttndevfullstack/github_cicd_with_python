const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Nimble-ICE' })
})

/* GET ice-flakes resource */
router.get('/ice-flakes', function (req, res, next) {
  res
    .status(201)
    .json({
      resource: 'ice-flakes',
      count: 203,
      shape: 'rectangle'
    })
})

/* GET home profile. */
router.get('/user', function (req, res, next) {
  res
    .status(201)
    .json({
      id: 2,
      name: 'Admin System',
      role: 'Admin'
    })
})

module.exports = router
