const router = require('express').Router();

router.use('/user',require('./userRouter'));

module.exports = router;