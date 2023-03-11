import React from 'react';
import "./Rightsidebar.css";
import HitIcon from "@material-ui/icons/MusicVideo";
import SongIcon from "@material-ui/icons/QueueMusic";
import AccousticIcon from "@material-ui/icons/QueueMusicOutlined";
import IndiaPopIcon from "@material-ui/icons/MusicOff";
import BluesIcon from "@material-ui/icons/LibraryMusic";
import JazzIcon from "@material-ui/icons/MusicNoteTwoTone";
import RightImage from "../photos/rightSideImage.jpg";


function Rightsidebar() {

  const album = [
    {
      id: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTnaogLOVv7Ww4hziCLnbnvi25vs2hXbx2fg&usqp=CAU",
      artist: "Taylor Swift",
      songs: "106 songs on library",
      dots: "..",
    },

    {
      id: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2VsDaNdGgTkj7HoDyG7K1LOAP91EdU4yBIg&usqp=CAU",
      artist: "Simisola Adekunle",
      songs: "17 songs on library",
      dots: "..",
    },

    {
      id: 3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThgQJBtu8EnJ5sY5yof3l9GSZ0Xtcd-H5YeA&usqp=CAU",
      artist: "Billie Ellish",
      songs: "26 songs on library",
      dots: "..",
    },

    {
      id: 4,
      image: "https://i.pinimg.com/originals/be/e8/44/bee844bd11d44bf2e43e5cdfd59cfb55.jpg",
      artist: "Tatiana Manosis",
      songs: "40 songs on library",
      dots: "..",
    },
  ]





  return (
    <div className='rightsidebar'>

      <h2>Shortcuts</h2>

      <div className='genre'>

        <div className='genre-topline'>
            <button> <HitIcon /> Chill Hits</button>
            <button> <SongIcon /> Hop</button>
        </div>

        <div className='genre-middleline'>
          <button> <AccousticIcon /> Accoustic</button>
            <button> <IndiaPopIcon  /> India Pop</button>
        </div>

          <div className='genre-downline'>
            <button> <BluesIcon /> Piano Blues</button>
            <button> <JazzIcon /> Jazz</button>
          </div>

      </div>

            <div className='fave'>
              <h3>Fav Artist</h3>
            </div>

          {
            album.map(({id, image, artist, songs, dots}) =>

            <div key={id} className='fave-artist'>
          

              <div className='list-artist'>

                <div className='artist-img'>
                  <img src={image} alt='' />
                </div>

                <div className='artist-name'>
                  <h4>{artist}</h4>
                  <p>{songs}</p>
                </div>

                <div className='dots'>
                  <p>{dots}</p>
                </div>
          
              </div>
            </div>
            )
          }



      

        <div className='artist-photo'>
          <img src={ RightImage } alt='' />

          <h5>Helplessly</h5>
          <p>Tatiana Manosis</p>
        </div>
      
    </div>
 

  )
}

export default Rightsidebar;
