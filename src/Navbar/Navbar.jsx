import { useState } from 'react'
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

function Navbar() {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <nav>
      <div className=" text-white flex items-center gap-6 sm:justify-between mx-8 my-5 mt-5">
        <div>
          <h1 className="text-1xl md:text-2xl archivo logo font-semibold text-green-500">Sales<span className="text-white">Insight</span><span className="text-green-500">Pro</span></h1>
        </div>
        <div className=" ml-auto gap-3 hidden md:flex mr-auto">
          <ul className="flex gap-8 md:hidden lg:flex items-center text-lg font-medium">
            <li className="link">Features</li>
            <li className="link">Pricing</li>
            <li className="link">Blog</li>
            <div className="flex  link items-center">
              <li className="">Company</li>
              <span className="text-3xl"><BiChevronDown /></span>
            </div>
          </ul>
        </div>
        <div className="flex gap-4">
          <div className="flex bg-green-500 items-center gap-2 cursor-pointer px-3 rounded-lg py-1 text-lg text-black font-semibold">
            <p>Cart</p>
            <span className="bg-black text-white px-2 rounded-2xl text-base">0</span>
          </div>
          <p className="bg-green-500 px-3 cursor-pointer hidden md:flex rounded-lg py-1 text-lg text-black font-semibold">Buy Template</p>
        </div>
        <div onClick={handleNav} className='lg:hidden md:flex'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <div className={nav ? 'fixed w-full mt-20 left-0 top-0 h-[50%] bg-[#202121] ease-in-out duration-500' : "fixed top-[-100%]"}>

          <div className=" ml-auto md:flex h-full flex justify-center items-center mr-auto">
            <ul className="flex gap-8 flex-col items-center text-lg font-medium">
              <li className="link2">Features</li>
              <li className="link2">Pricing</li>
              <li className="link2">Blog</li>
              <div className="flex  link2 items-center">
                <li className="">Company</li>
                <span className="text-3xl"><BiChevronDown /></span>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar