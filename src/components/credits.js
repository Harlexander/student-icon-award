import React from 'react'
import whatsapp from './../images/whatsapp.png'
function Credits() {
  return (
      <div className="bg-dark px-4 py-3 text-light d-flex flex-row justify-content-between">
      <p className="text-capitalize my-auto"> Created By Peachy Creation &copy;</p>
      <a href="https://wa.me/+2348104293963">
        <img src={whatsapp} height='40'/>
      </a> 
     
      </div>
  )}
export default Credits;