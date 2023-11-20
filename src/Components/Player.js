import React from 'react'
import './player.css'
import Menubar from './Menubar'
import Sidebar from './Sidebar'
import Main from './Main'

function Player() {
  return (
    <div className='container-flex'>
      <Menubar />
      <Main />
      <Sidebar />
    </div>
  )
}

export default Player
