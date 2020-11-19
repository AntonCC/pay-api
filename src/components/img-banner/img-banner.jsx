import React from 'react'
import './img-banner.scss'
import {ReactComponent as Circle} from '../../assets/bg-circle.svg'

const ImgBanner = ({ img, title, body, switchSide, svgCircle}) => {
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
        {
          svgCircle && (
            <div className="img-banner-circle">
              <Circle />
            </div>
          )
        }
      </div>
    </div>
  )
}
export default ImgBanner