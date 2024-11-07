import React from 'react'
import works from './works';
import arduinowork from '../../assets/arduinowork.png'
import germany from '../../assets/germany.png'
import training from '../../assets/training.PNG'
import guitest from '../../assets/guitest.PNG'
import normal from '../../assets/normal.PNG'
import good from '../../assets/good.PNG'

const Works = () =>  {
  return (
    <section id='works'>
     
      <h2 className='worksTitle'> INNOVATIVE BLOWING DEVICE WITH ARDUINO</h2>
      <span className='worksDesc'>Our mini-project for this exchange program is a simulation of an innovative blowing </span>
      <p className='workArduino'> Internship at University of Applied Sciences in Esslingen (APR 2024 - MAY 2024) </p>
      <div className='workImgs'>
      <img src={arduinowork} className='workImg'/>
      <img sec={germany} className='workFlag'/>
      </div>
      
      

            <h2> Clustering of Wine data Set using MATLAB </h2>
            <span>  training dataset to analyse of wines grade. </span>
            <div className='workCluster'>
            <img src={normal} className='workImg'/>
            <img src={good} className='workImg'/>
            </div>
        
        
    </section>
  )
}

export default Works