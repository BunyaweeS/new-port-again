import React from 'react' ;
import './footer.css';
import mmd1 from '../../assets/mmd1.png'
import mmd2 from '../../assets/mmd2.png'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import ref3 from '../../assets/ref3.png'
import img3 from '../../assets/img3.jpg'
import mmd3 from '../../assets/mmd3.png'
import mmd4 from '../../assets/mmd4.png'

 const Footer = () => {
  return (
    <footer className='footer'> 
      
      <div className='footerHobby'> 
        <h2> HOBBY</h2>
      </div>

      <span className='footerHead'> Drawing </span>
      <div className='footerDraw'>
      <img src={img1}/>
      <img src={img2}/>
      <img src={ref3}/>
      <img src={img3}/>
      </div>
      <div>


      </div>
      <span className='footerHead'> Doing MMD </span>

      <div className='footerMMD'> 
        
        <div>
        <a href='https://www.youtube.com/watch?v=2cw1xPY5HQo'>【MMDヒロアカ/BNHA】CH4NGE【死柄木弔】【Tomura】</a>
        <img src={mmd3}/>
        </div>
        <div>
        <a href='https://www.youtube.com/watch?v=FmSxN291B3Q'>【MMDヒロアカ/BNHA】INTERGALACTIA 【トガヒミコ】【Toga Himiko】</a>
        <img src={mmd4}/>
        </div>
        
      </div>

     


    </footer>
  )
}
export default Footer
