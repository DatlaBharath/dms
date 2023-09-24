import React from 'react'

const Newuser = () => {
  return (
    <div className='pb-10'>
      <h1 className='mx-auto text-primary font-semibold text-center text-[40px]'>Login/Sign Up</h1>
      <div className='mx-auto w-fit'>
        <div className='flex py-5 space-x-3'>
          <h1 className='font-mono text-[20px] my-2'><b>Email Address</b></h1>
          <input className='border-2 border-[#DADADA] ms-auto px-40 py-3' type='text' placeholder='Enter Email-Address' />
        </div>
        <div className='flex py-5'>
          <h1 className='font-mono text-[20px] my-2'><b>Password</b></h1>
          <input className='border-2 border-[#DADADA] ms-auto px-40 py-3' type='text' placeholder='Enter Password' />
        </div>
        <div>
          <div className="py-3 flex w-fit space-x-8 mx-auto">
            <button className='py-2 font-mono'><b><u>Forgot Password</u></b></button>
            <button className=" text-[#1D1D1D] border-2 border-[#1D1D1D] rounded-lg px-16 py-3 font-mono text-[14px]"><b>Login</b></button>
          </div>
        </div>
        <div className='py-0 flex w-fit space-x-14 mx-auto'>
          <h1 className='font-mono text-primary'><b>Doesn’t Have An Account?</b></h1>
          <button className='mx-auto font-mono'><b><u>Register</u></b></button>
        </div>
      </div>
      </div>
  )
}

export default Newuser
