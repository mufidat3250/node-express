import './Style.scss'
import axios, { Axios, AxiosResponse } from 'axios'
import TaskHeader from '../../component/TaskHeader'
import './Style.scss'
import Task from '../../component/Task'
import { useEffect, useState } from 'react'

const HomePage = () => {
        const [task, setTask] = useState('')
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>  setTask(e.target.value)

    const getAlltask = async() => {
      try {
          const tasks = await axios.get('http://localhost:5000/api/tasks')
          console.log({tasks})
        } catch (error) {
          console.log(error.message)
        }
    }
    useEffect(()=>{
      getAlltask()

    }, [])
  return (
    <div className='home'>
      <TaskHeader handleChange={handleChange} task ={task}/>
      <div className='task-container'>
        <Task task='Cooking'/>
      </div>
    </div>
  )
}

export default HomePage
