
import React from 'react'
import email from '../../assets/email.png'
import facebook from '../../assets/facebook.png'
import phoneCall from '../../assets/phoneCall.png'
const Contact = () => {
  return (
    <section>
        
        <div className='contactPic'>
        <img src={email} className='ContactImg'/> 
        <p>bunyaweesrithong@gmail.com</p>
        </div>

        <div className='contactPic'>
        <img src={facebook} className='ContactImg'/>
        <a href='https://www.facebook.com/profile.php?id=100005197186164'>Bunyawee Srithong </a>
        </div>

        <div className='contactPic'>
        <img src={phoneCall} className='ContactImg' />
        <p>0980604445</p>
        </div>

    </section>
   
   
  )
}
export default  Contact