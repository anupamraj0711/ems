import React from 'react'

const TaskList = () => {
  return (
    <div id="taskList" className='h-[450px] overflow-x-auto flex items-center justify-start gap-8 flex-nowrap mt-10 px-10 py-5 scrollbar-hide'>
      
      {/* Task Card 1 */}
      <div className='flex-shrink-0 h-full w-[350px] p-6 bg-[#1c1c1c] border border-red-500/30 rounded-3xl flex flex-col justify-between'>
        <div>
          <div className='flex justify-between items-center mb-6'>
            <span className='bg-red-600 text-[10px] uppercase font-bold px-3 py-1 rounded text-white'>High</span>
            <span className='text-sm text-gray-400 font-medium'>20 Feb 2024</span>
          </div>
          <h2 className='text-2xl font-bold mb-4'>Make a YouTube Video</h2>
          <p className='text-gray-400 leading-relaxed text-sm'>
            Create a high-quality coding tutorial for the employee management system. Focus on context API.
          </p>
        </div>
        <div className='flex justify-between mt-6 gap-2'>
            <button className='bg-green-500 py-2 px-4 text-xs rounded-lg font-bold'>Accept</button>
            <button className='bg-red-500 py-2 px-4 text-xs rounded-lg font-bold'>Mark Failed</button>
        </div>
      </div>

      {/* Task Card 2 */}
      <div className='flex-shrink-0 h-full w-[350px] p-6 bg-[#1c1c1c] border border-emerald-500/30 rounded-3xl flex flex-col justify-between'>
        <div>
          <div className='flex justify-between items-center mb-6'>
            <span className='bg-emerald-600 text-[10px] uppercase font-bold px-3 py-1 rounded text-white'>Medium</span>
            <span className='text-sm text-gray-400 font-medium'>22 Feb 2024</span>
          </div>
          <h2 className='text-2xl font-bold mb-4'>UI Design Update</h2>
          <p className='text-gray-400 leading-relaxed text-sm'>
            Refactor the Tailwind CSS classes to use more modern layouts and color palettes.
          </p>
        </div>
        <div className='w-full'>
            <button className='bg-blue-500 w-full py-2 rounded-lg font-bold'>Complete Task</button>
        </div>
      </div>

    </div>
  )
}

export default TaskList