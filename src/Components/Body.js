import React from 'react';
import "./Body.css";
import Header from './Header';
import { useDataLayerValue } from './DataLayer';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';





function Body({ spotify }) {

  const [{ discover_weekly }] = useDataLayerValue()

  return (
    <div className='body'>
      <Header spotify={spotify}/>

      <p>What's hot</p>
      <div className='body-topText'>
        <div className='body-topTextLeft'>
          <h1>Trending</h1>
        </div>

        <div className='body-topTextRight'>
          <p>More</p>
          <ArrowForwardIcon />
        </div>

      </div>
      
      <div className="body-info">
        <img src={discover_weekly?.images[0].url} alt='' />

        <div className="body-infoText">
          <strong>PLAYLISTS</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
        
      </div>

        <div className='body-songs'>
          <div className='body-icons'>
            <PlayCircleFilledIcon className="body-shuffle" />
            <FavoriteIcon fontSize="Large" />
            <MoreHorizIcon />
          </div>


            {
              discover_weekly?.tracks.items.map(item => 
                <SongRow track={item.track} />
                )
            }
        </div>



   
    </div>
  )
}

export default Body
