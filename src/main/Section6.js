import React from 'react'
import section6Image1 from '../assets/section6Image1.png'

function Section6() {
  return (
    <div className="section6">
        <img src={section6Image1} alt="section6Image1" />
        <p className="imgTxt">LATEST NEWS</p>
        <p className='tittle2 sc6Tittle2'><b>Latest news<span>&</span>New updates</b></p>
        <form action="" className='form1'>
          <input type="email" placeholder='Enter your email' name="" id="" className='email'/>
          <input type="submit" value="SUBSCRIBE" className='submit'/>
        </form>
    </div>
  )
}

export default Section6