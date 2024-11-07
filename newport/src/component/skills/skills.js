import React from 'react'
import './skills.css'
import css from '../../assets/css.png'
import html from '../../assets/html.png'
import javascript from '../../assets/javascript.png'
import python from '../../assets/python.png'

const Skills = () => {
  return (
     <section id='skills' >
      <span className='skillsTitle'>  About my skills </span>
      <div className='skillsBar'> 

         <div className='skillsBar'> 
         <img src={css} alt='' className='skillsImg'/>
         <div className='skillsBarText'>
            <h2></h2>
            <p>CSS</p>
         </div>
         </div>

         <div className='skillsBar'> 
          <img src={html} alt=''className='skillsImg'/>
          <div className='skillsBarText'>
            <h2></h2>
            <p>HTML</p>
         </div>
         </div>

         <div className='skillsBar'> 
         <img src={javascript} alt=''className='skillsImg'/>
          <div className='skillsBarText'>
            <h2></h2>
            <p>javascript</p>
         </div>
         </div>

         <div className='skillsBar'> 
         <img src={python} alt=''className='skillsImg'/>
          <div className='skillsBarText'>
            <h2></h2>
            <p>Python</p>
         </div>
         </div>

         <div className='skillsBar'> 
          <div className='skillsBarText'>
            <h2>Tools</h2>
            <p className='skillsPara'>Visual Studio Code </p>
            <p className='skillsPara'>MATLAB</p>
            <p className='skillsPara'>Arduino IDE</p>
            <p className='skillsPara'>Flutter</p>
           
         </div>
         </div>

      </div>
        </section>
        

      
        
  )
}

export default Skills