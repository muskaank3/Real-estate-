import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logoImg from '../../assets/Navbar/logo-land2.png';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

   useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }, []);

  return (
    <div className={`nav-main ${scrolled ? "nav-blue" : ""}`}>
      <div className='navbar-main'>
        <div className='nav-logo'>
          <NavLink to="/">
            <img src={logoImg} className='logo-imgg' />
          </NavLink>
        </div>

        <div className='list-cover'>
          <ul className='nav-list'>
            <li className='list'>
              <NavLink to="/" className='linkss'> Home </NavLink>
            </li>
            <li className='list'>
              <NavLink to="/contact" className='linkss'> Contact </NavLink>
            </li>
            <li className='list'>
              <NavLink to="/about" className='linkss'> About Us </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <Link to="/register" className='get-startedd'>
          <button className='nav-button'>Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar