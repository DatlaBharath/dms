import { logo } from "../assets";

const Footer = () => (
  <section className='justify-center items-center mt-24'>
    <div className={`flex justify-center items-start md:flex-row flex-col mb-8 p-4 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10 mt-5">
        <div className="flex w-fit space-x-3 ms-16">
            <img
            src={logo}
            alt="logo"
            className="w-8"
            />
            <h1 className="text-[20px] my-auto font-semibold">Help N Hope</h1>
        </div>
        <p className='mt-4 max-w-[312px] ms-8'>
            Together, we can light the path of education and empowerment for every child in need.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        <div className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
                <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-primary">
                    Menu
                </h4>
                <ul className="list-none mt-4">
                    <li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`}>
                        abcd
                    </li>
                    <li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`}>
                        abcd
                    </li>
                    <li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`}>
                        abcd
                    </li>
                </ul>
        </div>
        <div className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
                <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-primary">
                    About
                </h4>
                <ul className="list-none mt-4">
                    <li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`}>
                        abcd
                    </li>
                    <li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`}>
                        abcd
                    </li>
                    <li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`}>
                        abcd
                    </li>
                </ul>
        </div>
        <div className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
                <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-primary">
                    Contact Info
                </h4>
                <ul className="list-none mt-4">
                    <li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`}>
                        abcd
                    </li>
                    <li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`}>
                        abcd
                    </li>
                    <li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`}>
                        abcd
                    </li>
                </ul>
        </div>
      </div>
    </div>

    <div className="bg-secondary text-white w-full flex justify-between items-center md:flex-row flex-col py-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center w-fit mx-auto text-[18px] leading-[27px]">
        Copyright Ⓒ 2020 HelpNHope. All Rights Reserved.
      </p>
    </div>
  </section>
);

export default Footer;
