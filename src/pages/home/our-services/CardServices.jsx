import React from 'react';
import { Link } from 'react-router-dom';
function CardServices({item}) {
  return (
    <>
     <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch flex-column'>
           <div className='services-card bg-white rounded h-100 p-4 mb-3 shadow-sm'> 
           <figure>
            <img src={item.icons} alt={item.title} width={60}/>
           </figure>
          <h4 className='fw-bold text-primary py-2'>{item.title}</h4>
          <p>{item.disc}</p>
          <div className='mt-3'>
           <Link to="#" className='text-decoration-none text-success'>Read More</Link> 
          </div>
          </div>
           </div> 
    </>
  )
}

export default CardServices
