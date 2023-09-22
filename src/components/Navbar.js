import { logo } from "../assets";
import {FaBars} from 'react-icons/fa'
import { useState, useEffect } from "react";
function Navbar() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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
    return ( <>
        <div className="xl:px-16 lg:px-8 sm:pe-8 sm:ps-4 py-2 flex">
            <div className="flex">
                <img src={logo} className="h-16 w-16"/>
                <h1 className="text-[30px] max-[20px]:text-[20px] my-auto mx-2 font-semibold target:">Help N Hope</h1>
            </div>
            {windowWidth > 950 ? 
            (<div className="ms-auto flex space-x-6">
            <a href="" className={link}>Who We Are</a>
            <a href="" className={link}>Galary/Event</a>
            <a href="" className={link}>Our Imapact</a>
            <a href="" className={link}>Contact Us</a>
            <a href="" className={link}>Login/Signup</a></div>) : (
                <div className="ms-auto flex space-x-6"><button ><FaBars className={link}/></button></div>
            )
            }
            
            
        </div>
        </> );
}

export default Navbar;