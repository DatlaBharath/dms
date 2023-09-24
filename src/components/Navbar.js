import { logo } from "../assets";
import {FaBars} from 'react-icons/fa'
import { useState, useEffect } from "react";
function Navbar() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [drop, setDrop] = useState(false)
    const handleDrop = ()=>{
        console.log(drop)
        setDrop(!drop)
    }
    const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
    };
    useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);
    return () => {
        window.removeEventListener('resize', updateWindowWidth);
    };
    }, []);
    const link = 'my-auto text-secondary hover:text-primary text-xl'
    const link2 = 'my-auto text-secondary hover:text-white text-xl'
    return ( <>
        <div className="xl:px-16 lg:px-8 sm:pe-8 sm:ps-4 py-2 flex">
            <div className="flex">
                <img src={logo} alt="logo" className="h-16 w-16"/>
                <h1 className="text-[30px] my-auto mx-2 font-semibold">Help N Hope</h1>
            </div>
            {windowWidth > 950 ? 
            (<div className="ms-auto flex space-x-6">
            <a href="#our" className={link}>Who We Are</a>
            <a href="#our" className={link}>Galary/Event</a>
            <a href="#our" className={link}>Our Imapact</a>
            <a href="#our" className={link}>Contact Us</a>
            <a href="#our" className={link}>Login/Signup</a></div>) : (
                <div className="ms-auto flex space-x-6">
                <button onClick={handleDrop}><FaBars className={link}/></button>
                {drop && (
                    <div className='justify-center items-center'>
                        <div className="flex flex-col justify-center items-center absolute top-20 right-0 mx-6 my-2 bg-gradient-to-t text-xl rounded-xl from-neutral-900 to-slate-800 px-4 py-5 bg-primary">
                            <a href="#our" className={link2}>Who We Are</a>
                            <a href="#our" className={link2}>Galary/Event</a>
                            <a href="#our" className={link2}>Our Imapact</a>
                            <a href="#our" className={link2}>Contact Us</a>
                            <a href="#our" className={link2}>Login/Signup</a>
                        </div>
                    </div>
                )}
                </div>
            )
            }
        </div>
        </> );
}

export default Navbar;