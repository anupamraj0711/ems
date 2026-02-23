import React from 'react'

const CreateTask = () => {
  return (
    <div>
       <div>
        <from >
            <div>
            <h3>Task Title</h3>
            <input type="text" className="border  rounded h-10 w-70" placeholder='Enter Task Title' />
            </div>
            <div>
            <h3 >Task Description</h3>
            <textarea name=" "  id=" " cols="30" rows="10" className='h-20 w-90 border rounded'></textarea>
            </div>
            <div>
            <h3>Date</h3>
            <input type="date" className='border rounded h-10 w-70' />
            </div>
            <div>
            <h3>Assign To</h3>
            <input type='text' placeholder='employee name' className='border rounded'/>
            </div>
            <div>
            <h3>Category</h3>
            <input type='text' placeholder='design , dev , etc' className=' border rounded ' /><br/>
            <button className='bg-red-400 rounded h-10 w-20 '>Create Task</button><br/>
            <br/>
            </div>
        </from>
      </div>
    </div>
  )
}

export default CreateTask
