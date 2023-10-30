import React from 'react';
import './topbar.css' ; 
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';




const Topbar = () => {
  return (
    <div className='topbarContainer'>

    <div className="topbarLeft">
    <Link to='/Home'> <span className='logo'>Mukesh Social</span></Link>

    
    </div>


    <div className="topbarCenter">
    <div className="searchbar">
    <SearchIcon className='searchIcon'/>
    <input type="text" placeholder='Search for Friend and Post or Video' className='searchInput'/>
    </div>



    </div>
    <div className="topbarRight">
        <div className="topbarLinks">
            <span className="toperbarLink">Home Page </span>
            <span className="toperbarLink"> Time Line </span>
        </div>


    <div className="topbarIcon">
    
        <div className="topbarIconItems">
        <PersonIcon/>
        <span className="topbarIconBadge">1</span>
        </div>
       
        <div className="topbarIconItems">
        <ChatIcon/>
        <span className="topbarIconBadge">1</span>
        </div>

        <div className="topbarIconItems">
        <NotificationsIcon/>
        <span className="topbarIconBadge">1</span>
        </div>

      <Link to='/Profile'> <img src="/assets/modi.webp" alt="modi" className='topbarImage'/>  </Link> 


    </div>
    </div>

    
    
    </div>
  )
}

export default Topbar ; 