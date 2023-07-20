import React from 'react'

function Form() {

    const styleBgimage = {
        backgroundImage:'url(./images/bg-clinic.jpg)',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        paddingTop: '80px',
        paddingBottom:'80px',
      };

  return (
    <>
        <section className='w-100 position-relative' style={styleBgimage}>
        <div className='container position-relative'>
        <div className='row'>
      <div className='col-xl-6 col-lg-7 col-md-12'> 
      <div className='bg-white p-5 rounded shadow-sm'>
      <h2 className='text-center text-primary fw-bold'>Book an Appointment</h2>
      <form className="row mt-5 needs-validation">
  <div className="col-md-6">
    <div className='mb-3'>
    <label htmlFor="validationCustom01" className="form-label">First name</label>
    <input type="text" className="form-control form-control-lg" id="validationCustom01" required />
    </div>
  </div>
  <div className="col-md-6">
      <div className='mb-3'>
    <label htmlFor="validationCustom02" className="form-label">Last name</label>
    <input type="text" className="form-control form-control-lg" id="validationCustom02"  required />
  </div>
  </div>
  <div className="col-md-6">
    <div className='mb-3'>
    <label htmlFor="validationCustom03" className="form-label">Email</label>
      <input type="email" className="form-control form-control-lg" id="validationCustom03" required />
  </div>
  </div>
  <div className="col-md-6">
    <div className='mb-3'>
    <label htmlFor="validationCustom04" className="form-label">Phone</label>
    <input type="number" className="form-control form-control-lg" id="validationCustom04" required />
  </div>
</div>
<div className="col-md-6">
  <div className='mb-3'>
    <label htmlFor="validationCustom05" className="form-label">Date</label>
    <input type="date" className="form-control form-control-lg" id="validationCustom05" required />
  </div>
</div>
  <div className="col-md-6">
    <div className='mb-3'>
    <label htmlFor="validationCustom06" className="form-label">Time</label>
    <input type="time" className="form-control form-control-lg" id="validationCustom06" required />
  </div>
  </div>

  <div className="col-md-12">
    <div className='mb-3'>
    <label htmlFor="validationCustom04" className="form-label">Message</label>
  <textarea className="form-control form-control-lg" cols="4" rows="4"></textarea>
  </div>
  </div>

  <div className="col-12">
      <div className='mt-3'>
    <button className="btn btn-primary w-100 btn-lg" type="submit">Book Now</button>
  </div>
  </div>
</form>
      </div>
      </div>
      </div>
      </div>
      </section>
    </>
  )
}

export default Form