import React from 'react'
import './Main.css'
import { FaArrowLeft, FaArrowRight, FaSearch } from 'react-icons/fa'
import Sunrest from '../assets/images/pngs/sunrest.jpg'

function Main() {
  return (
    <div className='container-main'>
      <div className='arrowsearchbar'>
        <div className='arrow-container'>
          <FaArrowLeft style={{marginRight: 50}} />
          <FaArrowRight />
        </div>
      
        <div className='searchbar-container'>
          <FaSearch />
          <input type='text' placeholder='artists,  songs, albums' />
        </div>
      </div>

      <span style={{marginLeft: '2rem', fontWeight: 'bold'}}>
        What's hot
      </span>
      <div className='trend'>
        <h1>Trending</h1>
        <p style={{fontWeight: 'bold', marginRight: '2rem', 
          display: 'flex', alignItems: 'center'}}>
          More <FaArrowRight style={{marginLeft: '10px'}} /> 
          </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <img src={Sunrest} className='naturepic' alt='sunrest' />
      </div>

      <div className='imagetext'>
        <h2>On Top <br /> Of The World</h2>
        <button className='playbutton'>PLAY</button>
        <button className='followbutton'>FOLLOW</button>
      </div>
    </div>
  )
}

export default Main