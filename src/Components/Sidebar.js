import React from 'react';
import "./Sidebar.css";
import Logo from "../photos/loginlogo.jpg";
import SidebarOption from './SidebarOption';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from './DataLayer';
import FavoriteIcon from "@material-ui/icons/Favorite";
import ArtistIcon from "@material-ui/icons/LibraryAddCheck";
import AlbumIcon from "@material-ui/icons/Album";



function Sidebar() {

  const [{ playlists }] = useDataLayerValue();


  return (
    <div className='sidebar'>
        <img src={Logo} className="sidebar-logo" alt=''/>
      
        <SidebarOption Icon={HomeIcon} title="Home" />
        <SidebarOption Icon={SearchIcon} title="Search" />
        <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />

        <br />
        <strong className='sidebar-title'>PLAYLIST</strong>
        <hr />

        {playlists?.items?.map(playlist => (
          <SidebarOption title={playlist.name} />
        ))}

        <SidebarOption title="Hip hop" />
        <SidebarOption title="Rock" />
        <SidebarOption title="RnB" />



        <br />
        <strong className='sidebar-title'>YOUR COLLECTION</strong>
        <hr />

        <SidebarOption Icon={FavoriteIcon} title="Favorite Songs" />
        <SidebarOption Icon={ArtistIcon} title="Artist" />
        <SidebarOption Icon={AlbumIcon} title="Albums" />

    </div>
  )
}

export default Sidebar
