import { useState } from 'react'
import Input from '../../component/Input'
import './style.scss'
import Button from '../../component/Button'

const SingleTaskPage = () => {
  const [singleTask, setSingleTask] = useState('')
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>  setSingleTask(e.target.value)

  return (
    <div className='single-Page-wrapper'>
      <div className='single-task'>
       <h3 className='text-center font-light text-2xl '>Edit Task</h3>
       <div className='flex px-[2rem] flex-col gap-2'>
        <div className='flex'>
          <p className='w-[25%]'>Task ID</p>
          <p className='flex-1'>098ioujn878</p>
        </div>
        <div className='flex'>
          <p className='w-[25%]'>Name</p>
          <div className='w-[70%]'>
            <Input onChange={function (): void {
                throw new Error('Function not implemented.')
              } } value={''} otherClass={'py-[1px]'} placeHolder={''}/>
          </div>

        </div>
        <div className='flex'>
        <p className='w-[25%]'>Completed</p>
          <input type="checkbox"  />
        </div>
          <Button title='Edit' otherClass='!py-2 !rounded-sm'/>
       </div>
       <p className='text-center mt-2'> Message</p>
      </div>
    </div>
  )
}

export default SingleTaskPage
