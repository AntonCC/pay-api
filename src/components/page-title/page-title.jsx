import React from 'react'
import './page-title.scss'

const PageTitle = ({ title }) => {
  return (
    <div className='page-title'>
      <div className="container">
        <div className="small-wrap">
          <h2>{ title }</h2>
        </div>
      </div>
    </div>
  )
}
export default PageTitle