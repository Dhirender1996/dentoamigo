import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {sliderData} from "./DataSlider.js";
function SliderSmile() {

   
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };



  return (
    <>
      <section className='w-100 py-5 bg-primary'>
      <div className='container py-3'>
      <div className='row justify-content-center align-items-center'>
      <div className='col-md-7'>
      <h2 className='text-success text-center fw-bold'> See how we can make a 
difference in your smile</h2>
      </div>
      </div>


<div className='row mt-5'>
<div className='col-md-12'>
<Carousel arrows={true} responsive={responsive}>
{
    sliderData.map(showSlick => 
        
    <div className='position-relative smile-difference text-center' key={showSlick.id}>
    <figure className='px-2'>
    <img src={showSlick.imageId} className='w-100 img-fluid' alt={showSlick.name} />  
    </figure>
    </div>
    
    )
}

</Carousel>  
</div>    
</div>


      </div>
      </section>
    </>
  )
}

export default SliderSmile
