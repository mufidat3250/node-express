const Job = require("../models/Job");
const { BadRequest } = require("../errors");
const { StatusCodes } = require("http-status-codes");

const getAllJobs = async (request, response) => {
    const {search, status, jobType, sort} = request.query
const queryObject = {
    createdBy: request.user.userId
}

    if(search){
        queryObject.position = {$regex:search, $options: 'i'}
    } 
    if (status && status !== 'all'){
        queryObject.status = status
    }
    if(jobType && jobType !== 'all'){
        queryObject.jobType = jobType
    }
    
    let result = await Job.find(queryObject)

    if(sort === 'latest'){
        result = result.sort('createdAt')
    }
    if(sort === 'oldest'){
        result = result.sort('-createdAt')
    }
    if(sort === 'a-z') {
        result = result.sort('position')
    }
    if(sort === 'z-a'){
        result = result.sort('-positon')
    }

    const page = Number(request.query.page) || 1;
  const limit = Number(request.query.limit) || 10;
  const skip = (page - 1) * limit;

    result = result.skip(skip).limit(limit)
    // i need to fix the error of malformed jwt token

    console.log({queryObject})
    const jobs = await Job.find(queryObject);
  response.status(200).json(jobs);
};
const getJob = async (request, response) => {
  const id = request.params.id;
  const job = await Job.findById(id);
  response.status(200).json({ job });
};

const createJob = async (request, response) => {
    request.body.createdBy = request.user.userId
  const job = new Job(request.body);
  await job.save();
  response.status(200).json({ job });
};

const updateJobs = async (request, response) => {
  const {createdBy } = request.body
  const {body:{position, company}, user:{ userId },  params:{id:jobId}}= request
  if (!position || !company) {
    throw new BadRequest("Position and company field must be provided");
  }
  const job = await Job.findByIdAndUpdate(
    { createdBy:userId, _id:jobId},
    request.body,
    { new: true, runValidators: true }
  );
  response.status(StatusCodes.CREATED).json({ job });
};

const deleteJob = async(request, response) => {
    const {params:{id:jobId}} = request
  const job = await Job.findByIdAndDelete(jobId)
  response.status(204).send()
};

module.exports = { getAllJobs, createJob, deleteJob, updateJobs, getJob };
