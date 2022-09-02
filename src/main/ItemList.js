import React from 'react'

function ItemList(props) {
  return (
    <div className='itemList'>
        <img src={props.item.img} alt="nkar"/>
        <p className='itemName'>{props.item.name}</p>
        <p className='itemPrice'><b>{props.item.price}</b></p>
    </div>
  )
}

export default ItemList