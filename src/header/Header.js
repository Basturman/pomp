import React,{useState} from 'react'
import Pompeo from '../assets/Pompeo.png'
import Menu from '../assets/menu.png'
import Cancel from '../assets/cancel.png'
import './header.css'
import Cart from '../assets/cart.png'

function Header() {

  const [menuBoot,setMenuBool]=useState(true)  
  function menuClick(){
    setMenuBool(!menuBoot)
    const menu=document.getElementById("btnContein2")
    if(menuBoot){
      menu.style.top="0vh"
    }
    else{
      menu.style.top="-100vh"
    }

  }

  
  return (
    <div className='header'>
        <div className='btnContein1'>
            <a href=''><img src={Pompeo} alt="logo"/></a>
        </div>
        <div className='btnContein2' id='btnContein2'>
            <img src={Cancel} onClick={menuClick} alt="cancel" />
            <button className={"btnHome btn"} onClick={null}>HOME</button>
            <button className={"btn"} onClick={null}>ABOUT</button>
            <button className={"btn"} onClick={null}>SHOP</button>
            <button className={"btnContact btn"} onClick={null}>CONTACT</button>
            <a href=""><img src={Cart} alt="Cart"/><span>CART</span></a>
        </div>
        <img onClick={menuClick} src={Menu} alt="menu" className='menuImg'/>
    </div>
  );
}

export default Header;
