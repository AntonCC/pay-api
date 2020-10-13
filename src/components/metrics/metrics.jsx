import React from 'react'
import './metrics.scss'

const Metrics = () => {
  return (
    <div className='metrics'>
      <div className="container">
        <div className="metric">
          <p className='italic'>Team Members</p>
          <h1>300+</h1>
        </div>
        <div className="metric">
          <p className='italic'>Offices in the US</p>
          <h1>3</h1>
        </div>
        <div className="metric">
          <p className='italic'>Transactions analyzed</p>
          <h1>10m+</h1>
        </div>
      </div>
    </div>
  )
}
export default Metrics