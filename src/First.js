import React from 'react'
import khalti from './khalti.png'
import { PiPhoneCallFill } from "react-icons/pi";
import { MdMessage } from "react-icons/md";


const First = () => {
  return (
    <div className="first">
      <div className="logo">
        <img src={khalti} alt="" />
      </div>
      <div>
      <h3 className="Title">Bluebook Service with Pick & Drop</h3>
     <div className="p2">
     <p><PiPhoneCallFill className="phone-icon"/>01-5970053</p>
      <p><MdMessage className="message-icon"/>bluebook@khalti.com</p>
     </div>
      <p className="p3">This service is only for Kathmandu Valley</p>
      </div>
    </div>
  )
}

export default First
