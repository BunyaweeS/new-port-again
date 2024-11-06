import React from 'react';
import './NavBar.css';
import communicate from '../../assets/communicate.png'
import {Link} from 'react-scroll'
return (
    <nav className='navbar'>
        
        <div className='desktopMenu'>
        <Link className='desktopMenuListItem'>Home</Link>
        <Link className='desktopMenuListItem'>Past work</Link>
        <Link className='desktopMenuListItem'>About</Link>
        <Link className='desktopMenuListItem'>Others</Link>
        </div>
        <button className='desktopMenuBtn'>
        <img src={communicate} alt='' className='desktopMenuImg'/>contact me</button>
       
    </nav>
  )


export default NavBar