import React from 'react';

function Gallery() {
  return (
    <>
    <section className='w-100 position-relative py-5'>
      <div className='container'> 
      <div className='row'> 
      <div className='col-lg-4 col-md-4'>
    <figure className='gallery-card'>
    <img src='/images/amigoGallery-01.jpg' className='img-fluid' alt="Dentoamigo"/>    
    </figure>
    </div>

    <div className='col-lg-4 col-md-4'>
    <figure className='gallery-card'>
    <img src='/images/amigoGallery-02.jpg' className='img-fluid' alt="Dentoamigo"/>    
    </figure>
    </div>
    <div className='col-lg-4 col-md-4'>
    <figure className='gallery-card'>
    <img src='/images/amigoGallery-03.jpg' className='img-fluid' alt="Dentoamigo"/>    
    </figure>
    </div>

    <div className='col-lg-4 col-md-4'>
    <figure className='gallery-card'>
    <img src='/images/amigoGallery-04.jpg' className='img-fluid' alt="Dentoamigo"/>    
    </figure>
    </div>

    <div className='col-lg-4 col-md-4 d-flex align-items-end'>
    <figure className='gallery-card'>
     <h2 className='text-center text-primary fw-bold py-lg-5'> A Place for Transformation</h2>   
     <img src='/images/amigoGallery-06.jpg' className='img-fluid' alt="Dentoamigo"/>  
    </figure>
    </div>

    <div className='col-lg-4 col-md-4'>
    <figure className='gallery-card'>
    <img src='/images/amigoGallery-05.jpg' className='img-fluid' alt="Dentoamigo"/>    
    </figure>
    </div>

      </div>
      </div>
      </section>
    </>
  )
}

export default Gallery
