import React from 'react'
import './Intro.css' 
import me from '../../assets/me.png'
 const Intro = () => {
  return (
    <section id="intro"> 
        <div className='introContent'> 
        <span className='hello'>Hello there!</span>
        <span className='introText'>
        I'm
        <span className='introName'> Bunyawee Srithong</span>
        <br/>
        A front-End Developer
        </span>
        <p className='introPara'>
            I'm a student of KING MONGKUT'S UNIVERSITY OF TECHNOLOGY NORTH BANGKOK
            <br/>
            Electronics EngineeringTechnology (Computer) Student
            <br/>
            GPX : 2.63
            <br/>
            TOEIC : 635
        </p>
        </div>
        <img src={me} alt='' className='bg'></img>
    </section>
  )

}
export default Intro
