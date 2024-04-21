const router = require('express').Router()
const {getAllJobs, getJob, createJob, deleteJob, updateJobs} = require('../controllers/job')

router.route('/').get(getAllJobs).post(createJob)
router.route('/:id').get(getJob).patch(updateJobs).delete(deleteJob)

module.exports = router