import React from 'react'
import zuriimg from "../images/zuri2.png"

const Footer = () => {
  return (
    <div className="footer border-top pt-5 mt-3">
        <div className="mb-3 fw-semibold d-flex align-items-center gap-1"> Zuri <div className="dot align-self-end mb-1"></div> Internship </div>
        <div className="mb-3"> HNG Internship 9 Frontend Task </div>
        <div className=""> <img src={zuriimg} alt="" className="globe" /> </div>
    </div>
  )
}

export default Footer
