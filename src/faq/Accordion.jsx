import React, { useState } from 'react'

function Accordion({ title, content }) {
  const [isActive, setIsActive] = useState(false)
  return (
    <div>


      <div className='flex flex-col dark py-3 gap-3 px-5 justify-between lg:mx-64 rounded-md'>
        <div className='w-full archivo flex justify-between cursor-pointer translate-y-2' onClick={() => setIsActive(!isActive)}>
          <span>{title}</span>
          {isActive ? <span>-</span> : <span>+</span>}
        </div>
        <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 '}`}>
          <div className=' overflow-hidden'>
            <p className=' text-gray-400'>{content}</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Accordion