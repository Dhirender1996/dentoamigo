import React from 'react';
import Buttons from '../../../components/hero-section/Buttons';
function AboutUsHome() {
  return (
   <>

<section className='w-100 position-relative bg-white pt-5 pb-0'>
      <div className='overlay-bg'></div>
      <div className='container position-relative'>
      <div className='row justify-content-center align-items-center'>
      <div className='col-xl-7 col-lg-7 col-md-5'>
       <figure className='position-relative mb-0'>
        <img src='./images/aboutGirl.png' alt="About" className='img-fluid' />  
        </figure> 
      </div>
      <div className='col-md-5 col-xl-5 col-lg-5 col-md-7'> 
      <div className='ps-lg-4 my-3 text-md-start text-center'> 
      <h3 className='text-success'>About Us</h3>
      <h2 className='text-primary fw-bold'>Welcome to Dentoamigo Dental Clinic</h2>
      <p className='lead fw-normal text-secondary mt-lg-3'>Everyone is welcome here in our Kansas City dentist office. Our practice is guided by a no-judgment, no-pressure philosophy. concern with our full attention and expertise.</p>
      <div className='mt-lg-4'>
      <Buttons className="btn btn-primary fw-medium px-5 py-2 rounded-pill text-white text-decoration-none" btnTitle="Read More" />
            </div>
      </div>
      </div>
        </div>  
      </div>

      </section>

   </>
  )
}

export default AboutUsHome
