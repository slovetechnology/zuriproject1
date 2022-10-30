import React from 'react'

const ProfileLink = ({title, id, link}) => {
  return (
    <a href={link} className="text-decoration-none" id={id} target="_blank" rel="noreferrer"> <div className="bg-darklight links w-100 py-3 text-dark mb-2 rounded text-center text-capitalize">{title}</div> </a>
  )
}

export default ProfileLink
