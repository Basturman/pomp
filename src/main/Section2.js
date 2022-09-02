import React from 'react'
import Section2Image1 from '../assets/section2Image1.png'
import Section2Image2 from '../assets/section2Image2.png'
import Section2Image3 from '../assets/section2Image3.png'


function Section2() {
  return (
    <div className='section2'>
        <div className='tittelis'>
          <p className='tittle1'>PRODUCT CATEGORIES</p>
          <p className='tittle2'><b>Porcelain<span>&</span>Pottery</b></p>
        </div>
        <div className='range'>
          <div className='firstCircle circle'>
            <div className='firstCircleCircle circle2'>
              <img src={Section2Image1} alt="section2Image1" />
              <p><b>VASES</b></p>
            </div>
          </div>
          <div className='secondCircle circle'>
            <div className='secondCircleCircle circle2'>
              <img src={Section2Image2} alt="section2Image2" />
              <p><b>MUGS</b></p>
            </div>
          </div>
          <div className='thirtCircle circle'>
            <div className='thirtCircleCircle circle2'>
              <img src={Section2Image3} alt="section2Image3" />
              <p><b>PLATES</b></p>
            </div>
          </div>
        </div>
        <div className='infoCont'>
          <div className='infoPlace1 infoPlace'>
            <p className='infoTittle'><b>Hand Grafted</b></p>
            <p className='infoTittle'><b>Pottery since 1990</b></p>
            <p className='infoTxt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.</p>
          </div>
          <div className='infoPlace2 infoPlace'>
            <p className='infoTittle'><b>We Provide Premium</b></p>
            <p className='infoTittle'><b>Pottery Produts</b></p>
            <p className='infoTxt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.</p>
          </div>
        </div>
    </div>
  )
}

export default Section2