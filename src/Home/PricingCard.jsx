import { useState } from 'react'
function PricingCard() {
  const [title, setTitle] = useState('Monthly')
  return (
    <div className="m-20 mt-40">
      <div className='flex justify-center flex-col w-full items-center'>
        <div className='text-white flex flex-col gap-3'>
          <div className='text-5xl archivo flex gap-3 justify-center'>
            <span>Explore our </span>
            <span className='text-green-500 underline'> flexible and</span>
          </div>
          <div className='text-5xl archivo flex gap-3 justify-center'>
            <span className='text-green-500 underline'>affordable</span>
            <span>pricing plans</span>
          </div>
          <p className='text-center'> Choose the perfect plan to boost your sales and achieve your marketing goals with powerful analytics tools. Start today and see the difference!</p>
        </div>

        <div className='light flex gap-5 w-40 justify-center py-3 rounded-xl mt-24 items-center'>
          <p className='green-bg cursor-pointer'>Monthly</p>
          <p className='cursor-pointer text-white'>Yearly</p>
        </div>


        <div className="cards">
          <div>
            <div>
              <p>BASIC</p>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingCard