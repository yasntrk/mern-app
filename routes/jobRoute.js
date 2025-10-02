const express = require('express');
const router = express.Router();
const { getJobs, postJobs, getAllJobs } = require('../controllers/jobController');

router.get('/jobs', getJobs);
router.get('/jobs', getAllJobs);
router.post('/jobs', postJobs);

module.exports = router;