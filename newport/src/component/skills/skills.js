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
            <p>CSS</p>
         </div>
         </div>

         <div className='skillsBar'> 
          <img src={html} alt=''className='skillsImg'/>
          <div className='skillsBarText'>
            <p>HTML</p>
         </div>
         </div>

         <div className='skillsBar'> 
         <img src={javascript} alt=''className='skillsImg'/>
          <div className='skillsBarText'>
            <p>javascript</p>
         </div>
         </div>

         <div className='skillsBar'> 
         <img src={python} alt=''className='skillsImg'/>
          <div className='skillsBarText'>
            <p>Python</p>
         </div>
         </div>
         </div>
         
         <div className='skillsPara'> 
          <div >
            <h2>Tools</h2>
            <p className=''>Visual Studio Code </p>
            <p className=''>MATLAB</p>
            <p className=''>Arduino IDE</p>
            <p className=''>Flutter</p>
           
         </div>
         </div>

      
        </section>
        

      
        
  )
}

export default Skills