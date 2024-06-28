

import logo1 from '../assets/Logo 1.svg'
import logo2 from '../assets/Logo 2.svg'
import logo3 from '../assets/Logo 3.svg'
import logo4 from '../assets/Logo 4.svg'
import logo5 from '../assets/Logo 5.svg'

function Brands() {
  return (
    <div>
      <div className='flex items-baseline'>
        <div className="mx-5 mt-32 logo-slide">
          <p className="text-white archivo">Brands that trust us</p>
          <p className="gray w-80">Leading brands rely on SalesInsightPro to optimize strategies and drive growth.</p>
        </div>
        <div className='mt-5 logo-container'>
          <div className="logos">
            <img src={logo1} alt="logo" />
            <img src={logo2} alt="logo" />
            <img src={logo3} alt="logo" />
            <img src={logo4} alt="logo" />
            <img src={logo5} alt="logo" />
            <img src={logo1} alt="logo" />
            <img src={logo2} alt="logo" />
            <img src={logo3} alt="logo" />
            <img src={logo4} alt="logo" />
            <img src={logo5} alt="logo" />
          </div>
        </div>
      </div>


    </div>
  )
}

export default Brands