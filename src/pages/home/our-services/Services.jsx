import React from 'react'
import {serviceApi} from './serviceData.js';
import CardServices from './CardServices.jsx';
function Services() {

const styleBgimage = {
  backgroundImage:'url(./images/bg-services.png)',
  backgroundSize:'cover',
  backgroundRepeat:'no-repeat',
  paddingTop: '190px',
  paddingBottom:'60px',
  marginTop:'-125px',
};

  return (
    <>
    <section className='w-100 position-relative' style={styleBgimage}>
      <div className='overlay-bg'></div>
      <div className='container position-relative'>
      <div className='row justify-content-center'>
      <div className='col-xl-5 col-lg-5 col-md-10 col-sm-12'>  
      <h3 className='text-center text-success'>Our Services</h3>
      <h2 className='text-center text-primary fw-bold'>We  Have  Best Quality Services for you!</h2>
      </div>
        </div> 


        <div className='row justify-content-center mt-5'>{
        serviceApi.map(itemService => 
          <CardServices key={itemService.id} item={itemService}/>
          )
  }
        </div>

      </div>
      </section>
    </>
  )
}

export default Services
