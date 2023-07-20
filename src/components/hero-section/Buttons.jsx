import React from 'react'
import { Link } from 'react-router-dom';

function Buttons({className, btnTitle}) {
  return (
    <>
      <Link to="/request-appointment" className={className}>{btnTitle}</Link>
    </>
  )
}

export default Buttons
