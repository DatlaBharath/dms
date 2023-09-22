import { AiOutlineInstagram,AiOutlineYoutube,AiFillPhone } from "react-icons/ai";
import {MdEmail} from 'react-icons/md'
function Header() {
    const link = 'my-auto text-[#fff] hover:text-primary text-xl flex'
    return ( <>
        <div className="xl:px-16 lg:px-8 sm:pe-8 sm:ps-4 py-1 flex bg-secondary">
            <div className="flex space-x-6">
            <a href="" className={link}><AiFillPhone className="my-auto mx-3"/> 9908984918</a>
            <a href="" className={link}><MdEmail className="my-auto mx-3"/> datlabharath92@gmail.com</a>
            </div>
            <div className="ms-auto flex space-x-6">
            <a href="" className={link}><AiOutlineYoutube className="my-auto"/></a>
            <a href="" className={link}><AiOutlineInstagram className="my-auto"/></a>
            </div>
        </div>
        </> );
}

export default Header;