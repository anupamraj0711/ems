import React from 'react'

const Header = ({logOut}) => {
  const logOutUser = () => {
    // 1. Local storage clear karne ke liye
    localStorage.removeItem('loggedInUser') 
    
    // 2. App.jsx ki state null karne ke liye (jisse login page wapas aa jaye)
    logOut()
    
    // Note: Agar aapko POORA data udana hai toh localStorage.clear() use karein, 
    // lekin isse employees ka data bhi udd jayega. Sirf session hatane ke liye removeItem sahi hai.
  }

    return (
    <div className='flex items-center justify-between p-10 bg-[#1c1c1c] rounded-b-3xl border-b border-emerald-500/20'>
      <h1 className='text-2xl font-medium'>
        Hello, <br />
        <span className='text-4xl font-extrabold text-emerald-500'>Anupam 👋</span>
      </h1>
      <button
      onClick={logOutUser}
       className='bg-red-600 hover:bg-red-700 transition-colors text-white text-lg font-bold px-6 py-3 rounded-xl shadow-lg shadow-red-900/20 active:scale-95'>
        Logout
      </button>
    </div>
  )
}

export default Header