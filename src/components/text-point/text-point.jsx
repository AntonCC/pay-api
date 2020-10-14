import React from 'react'
import './text-point.scss'

const TextPoint = ({ title, body, extraSpace }) => {
  return (
    <div className={`text-point ${extraSpace ? 'extra' : ''}`}>
      <div className="container">
        <div className="small-wrap">
          <div className="side-a">
            <h3>{ title }</h3>
          </div>
          <div className="side-b">
            <p className='italic'>{ body }</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default TextPoint