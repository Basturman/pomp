import React from 'react'
import section3Image1 from '../assets/section3Image1.png'
import section3Image2 from '../assets/section3Image2.png'

function Section3() {
  return (
    <div className='section3'>
        <div className='section3Div1'>
            <div className='imagePlace'>
                <img src={section3Image1} alt="section3Image1"/>
            </div>
            <div className="txtPlace">
                <p className='txtPlaceTittle'><b>Gold & Black Pottery</b></p>
                <p className='txtPlaceInfo'>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute.</p>
                <button className='txtPlaceBtn'>View Details</button>
            </div>
        </div>
        <div className='section3Div2'>
            <div className='imagePlace'>
                <img src={section3Image2} alt="section3Image1"/>
            </div>
            <div className="txtPlace">
                <p className='txtPlaceTittle'><b>Orange Ceramic</b></p>
                <p className='txtPlaceInfo'>Pri cu dico labores officiis, odio principes complectitur ad sea. Sea id doctus forensibus, nec lorem vocent aliquam eu. Aliquid definitiones id cum, ad meliore perpetua referrentur sed. Quas suscipit ad mea verear vivendo tincidunt.</p>
                <button className='txtPlaceBtn'>View Details</button>
            </div>
        </div>
    </div>
  )
}

export default Section3