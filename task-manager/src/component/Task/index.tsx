import DeleteIcon from "../DeleteIcon"
import EditIcon from "../EditIcon"

/* eslint-disable react/prop-types */
const Task = ({task}:{task:string}) => {
  return (
    <div className="py-3 px-4 bg-white shadow-sm flex justify-between">
      <h4>{task}</h4>
    <div className="flex gap-2">
        <EditIcon className='cursor-pointer'/>
        <DeleteIcon className='cursor-pointer'/>
    </div>
    </div>
  )
}

export default Task
