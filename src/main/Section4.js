import React from 'react'
import ItemList from './ItemList'

function Section4(props) {
  return (
    <div className='section4'>
        <div className='s4TxtPlace'>
            <p className='tittle1'>OUR ONLINE STORE</p>
            <p className='tittle2'>Pottery Collection</p>
        </div>
        <div className='itemPlace'>
          {props.server.map((item)=>{return <ItemList item={item}/>})}
        </div>
        <button className='section4Btn btn'>VIEW ALL PRODUCTS</button>
    </div>
  )
}

export default Section4