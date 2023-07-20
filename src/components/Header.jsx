import React from 'react';
import logo from '/images/AmigoAI.png';
import { Link } from 'react-router-dom';
import Buttons from './hero-section/Buttons';
function Header() {
  return (
    <div>
      <header className='w-100'>
      <nav className="navbar navbar-expand-lg bg-light-blue">
  <div className="container">
    <Link to="/" className="navbar-brand">
    <img src={logo} className='img-fluid' alt="Dentoamigo" width={300} />    
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link active">Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/about" className="nav-link">About Us</Link>
        </li>

        <li className="nav-item">
        <Link to="/services" className="nav-link">Our Services</Link>
        </li>

        <li className="nav-item">
        <Link to="/contact" className="nav-link">Contact Us</Link>
        </li>
      </ul>
    
      <Buttons className="btn btn-primary fw-medium px-4 py-2 rounded-pill text-white text-decoration-none" btnTitle="Request Appointment" /> 

    </div>
  </div>
</nav>
      </header>
    </div>
  )
}

export default Header
