import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import './main.css'

export default function Main(props) {
  return (
    <div className='main'>
      {/* <img src="imagesObj/section3Image2.png" alt="grl" /> */}
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4 server={props.server}/>
      <Section5/>
      <Section6/>
    </div>
  )
}
