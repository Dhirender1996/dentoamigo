import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/images/AmigoAIWhite.png';
function Footer() {
  return (
    <>
    <section className='w-100 py-5 position-relative bg-primary'>
     <div className='container'>
     <div className='row justify-content-end align-items-center'>
      <div className='col-md-6'>
      <Link to="/" className="navbar-brand">
    <img src={logo} className='img-fluid' alt="Dentoamigo" width={280} />    
    </Link>
      </div>

<div className='col-md-6'>
<div className='d-flex justify-content-md-end social-handle'>
<Link to="#">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>  
</Link>  
<Link to="#">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
</Link>

<Link to="#">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
</Link>
<Link to="#">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
</Link>
</div> 
</div>
</div> 


<div className='row mt-5 border-top pt-5'>
<div className='col-xl-3 col-lg-3 col-md-3 col-sm-6'>
  <div className='footer-widgets'>
   <h5>Amigo Advantage</h5> 
   <ul>
   <li><Link to="#">Amigo Clinics</Link></li>
   <li><Link to="#">Patient Testimonials</Link></li>
   <li><Link to="#">Outreach Programs</Link></li>
   <li><Link to="#">Patient Feedback</Link></li>
   <li><Link to="#">Online Payments</Link></li>
   </ul>
  </div>
  </div> 

  <div className='col-xl-3 col-lg-3 col-md-3 col-sm-6'>
  <div className='footer-widgets'>
   <h5>About Us</h5> 
   <ul>
   <li><Link to="#">Vision & Mission</Link></li>
   <li><Link to="#">Outreach programs</Link></li>
   <li><Link to="#">Gallery</Link></li>
   <li><Link to="#">Board of Directors</Link></li>
   <li><Link to="#">Contact Us </Link></li>
   </ul>
  </div>
  </div> 

  
  <div className='col-xl-3 col-lg-3 col-md-3 col-sm-6'>
  <div className='footer-widgets'>
   <h5>Useful Links</h5> 
   <ul>
   <li><Link to="#">Blogs</Link></li>
   <li><Link to="#">Book An Appointment</Link></li>
   <li><Link to="#">Dental Awareness</Link></li>
   <li><Link to="#">Privacy Policy</Link></li>
   <li><Link to="#">Contact Us </Link></li>
   </ul>
  </div>
  </div> 

  <div className='col-xl-3 col-lg-3 col-md-3 col-sm-6'>
  <div className='footer-widgets'>
   <h5>Address</h5> 
   <address>
   Flat No 17, Om Apartments Dwarka, Sector 14 Dwarka, B, Delhi, 110075
   <p className='my-3'><Link to="tel:+91-8800856469" className='text-decoration-none'><svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22"><path d="M776-487q-5-121-89-205t-205-89v-60q72 2 135.5 30.5T729-734q48 48 76.5 111.5T836-487h-60Zm-169 0q-5-50-40-84.5T482-611v-60q75 5 127.5 57T667-487h-60Zm188 367q-116 0-236.5-56T335-335Q232-438 176-558.5T120-795q0-19.286 12.857-32.143T165-840h140q14 0 24 10t14 25l26.929 125.641Q372-665 369.5-653.5q-2.5 11.5-10.729 19.726L259-533q26 44 55 82t64 72q37 38 78 69.5t86 55.5l95-98q10-11 23.151-15T686-369l119 26q15 4 25 16.044T840-300v135q0 19.286-12.857 32.143T795-120ZM229-588l81-82-23-110H180q2 42 13.5 88.5T229-588Zm369 363q41 19 89 31t93 14v-107l-103-21-79 83ZM229-588Zm369 363Z" fill="#fff"/></svg> +91-8800856469</Link></p>

   <p><Link to="mailto:info@dentoaimgo.com" className='text-decoration-none'><svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 -960 960 960" width="22"><path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140-685v465h680v-465L480-462Zm0-60 336-218H145l335 218ZM140-685v-55 520-465Z" fill="#fff"/></svg> info@dentoaimgo.com</Link></p>

   </address>
  </div>
  </div> 


</div>


     </div>
      </section>  
      <div className='position-relative bg-primary bg-opacity-75 py-3'>
<div className='container'>
 <div className='row'>
 <div className='col-md-12'>
  <p className='text-center mb-0 text-white'>© 2012 - 2023 Dentoaimgo LLC. All Rights Reserved</p>
 </div>
  </div> 
</div>
     </div>
    </>
  )
}

export default Footer
