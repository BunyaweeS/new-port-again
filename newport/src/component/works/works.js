import React from 'react'
import works from './works';
import arduinowork from '../../assets/arduinowork.png'
import germany from '../../assets/germany.png'
import training from '../../assets/training.PNG'
import guitest from '../../assets/guitest.PNG'
import normal from '../../assets/normal.PNG'
import good from '../../assets/good.PNG'
import './work.css'

const Works = () =>  {
  return (
    <section id='works'>
        <h2 className='worksTitle'> INNOVATIVE BLOWING DEVICE WITH ARDUINO</h2>
        <span className='worksDesc'>Our mini-project for this exchange program is a simulation of an innovative blowing </span>
        
        <div className='workGer'> 
        <img src={germany} className='workFlag'/> 
        <p> Internship at University of Applied Sciences in Esslingen (APR 2024 - MAY 2024) </p>
        </div>

        <div className='workAr'>
        <img src={arduinowork} className='workAr'/> 
        </div>

        <div className='workClustering'>
        <h2 > Clustering of Wine data Set using MATLAB </h2>
        <span>  training dataset to analyse of wines grade. </span>
          <img src={normal}/>
        </div>

        <div className='workLego'>
          <h2>Classification of Lego brick image using MATLAB</h2>
          <span> training dataset lego brick images to tell what type it is </span>
          <img src={guitest}/>

        </div>


        

        
            
        
        
    </section>
  )
}

export default Works