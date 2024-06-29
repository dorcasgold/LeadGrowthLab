import Rocket from '../assets/Rocket.svg'
import ChartBar from '../assets/ChartBar.svg'
import Lightbulb from '../assets/Lightbulb.svg'
import treeStructure from '../assets/treeStructure.svg'
import Analytics from '../assets/Analytics-Image.svg'

function SecondCard() {
  return (
    <div className="mt-28">
      <div className="md:px-5 px-2 mx-5 my-20 text-white flex-col flex items-center gap-16 lg:flex-row">
        <div>
          <div className="flex flex-col gap-3 top">
            <div>
              <span className="text-green-500 underline archivo text-2xl md:text-5xl">Turbocharge your</span>
            </div>
            <div className='flex gap-3'>
              <span className="text-green-500 underline archivo text-2xl md:text-5xl">marketing</span> <span className="text-2xl md:text-5xl archivo">with</span>
            </div>
            <div>
              <p className="text-white archivo text-xl md:text-5xl">SalesInsight&apos;s tools</p>
            </div>
            <div className="flex flex-col">
              <span>Boomslang offers powerful marketing tools to boost sales and leads.</span>
              <span>Our analytics help track campaign performance for data-driven decisions.</span>
            </div>
          </div>

          <div className='grid lg:grid-cols-2 gap-x-3 gap-y-5 grid-cols-1 my-10'>
            <div className=' flex dark gap-3 items-center py-3 px-2 justify-start rounded-lg'>
              <img src={Rocket} alt="icon" className='w-14 light px-2 rounded-xl' />
              <p className='archivo'>Boost Sales</p>
            </div>
            <div className='flex dark gap-3 items-center py-3 px-2 justify-start rounded-lg'>
              <img src={treeStructure} className='w-14 light px-2 rounded-xl' alt="icon" />
              <p className='archivo'>Capture Leads</p>
            </div>
            <div className='flex dark gap-3 items-center py-3 px-2 justify-start rounded-lg'>
              <img src={ChartBar} className='w-14 light px-2 rounded-xl' alt="icon" />
              <p className='archivo'>Data Analysis</p>
            </div>
            <div className='flex dark gap-3 items-center py-3 px-2 justify-start rounded-lg'>
              <img src={Lightbulb} className='w-14 light px-2 rounded-xl' alt="icon" />
              <p className='archivo'>Decision-Making</p>
            </div>
          </div>
        </div>
        <div className='dark rounded-lg'>
          <img src={Analytics} alt="Analytics" className='w-[35rem] py-28' />
        </div>
      </div>
    </div>
  )
}

export default SecondCard