import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {testimonailsData} from "./ReviewData.js";
function Testimonials() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (
    <>
    <section className='w-100 position-relative bg-light-blue'>
    <div className='container-fluid'>
<div className='row align-items-center'>
         <div className='col-xl-6 col-lg-6 col-md-12 px-0'>
           <figure className='mb-0'>
           <img src="/images/sparks_testimonial-img.jpg" className='img-fluid' alt="Testimonails" /> 
           </figure>
            </div>

            <div className='col-xl-6 col-lg-6 col-md-12'>
<div className='p-5'>
   <h2 className='text-primary fw-bold mt-lg-4'>Take it from our patients</h2> 
   <figure className='my-5 pt-lg-4'>
   <svg xmlns="http://www.w3.org/2000/svg" width="82.776" height="70.951" viewBox="0 0 82.776 70.951">
  <g id="quote" transform="translate(0 -29.235)">
    <path id="Path_445" data-name="Path 445" d="M233.882,29.235V64.711h23.65a23.677,23.677,0,0,1-23.65,23.65v11.825a35.514,35.514,0,0,0,35.476-35.476V29.235Z" transform="translate(-186.581)" fill="#c8d88b"/>
    <path id="Path_446" data-name="Path 446" d="M0,64.711H23.65A23.677,23.677,0,0,1,0,88.361v11.825A35.514,35.514,0,0,0,35.476,64.711V29.235H0Z" transform="translate(0 0)" fill="#c8d88b"/>
  </g>
</svg>
   </figure>
   <div className='review-card'>
   <div className='my-3'>
<svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 -960 960 960" width="35"><path d="m323-205 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-355Z" fill="#09568d"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 -960 960 960" width="35"><path d="m323-205 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-355Z" fill="#09568d"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 -960 960 960" width="35"><path d="m323-205 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-355Z" fill="#09568d"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 -960 960 960" width="35"><path d="m323-205 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-355Z" fill="#09568d"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 -960 960 960" width="35"><path d="m323-205 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178ZM233-80l65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Zm247-355Z" fill="#09568d"/></svg>
    </div> 
<Carousel showDots={true} arrows={false} responsive={responsive}>
              {
            testimonailsData.map(reviewItem => 
              <div className='review-disc pb-5' key={reviewItem.id}>  
              <p className='fw-normal lead'>{reviewItem.reviewDisc}</p>
              <h4 className='text-primary my-4'>{reviewItem.author}</h4>
              </div> 
              )
          }
</Carousel>
     
</div>  
</div>
            </div>
        </div>
        </div>    
    </section>
    </>
  )
}

export default Testimonials
