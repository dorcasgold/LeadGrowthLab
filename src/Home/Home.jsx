

function Home() {
  return (
    <div className='mx-5 mt-20 text-8xl'>
      <div className='flex justify-center flex-col w-full h-full items-center'>
        <div className="">
          <p className=' archivo text-gray-200'>Unleash Your </p>
        </div>
        <div className="mb-3 flex archivo items-baseline gap-5">
          <p className=" text-green-500 "><span className="underline text-green-500">Marketin</span>g</p>  <span className="text-gray-200">Power</span>
        </div>
        <div className="">
          <p className='archivo text-2xl text-center text-gray-500 mt-5'>SalesInsightPro delivers robust marketing and analytics tools designed to boost sales and generate leads. With our cutting-edge features and intuitive interface, optimizing marketing strategies and driving business growth has never been easier.</p>
        </div>
        <div className="">
          <button className='archivo mt-6 text-xl bg-green-500 px-5 cursor-pointer hidden md:flex rounded-lg py-4 text-black font-semibold'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Home