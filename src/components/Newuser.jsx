import React from 'react'

const Newuser = () => {
  return (
    <div>
      <h1 className='px-20 py-10 text-primary font-semibold text-center text-[40px]'>Login/Sign Up</h1>
      <div className='flex px-80 py-5'>
        <h1 className='font-mono text-[20px] my-2'><b>Email Address</b></h1>
        <input className='border-2 border-[#DADADA] mx-6 px-40 py-3' type='text' placeholder='Enter Email-Address' />
      </div>
      <div className='flex px-80 py-5'>
        <h1 className='font-mono text-[20px] my-2 px-7'><b>Password</b></h1>
        <input className='border-2 border-[#DADADA] mx-6 px-40 py-3' type='text' placeholder='Enter Password' />
      </div>
      <div>
        <div className="px-96 py-3 flex">
          <button className=" text-[#1D1D1D] border-2 border-[#1D1D1D] mx-28 rounded-lg px-10 py-3 flex font-mono text-[14px]"><b>Login</b></button>
          <button className='px-0 py-2 font-mono'><b><u>Forgot Password</u></b></button>
        </div>
      </div>
      <div className='px-96 py-0 mx-24 flex'>
        <h1 className='font-mono text-[#DADADA]'><b>Doesn’t Have An Account?</b></h1>
        <button className='px-10 font-mono'><b><u>Register</u></b></button>
      </div>
    </div>
  )
}

export default Newuser
