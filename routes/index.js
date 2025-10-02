const express = require('express');
const router = express.Router();

router.use(require('./userRoute'));
router.use(require('./pingRoute'));

module.exports = router;