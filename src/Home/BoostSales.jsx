import SalesDetails from '../assets/Sales Details.svg'

function BoostSales() {

  return (
    <div className='m-10'>
      <div className='flex flex-col gap-2'>
        <div className='flex px-10 box-card py-20 gap-8 text-white dark rounded-xl'>
          <div>
            <p className='text-3xl archivo'>Uncover Valuable Data for Better Decision-Making</p>
            <p>Explore our powerful analytics tools to boost sales and capture leads. Boomslang provides deep insights for data-driven marketing decisions.</p>
            <button className='archivo mt-6 text-lg bg-green-500 px-5 cursor-pointer flex rounded-lg py-4 text-black font-semibold'>Get Started</button>
          </div>
          <div>
            <img src={SalesDetails} alt="sales-image" loading='lazy' />
          </div>
        </div>
        <div className='flex px-10 box-card py-20 gap-8 text-white dark rounded-xl'>
          <div>
            <p className='text-3xl archivo'>Uncover Valuable Data for Better Decision-Making</p>
            <p>Explore our powerful analytics tools to boost sales and capture leads. Boomslang provides deep insights for data-driven marketing decisions.</p>
            <button className='archivo mt-6 text-lg bg-green-500 px-5 cursor-pointer flex rounded-lg py-4 text-black font-semibold'>Get Started</button>
          </div>
          <div>
            <img src={SalesDetails} alt="sales-image" loading='lazy' />
          </div>
        </div>
        <div className='flex px-10 box-card py-20 gap-8 text-white dark rounded-xl'>
          <div>
            <p className='text-3xl archivo'>Uncover Valuable Data for Better Decision-Making</p>
            <p>Explore our powerful analytics tools to boost sales and capture leads. Boomslang provides deep insights for data-driven marketing decisions.</p>
            <button className='archivo mt-6 text-lg bg-green-500 px-5 cursor-pointer flex rounded-lg py-4 text-black font-semibold'>Get Started</button>
          </div>
          <div>
            <img src={SalesDetails} alt="sales-image" loading='lazy' />
          </div>
        </div>

      </div>
    </div>
  )
}

export default BoostSales