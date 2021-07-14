// Imports
const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const webRoutes = require('./webRoutes');

//Router
router.use('/', webRoutes);
router.use('/api', apiRoutes);

module.exports = router;
