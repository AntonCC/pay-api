import React from 'react'
import './page-title.scss'

const PageTitle = ({ title, extraPadding, children }) => {
  return (
    <div className='page-title'>
      <div className={`container ${extraPadding ? 'extra' : ''}`}>
        <div className="small-wrap">
          <h2 >{ children }</h2>
        </div>
      </div>
    </div>
  )
}
export default PageTitle