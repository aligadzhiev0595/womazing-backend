const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
  res.send('Its my home page server')
})

module.exports = router
