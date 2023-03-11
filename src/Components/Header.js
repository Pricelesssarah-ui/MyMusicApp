import React from 'react';
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from '@material-ui/core';
import { useDataLayerValue } from './DataLayer';
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";





function Header() {

    const [{ user }] = useDataLayerValue();

  

  return (
    <div className='header'>
          <div className='arrows'>
            <ArrowBackIcon />
            <ArrowForwardIcon /> 
          </div> 

      <div className='header-left'>
            
            <SearchIcon />

            <input
            placeholder='Search for Artist, Songs, or podcast'
            type='text'
            />
      </div>

      <div className='header-right'>
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>

      </div>
    </div>
  )
}

export default Header
