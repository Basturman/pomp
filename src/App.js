import {React,useState} from 'react';
import './App.css';
import Header from './header/Header';
import Footer from './footer/footer'
import Main from './main/Main'

function App() {

  const [server,setServer]=useState([
    {id:1,name:"Decor Plate",price:"$ 65.00 USD",img:"/imagesObj/image1.png"},
    {id:2,name:"Mint Pottery",price:"$ 75.00 USD",img:"/imagesObj/image2.png"},
    {id:3,name:"Set Of Potterys",price:"$ 125.00 USD",img:"/imagesObj/image3.png"},
    {id:4,name:"Orange Ceramic",price:"$ 55.00 USD",img:"/imagesObj/image4.png"},
    {id:5,name:"Dark Bowl",price:"$ 115.00 USD",img:"/imagesObj/image5.png"},
    {id:6,name:"Square Pottery",price:"$ 75.00 USD",img:"/imagesObj/image6.png"}
  ])

  return (
    <div className="App">
      <Header/>
      <Main server={server}/>
      <Footer/>
    </div>
  );
}

export default App;
