import React from 'react';
import './NavBar.css';
import communicate from '../../assets/communicate.png'
import {Link} from 'react-scroll'
import Contact from './../contact/contact';
export const NavBar = () => {
return (
    <nav className='navbar'>
        
        <div className='desktopMenu'>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}
        className='desktopMenuListItem'>Home</Link>

        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500}
        className='desktopMenuListItem'>Past work</Link>
        
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500}
        className='desktopMenuListItem'>About</Link>

        <Link activeClass='active' to='footer' spy={true} smooth={true} offset={-100} duration={500}
        className='desktopMenuListItem'>Others</Link>

        </div>
       
    </nav>
  )

}
