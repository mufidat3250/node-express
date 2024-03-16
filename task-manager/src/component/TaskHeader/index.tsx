import Button from "../Button"
import Input from "../Input"
const TaskHeader = ({handleChange, task}:{handleChange:any, task:any}) => {
  return (
    <div className="bg-white w-full  py-11 rounded-sm shadow-sm text-center font-bold">
        <h1 className="text-xl">Task Manager</h1>
        <div className="flex items-center max-w-[80%] mx-auto mt-5" >
            <div className="flex-1 h-full">
            <Input onChange={handleChange} value={task} placeHolder="Start Typing..." otherClass={""} />
            </div>
            <div className="w-[30%]">
            <Button title='Submit' otherClass = 'rounded-tr-lg rounded-br-sm'/> 
            </div>
        </div>
    </div>
  )
}

export default TaskHeader
