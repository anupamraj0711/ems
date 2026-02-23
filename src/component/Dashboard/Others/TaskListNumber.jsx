import React from 'react'

const TaskListNumber = () => {
  const stats = [
    { label: 'New Task', value: 0, color: 'bg-blue-500' },
    { label: 'Completed', value: 3, color: 'bg-green-500' },
    { label: 'Accepted', value: 0, color: 'bg-yellow-500' },
    { label: 'Failed', value: 0, color: 'bg-red-500' }
  ]

  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mt-10 px-10'>
      {stats.map((stat, index) => (
        <div key={index} className={`${stat.color} p-8 rounded-2xl shadow-xl transition-transform hover:scale-105`}>
          <h2 className='text-4xl font-bold'>{stat.value}</h2>
          <h3 className='text-xl font-semibold opacity-90'>{stat.label}</h3>
        </div>
      ))}
    </div>
  )
}

export default TaskListNumber