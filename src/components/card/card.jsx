import React from 'react'
import './card.scss'

const Card = ({ img, title, body }) => {
  return (
    <div className='card'>
      <div className="icon-bg">
        <div className="icon">
          { img }
        </div>
      </div>
      <h3 className="small">{ title }</h3>
      <p className='italic'>{ body }</p>
    </div>
  )
}
export default Card