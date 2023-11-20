import React from 'react'
import './Sidebar.css'
import { FaBell, FaDrum, FaGuitar, FaHistory, FaKeyboard, FaMusic, FaPlusSquare } from 'react-icons/fa'
import Drake from '../assets/images/pngs/Drake.jpg'
import Taylor from '../assets/images/pngs/taylor.jpg'
import Kanye from '../assets/images/pngs/Kanye.jpg'
import Arianna from '../assets/images/pngs/Arianna.jpg'
import Dax from '../assets/images/pngs/Dax.jpg'


function Sidebar() {
  return (
    <div className='container-sidebar'>
      <div>
        <h2>Shortcuts</h2>
        <div className='group'>
          <ul>
            <li className='itemslist'><FaHistory />Chill Hits</li>
            <li className='itemslist'><FaGuitar />Accoustic</li>
            <li className='itemslist'><FaKeyboard />Piano Blues</li>
          </ul>

          <ul>
            <li className='itemslist'><FaDrum />Hops</li>
            <li className='itemslist'><FaMusic />Indie Pop</li>
            <li className='itemslist'><FaBell />Jazz</li>
          </ul>
        </div>
      </div>

      <h2>Fav Artist</h2>
      <div>
        <div className='faveSongs'>
          <img src={Drake} alt='profile' />
          <p style={{fontSize: '12px'}}><span>Drake</span> <br /> 78 songs in library </p>
          <p style={{fontWeight: 'bold'}}>...</p>
        </div>

        <div className='faveSongs'>
          <img src={Taylor} alt='profile' />
          <p style={{fontSize: '12px'}}><span>Taylor Swift</span>  <br /> 124 songs in library</p>
          <p style={{fontWeight: 'bold'}}>...</p>
        </div>

        <div className='faveSongs'>
          <img src={Kanye} alt='profile' />
          <p style={{fontSize: '12px'}}><span>Kanye West</span> <br /> 160 songs in library </p>
          <p style={{fontWeight: 'bold'}}>...</p>
        </div>

        <div className='faveSongs'>
          <img src={Arianna} alt='profile' />
          <p style={{fontSize: '12px'}}><span>Arianna Grande</span>  <br /> 129 songs in library</p>
          <p style={{fontWeight: 'bold'}}>...</p>
        </div>
      </div>

      <div className='songimg'>
        <img src={Dax} alt='' />
        <div className='songname'>
          <p>Dax</p>
          <p>Love Hurts</p>
          <FaPlusSquare />
        </div>
      </div>
    </div>
  )
}

export default Sidebar