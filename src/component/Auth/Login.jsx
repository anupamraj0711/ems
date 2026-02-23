import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail("")
        setPassword('')
    }

    return (
        <div className='flex h-screen w-screen items-center justify-center bg-red-300'>
            {/* Login Card */}
            <div className='bg-neutral-900 p-10 rounded-2xl border border-emerald-600/30 shadow-[0_0_20px_rgba(16,185,129,0.1)] w-full max-w-md'>
                
                <div className='mb-8 text-center'>
                    <h2 className='text-3xl font-bold text-red-300 mb-2'>Welcome Back</h2>
                    <p className='text-gray-400 text-sm'>Please enter your details to sign in</p>
                </div>

                <form 
                    onSubmit={submitHandler}
                    className='flex flex-col gap-4'
                >
                    <div className='flex flex-col gap-1'>
                        <label className='text-green-300 text-sm ml-1'>Email Address</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                            type="email" 
                            placeholder='name@company.com' 
                            className='bg-transparent border-2 border-emerald-600/50 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 outline-none focus:border-emerald-500 focus:bg-emerald-500/5 transition-all duration-300'
                        />
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label className='text-green-300 text-sm ml-1'>Password</label>
                        <input 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                            type="password" 
                            placeholder='••••••••' 
                            className='bg-transparent border-2 border-emerald-600/50 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 outline-none focus:border-emerald-500 focus:bg-emerald-500/5 transition-all duration-300'
                        />
                    </div>

                    <div className='flex items-center justify-between mt-1 px-1'>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id="remember" className='accent-emerald-500' />
                            <label htmlFor="remember" className='text-xs text-gray-400 cursor-pointer'>Remember me</label>
                        </div>
                        <a href="#" className='text-xs text-emerald-500 hover:underline'>Forgot password?</a>
                    </div>

                    <button 
                        type="submit" 
                        className='mt-4 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold py-3 rounded-xl transition-all duration-200 shadow-lg shadow-emerald-900/20'
                    >
                        Login to Dashboard
                    </button>
                </form>

                <p className='text-center text-gray-500 text-xs mt-6'>
                    Don't have an account? <span className='text-emerald-500 cursor-pointer hover:underline'>Contact Admin</span>
                </p>
            </div>
        </div>
    )
}

export default Login