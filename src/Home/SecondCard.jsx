import Rocket from '../assets/Rocket.svg'
import ChartBar from '../assets/ChartBar.svg'
import Lightbulb from '../assets/Lightbulb.svg'
import treeStructure from '../assets/treeStructure.svg'
import Analytics from '../assets/Analytics-Image.svg'

function SecondCard() {
  return (
    <div className="mt-28">
      <div className="px-5 mx-10 my-20 text-white flex items-center gap-16">
        <div>
          <div className="flex flex-col gap-3 top">
            <div>
              <span className="text-green-500 underline archivo text-5xl">Turbocharge your</span>
            </div>
            <div>
              <span className="text-green-500 underline archivo text-5xl">marketing</span> <span className="text-5xl archivo">with</span>
            </div>
            <div>
              <p className="text-white archivo text-5xl">SalesInsight&apos;s tools</p>
            </div>
            <div className="flex flex-col">
              <span>Boomslang offers powerful marketing tools to boost sales and leads.</span>
              <span>Our analytics help track campaign performance for data-driven decisions.</span>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-x-1 gap-y-5'>
            <div className=' flex w-52 dark gap-3 items-center py-3 px-1 justify-center rounded-lg'>
              <img src={Rocket} alt="icon" className='w-14 light px-2 rounded-xl' />
              <p className='archivo'>Boost Sales</p>
            </div>
            <div className='flex w-52 dark gap-3 items-center py-3 px-1 justify-center rounded-lg'>
              <img src={treeStructure} className='w-14 light px-2 rounded-xl' alt="icon" />
              <p className='archivo'>Capture Leads</p>
            </div>
            <div className='flex w-52 dark gap-3 items-center py-3 px-1 justify-center rounded-lg'>
              <img src={ChartBar} className='w-14 light px-2 rounded-xl' alt="icon" />
              <p className='archivo'>Data Analysis</p>
            </div>
            <div className='flex w-52 dark gap-3 items-center py-3 px-1 justify-center rounded-lg'>
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