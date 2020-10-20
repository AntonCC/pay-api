import React from 'react'
import './img-banner.scss'
// import Test from '../../assets/test-svg.svg'
import { ReactComponent as Test } from '../../assets/test-svg.svg'

const ImgBanner = ({ img, title, body, switchSide}) => {
  return (
    <div className='img-banner'>
      <div className={`container ${switchSide ? 'switch' : ''}`}>
        <div className="side-a">
          <div className="img-wrapper">
            <img src={ img } alt="code-block"/>
          </div>
        </div>
        <div className="side-b">
          <h2>{ title }</h2>
          <p className='italic'>{ body }</p>
        </div>
      </div>
    </div>
  )
}
export default ImgBanner