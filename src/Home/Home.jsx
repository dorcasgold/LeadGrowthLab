import './Brands'
import Brands from './Brands'
import FirstCard from './FirstCard'
import SecondCard from './SecondCard'
import PricingCard from './PricingCard'
import Faq from '../faq/Faq'

function Home() {
  return (
    <div className='mx-5 mt-20 '>
      <div className='flex justify-center md:text-5xl lg:text-8xl text-3xl flex-col w-full h-full text-center items-center'>
        <div>
          <p className=' archivo text-gray-200'>Unleash Your </p>
        </div>
        <div className="mb-3 flex archivo items-baseline gap-5">
          <p className=" text-green-500 "><span className="underline text-green-500">Marketin</span>g</p><span className="gray">Power</span>
        </div>
        <div>
          <p className='archivo text-base md:text-2xl text-center gray mt-5'>SalesInsightPro delivers robust marketing and analytics tools designed to boost sales and generate leads. With our cutting-edge features and intuitive interface, optimizing marketing strategies and driving business growth has never been easier.</p>
        </div>
        <div>
          <button className='archivo mt-6 text-lg bg-green-500 px-5 cursor-pointer flex rounded-lg py-4 text-black font-semibold'>Get Started</button>
        </div>
      </div>
      <Brands />
      <FirstCard />
      <SecondCard />
      <PricingCard />
      <Faq />
    </div>
  )
}

export default Home