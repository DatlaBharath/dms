import {AiFillHeart} from 'react-icons/ai';
import { icon_charity } from '../assets';
export const Home = () => {
    return(

        <main className="p-20 font-semibold flex">
            <div>
            <div className="text-[40px] text-primary">
                <h1>Help N Hope</h1>
                <h1>Charitable Society</h1>
            </div>
            <div className="content2 py-2 text-[40px]">
                <h1>Let’s Help And Make</h1>
                <h1>People Smile By<span className="text-primary"> Giving</span></h1>    
                <h1>Of Yours</h1>
                <h3 className='text-sm text-[#04703C]'>"Every small act of kindness has the power to change a life forever.”</h3>
            </div>
                <div className="py-2">
                    <button className="DonateButton text-lblue border-2 border-lblue rounded-lg px-10 py-3 flex font-semibold"> Donate Now <AiFillHeart className='my-auto ms-2'/></button>
            </div> 
            </div>
            <div className='w-fit ms-auto'>
               <img className="w-20" src={icon_charity} alt = "donate-icon"></img> 
            </div>   
        </main>
    );
};
export default Home;