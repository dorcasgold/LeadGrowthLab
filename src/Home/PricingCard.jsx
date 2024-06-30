import { FaCircleCheck } from "react-icons/fa6";
import { useState } from 'react'
function PricingCard() {
  const [title, setTitle] = useState('Monthly')
  return (
    <div className="lg:m-20 mt-40 ">
      <div className='flex justify-center flex-col w-full items-center gap-8'>
        <div className='text-white flex flex-col gap-3'>
          <div className='text-2xl lg:text-5xl archivo flex gap-3 justify-center'>
            <span>Explore our </span>
            <span className='text-green-500 underline'> flexible and</span>
          </div>
          <div className='text-2xl lg:text-5xl archivo flex gap-3 justify-center'>
            <span className='text-green-500 underline'>affordable</span>
            <span>pricing plans</span>
          </div>
          <p className='text-center'> Choose the perfect plan to boost your sales and achieve your marketing goals with powerful analytics tools. Start today and see the difference!</p>
        </div>

        <div className='light flex gap-5 w-40 justify-center py-3 rounded-xl mt-16 items-center'>
          <p className={`cursor-pointer text-white ${title === 'Monthly' ? 'green-bg' : ''}`} onClick={() => setTitle('Monthly')}>Monthly</p>
          <p className={`cursor-pointer text-white ${title === 'Yearly' ? 'green-bg' : ''}`} onClick={() => setTitle('Yearly')}>Yearly</p>
        </div>

        <div className="cards flex gap-10 lg:gap-8 mt-14 flex-col lg:flex-row">
          <div className='dark text-white px-7 py-8 rounded-lg flex flex-col gap-3'>
            <div className='flex flex-col gap-3'>
              <p className='text-xl archivo text-green-500'>BASIC</p>
              <p>Ideal for small businesses and startups</p>
              <p className='bg-green-500 h-[2px] w-80'></p>
            </div>

            {
              title === 'Monthly' ?
                <div className='flex items-baseline'>
                  <p className='text-3xl archivo'>$19</p><span>/mo</span>
                </div> :
                <div className='flex items-baseline'>
                  <p className='text-3xl archivo'>$199</p><span>/yr</span>
                </div>
            }
            <div className='flex flex-col gap-5 items-center'>
              <button className=' mt-6 text-base bg-green-500 px-28 cursor-pointer flex rounded-lg py-2 text-black font-semibold'>Get Started</button>
              <p className='bg-green-500 h-[2px] w-80'></p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2 items-center">
                <FaCircleCheck className=" text-green-500 text-xl" />
                <p>Advanced analytics and reporting</p>
              </div>
              <div className="flex gap-2 items-center">
                <FaCircleCheck className=" text-green-500 text-xl" />
                <p>Email marketing integration</p>
              </div>
              <div className="flex gap-2 items-center">
                <FaCircleCheck className=" text-green-500 text-xl" />
                <p>Lead generation tools</p>
              </div>
            </div>
          </div>

          <div className='bg-green-500 translate-y-[-20px] text-black px-6 py-16 rounded-lg flex flex-col gap-3'>
            <div className='flex justify-between'>
              <p className='text-xl archivo'>STANDARD</p>
              <p className="bg-gray-300 px-3 py-1 rounded-lg">Popular</p>
            </div>
            <div className='flex flex-col gap-3'>
              <p>Perfect for growing businesses</p>
              <p className='bg-black h-[2px] w-80'></p>
            </div>

            {
              title === 'Monthly' ?
                <div className='flex items-baseline'>
                  <p className='text-3xl archivo'>$29</p><span>/mo</span>
                </div> :
                <div className='flex items-baseline'>
                  <p className='text-3xl archivo'>$299</p><span>/yr</span>
                </div>
            }

            <div className='flex flex-col gap-5 items-center'>
              <button className=' mt-6 text-base bg-gray-300 px-28 cursor-pointer flex rounded-lg py-2 text-black font-semibold'>Get Started</button>
              <p className='bg-black h-[2px] w-80'></p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2 items-center">
                <FaCircleCheck className=" text-black text-xl" />
                <p>Advanced analytics and reporting</p>
              </div>
              <div className="flex gap-2 items-center">
                <FaCircleCheck className=" text-black text-xl" />
                <p>Email marketing integration</p>
              </div>
              <div className="flex gap-2 items-center">
                <FaCircleCheck className=" text-black text-xl" />
                <p>Lead generation tools</p>
              </div>
              <div className="flex gap-2 items-center">
                <FaCircleCheck className=" text-black text-xl" />
                <p>Customizable dashboards</p>
              </div>
            </div>
          </div>

          <div className='dark text-white translate-y-[-40px] px-8 py-14 rounded-lg flex flex-col gap-3'>
            <div className='flex flex-col gap-3'>
              <p className='text-xl archivo'>PRO</p>
              <p>Designed for large-scale businesses</p>
              <p className='bg-green-500 h-[2px] w-80'></p>
            </div>
            {
              title === 'Monthly' ?
                <div className='flex items-baseline'>
                  <p className='text-3xl archivo'>$49</p><span>/mo</span>
                </div> :
                <div className='flex items-baseline'>
                  <p className='text-3xl archivo'>$499</p><span>/yr</span>
                </div>
            }

            <div className='flex flex-col gap-5 items-center'>
              <button className=' mt-6 text-base bg-green-500 px-28 cursor-pointer flex rounded-lg py-2 text-black font-semibold'>Get Started</button>
              <p className='bg-green-500 h-[2px] w-80'></p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2 items-center">
                <FaCircleCheck className=" text-green-500 text-xl" />
                <p>Advanced analytics and reporting</p>
              </div>
              <div className="flex gap-2 items-center">
                <FaCircleCheck className=" text-green-500 text-xl" />
                <p>Email marketing integration</p>
              </div>
              <div className="flex gap-2 items-center">
                <FaCircleCheck className=" text-green-500 text-xl" />
                <p>Lead generation tools</p>
              </div>
              <div className="flex gap-2 items-center">
                <FaCircleCheck className=" text-green-500 text-xl" />
                <p>API access and integrations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingCard