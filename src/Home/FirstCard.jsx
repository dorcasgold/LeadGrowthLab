import Sales_Details from '../assets/Sales Details.svg'

function FirstCard() {
  return (
    <div className='mt-40'>
      <div className=' lg:grid lg:grid-cols-3 lg:gap-x-4 lg:gap-y-0.5  grid grid-cols-1 gap-x-4 gap-y-0.5'>
        <div className='card flex flex-col gap-8'>
          <div className='mt-8'>
            <p className='text-xl text-gray-200 archivo'>Ai-powered Analytics</p>
            <p className='text-base mt-3'>Discover deep insights and trends with our advanced AI-powered analytics. Analyze vast amounts of data effortlessly to make informed decisions and drive business growth with precision and clarity.</p>
          </div>
          <div>
            <img src={Sales_Details} alt="sales_icon" />
          </div>
        </div>

        <div>
          <div className='card py-10 mt-7 lg:mt-0'>
            <p className='text-xl text-gray-200 archivo'>Copy-Writing</p>
            <p className='text-base mt-3'>Craft compelling and persuasive content with ease using our copy-writing tools. Enhance your marketing materials, engage your audience, and convey your message effectively across all platforms.</p>
          </div>
          <div className='card mt-10'>
            <p className='text-xl text-gray-200 archivo'>Marketing</p>
            <p className='text-base mt-3'> Elevate your marketing efforts with cutting-edge strategies and tools. From targeted campaigns to comprehensive analytics, optimize your marketing performance and achieve your business goals efficiently.</p>
          </div>
        </div>
        <div>
          <div className='card mb-8 mt-7 lg:mt-0'>
            <p className='text-xl text-gray-200 archivo'>Moodboard Generation</p>
            <p className='text-base mt-3'>Generate stunning moodboards instantly for your creative projects. Visualize your ideas, inspire your team, and streamline the design process with beautiful, cohesive moodboards tailored to your vision.</p>
          </div>
          <div className='card'>
            <p className='text-xl text-gray-200 archivo'>Improved Decision-Making</p>
            <p className='text-base mt-3'>Enhance your decision-making process with our data-driven insights. Leverage powerful analytics to gain a clear understanding of your business landscape and make strategic choices that lead to success.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstCard