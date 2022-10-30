import React from 'react'
import github from "../images/github.png"
import slack from "../images/slack.png"

const SocialLinks = () => {
  return (
    <div className="d-flex align-items-center justify-content-center gap-4 mt-4 mb-5">
        <div id="slack"><img src={slack} alt="" className="social" /></div>
        <div id=""><img src={github} alt="" className="social" /></div>
    </div>
  )
}

export default SocialLinks
