import React, { useState, useEffect, useContext } from 'react'
import './img-banner.scss'
import { WidthContext } from '../../contexts/widthContext'
import {ReactComponent as Circle} from '../../assets/bg-circle.svg'

const ImgBanner = ({ img, title, body, switchSide, svgCircle}) => {
  const [width] = useContext(WidthContext)
  const [renderSVG, setRenderSVG] = useState()

  useEffect(() => {
    if(width <= 975) {
      setRenderSVG(false)
    } else {
      setRenderSVG(true)
    }
  }, [width])

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
          svgCircle && renderSVG && (
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