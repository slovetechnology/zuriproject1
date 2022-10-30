import React from 'react'
import img1 from "../images/logo.png"
import hdicon from "../images/zuri1.png"
import hdicon2 from "../images/zuri3.png"

const Header = ({username}) => {
  return (
    <>
    <div className="d-lg-block d-none hdicon"> <img src={hdicon} alt="" /> </div>
    <div className="d-lg-none  hdicon"> <img src={hdicon2} alt="" className='border-0' /> </div>
    <div className="text-center"> <img src={img1} alt="" className="img1" id="profile_img" /> </div>
    <div className="text-center">
      <div className="fw-semibold text-capitalize fs-5 mt-3 mb-4">{username}</div>
      <h1 hidden>Slack Username: georgegodslove</h1>
    </div>
    </>
  )
}

export default Header
