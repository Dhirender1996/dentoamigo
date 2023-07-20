import React from 'react'
import heroThumb from '/images/hero-img.jpg';
import Buttons from './Buttons';
function HeroSection() {
  return (
    <>
      <section className='w-100 position-relative py-lg-5 bg-light-blue'>
      <div className='container'>
        <div className='row align-items-center justify-content-between'>
        <div className='col-xxl-6 col-xl-6 col-lg-7 col-md-6 order-md-1 order-2'>
            <h4 className='h4 text-secondary'>Relaxed office. Experienced team. Exceptional care.</h4>
            <h1 className='h1 fw-normal text-primary my-4'>Get All <strong className='text-success'>Dental Solutions</strong> Under One Roof</h1>
            <div className='mt-lg-5 mt-4'>
            <Buttons className="btn btn-primary fw-medium px-4 py-2 rounded-pill text-white text-decoration-none" btnTitle="Request Appointment" />
            </div>
            <div className='mt-lg-5 my-3'>
              <div className='d-flex align-items-center'>
            <div className='border rounded-circle border-primary p-2 me-2'>
            <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="M795-120q-122 0-242.5-60T336-336q-96-96-156-216.5T120-795q0-19.286 12.857-32.143T165-840h140q13.611 0 24.306 9.5Q340-821 343-805l27 126q2 14-.5 25.5T359-634L259-533q56 93 125.5 162T542-254l95-98q10-11 23-15.5t26-1.5l119 26q15.312 3.375 25.156 15.188Q840-316 840-300v135q0 19.286-12.857 32.143T795-120ZM229-588l81-82-23-110H180q0 39 12 85.5T229-588Zm369 363q41 19 89 31t93 14v-107l-103-21-79 83ZM229-588Zm369 363Z" fill="#09568d"/></svg> 
            </div>
            <div className='call-action text-secondary'>
             +91-8800856469 
            </div>
            </div>
            </div>
            </div>   
            <div className='col-xxl-5 col-xl-5 col-lg-5 col-md-6 order-md-2 order-1'>
                <figure className='hero-thumbnail position-relative'>
                   <img src={heroThumb} alt="Dentoamigo" className='img-fluid'/> 
                </figure>
                </div> 
        </div>
        </div>  
      </section>
    </>
  )
}

export default HeroSection
