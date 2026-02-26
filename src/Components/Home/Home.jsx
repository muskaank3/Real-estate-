import React from 'react'
import './Home.css'
import h2Img from '../../assets/Home/h2.png'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'


const Home = () => {
  
  return (
   <>
   
   
   <div>
    <div className='hero-section'>
      <Navbar></Navbar>
      <img src={h2Img} className='hero-imgg'></img>



      <div>
        <div>
          <Link to="/services">
  <button className='hero-but'>Explore Luxury Homes</button>
</Link>
          <h1 className='hero-head'>Your Gateway to <br></br>Dubai’s Most Prestigious Homes</h1>
          <p className='hero-para'>Experience a new standard of elegance with exclusive villas, penthouses, and waterfront residences located in Dubai’s most prestigious neighborhoods. Designed for those who seek privacy, comfort, and timeless luxury.</p>
        </div>
      </div>

      <div className='circle-main'>
        <div className='div'>
          <h1>50+</h1>
          <p>Project Complete</p>
        </div>
        <div  className='div'>
          <h1>$3.5M</h1>
          <p>Project value</p>
        </div>
        <div className='div'>
          <h1>100+</h1>
          <p>Expert teams</p>
        </div>
      </div>
      
        
    </div>
   </div>
   
   
   </>
  )
}

export default Home
