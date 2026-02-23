import React, { useContext, useState } from 'react'
import Login from './component/Auth/Login'
import EmployeeDashboard from './component/Dashboard/EmployeeDashboard'
import AdminDashboard from './component/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext)

  const handleLogin = (email, password) => {
    if (email === 'anupam@com' && password === '123') {
      setUser('admin')
    } else if (authData && authData.employees) {
      // Structure nested hai, isliye indexing ka dhyan rakhein
      const employeeArray = authData.employees[0].employees;
      const employee = employeeArray.find((e) => email == e.email && e.password == password)
      
      if (employee) {
        setUser('employees')
      } else {
        alert("Invalid Credentials")
      }
    } else {
      alert("Database loading... please wait.")
    }
  }
  const logOut = () => {
    setUser(null)}

return (
    <div className='bg-[#111] min-h-screen text-white'>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === 'admin' ? (
        <AdminDashboard logOut={logOut} />
      ) : (
        <EmployeeDashboard logOut={logOut} />
      )}
    </div>
  )
}

export default App