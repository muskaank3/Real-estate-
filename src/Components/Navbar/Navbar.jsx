import React from 'react'
import './Navbar.css'
import logoImg from '../../assets/Navbar/logo-land2.png'
import { NavLink} from 'react-router-dom'



const Navbar = () => {
  return (
    <>
    
    <div className='nav-main'>
        <div className='navbar-main'>
            <div className='nav-logo'>
              <NavLink to="/">
              <img src={logoImg} className='logo-imgg'></img>
               </NavLink>
            </div>


            <div className='list-cover'>
              <ul className='nav-list'>
                <li  className='list'>
                  <NavLink to="/" className='linkss'> Home </NavLink>
                </li>
                <li  className='list'>
                  <NavLink to="/contact" className='linkss'> Contact </NavLink>
                </li>
                <li className='list'>
                  <NavLink to="/about" className='linkss'> About Us </NavLink>
                </li>
                <li  className='list'>
                  <NavLink to="/blog" className='linkss'> Blog </NavLink>
                </li>

              </ul>
            </div>


            <div ><button className='nav-button'>Login</button></div>
        </div>
    </div>
    
    
    </>
  )
}

export default Navbar
