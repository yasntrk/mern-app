const express = require('express');
const router = express.Router();
const { getJobs, postJobs, getAllJobs, fetchSingleJob, updateJob, deleteJob } = require('../controllers/jobController');

router.get('/jobs', getJobs);
router.get('/jobs', getAllJobs);
router.post('/jobs', postJobs);

router.get('/jobs/:id', fetchSingleJob);
router.put('/jobs/:id', updateJob);
router.delete('/jobs/:id', deleteJob);

module.exports = router;