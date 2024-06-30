import dashboard from '../assets/Dashboard.svg'

function Dashboard() {
  return (
    <div className='my-10 mt-32'>
      <div className='flex dark rounded-2xl'>
        <div className='text-white flex flex-col gap-3 justify-center px-8 '>
          <p className='archivo text-4xl'>Boost Your Sales with</p>
          <p className='archivo text-4xl underline text-green-500'>Boomslang</p>
          <p>Unlock a suite of robust marketing and analytics tools that will propel your business to new heights and drive growth. Access the power you need.</p>
          <div>
            <button className='archivo mt-6 text-lg bg-green-500 px-5 cursor-pointer flex rounded-lg py-4 text-black font-semibold'>Get Started</button>
          </div>
        </div>

        <div>
          <img src={dashboard} alt="dashboard" loading='lazy' className='rounded-2xl' />
        </div>
      </div>
    </div>
  )
}

export default Dashboard