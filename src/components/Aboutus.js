import React from 'react'
import { BsCheckCircleFill } from 'react-icons/bs'
import { icon_solidarity } from '../asserts';
const Aboutus = () => {
  return (
    <div className='flex'>
        <div>
            <img className="ms-16 w-28" src={icon_solidarity} alt = "donate-icon "></img> 
        </div>
        <div className='font-semibold text-[40px] ms-auto w-fit me-16'>
            <h1 className='text-primary'>Who we Are</h1>
            <h1>We’re Non-Profit Charity</h1>
            <h1>& NGO Organization</h1>
            <div className='py-10'>
            <ui className='text-[#04703C] text-[20px] font-medium'>
                <li>When you give, you don't just donate; you transform lives.</li>
                <li>Join us in writing stories of success and opportunity.</li>
                <li>Join us in breaking the cycle of poverty through the gift of education.</li>
            </ui>
            <div className='py-6 text-[20px]'>
               <h3 className='py-2 flex'><BsCheckCircleFill
                className='fill-lblue flex my-auto mx-2'/>Our mission: Inspire hope, ignite change.</h3>
               <h3 className='py-2 flex'><BsCheckCircleFill
                className='fill-lblue flex my-auto mx-2'/>We believe in a world where every child's dreams are within reach.</h3>
                <h3 className='py-2 flex'><BsCheckCircleFill 
                className='fill-lblue flex my-auto mx-2'/>Make the world a better place.</h3>
                <h3 className='py-2 flex'><BsCheckCircleFill 
                className='fill-lblue flex my-auto mx-2'/>Your generosity fuels our mission to make dreams come true.</h3>
            </div>
            <div>
                <div className="py-2">
                    <button className=" text-[#FFFFFF] border-2 border-lblue rounded-lg bg-lblue px-10 py-3 flex font-semibold text-[14px]"> About Us</button>
                </div> 
            </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutus
