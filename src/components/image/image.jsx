import React from 'react'
import './image.scss'
import Team from '../../assets/image-team-members.jpg'

const Image = () => {
  return (
    <div className='image'>
      <div className="container">
        <img src={ Team } alt=""/>
      </div>
    </div>
  )
}
export default Image