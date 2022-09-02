import React from 'react'
import back1 from '../assets/back1.png'
import back1Vaz from '../assets/back1Vaz.png'
import './main.css'

export default function Section1() {
  return (
    <div className='section1'>
        <img className='back1' src={back1} alt="back1"/>
        <img className='back1Vaz' src={back1Vaz} alt="back1Vaz"/>
        <div className='txtCont'>
          <h2>POMPEO POTTERY</h2>
          <p className='section1Parag'><b>Unique Porcelan</b></p>
          <p className='section1Parag'><b>Stone Collection</b></p>
          <p className='section1Parag2'>Unique & modern pottery made by our master in porcelain & stones</p>
          <button className='section1Btn btn'>SHOP COLLECTION</button>
        </div>
    </div>
  )
}
