import React from 'react'
import './footer.css'
import Pompeo from '../assets/Pompeo.png'
import Email from '../assets/EMAIL.png'
import Find from '../assets/FIND.png'
import Call from '../assets/CALL.png' 

function footer() {
  return (
    <div className="footer">
        <div className='footerDiv1'>
            <img src={Pompeo} alt="logo" />
            <p className='footerP1'>I have always striven to fix beauty in wood, stone,</p>
            <p className='footerP2'>glass or pottery, that has been my creed.</p>
            <div className='contacts'>
                <div className="contact">
                    <img src={Email} alt="email" />
                    <p className='nameContact'><b>EMAIL</b></p>
                    <p className='infoContact'>pompeopotery@gmail.com</p>
                </div>
                <div className="contact">
                    <img src={Find} alt="find" />
                    <p className='nameContact'><b>FIND</b></p>
                    <p className='infoContact'>Central Park, Manhattan</p>
                    <p>New York, 1101</p>
                </div>
                <div className="contact">
                    <img src={Call} alt="call" />
                    <p className='nameContact'><b>CALL</b></p>
                    <p className='infoContact'>+1 292 345 678</p>
                </div>
            </div>
        </div>
        <div className='footerDiv2'>
            <p>Template design by Dorian Hoxha - Image License Info Powered by Webflow</p>
        </div>
    </div>
  )
}

export default footer