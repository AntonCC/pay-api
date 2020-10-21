import React from 'react'
import './pricing-card.scss'
import Button from '../button/button'
import {ReactComponent as Check} from '../../assets/icon-check.svg'

const PricingCard = ({ plan, description, price, activePoints, inactivePoints}) => {
  return (
    <div className='pricing-card'>
      <h3>{ plan }</h3>
      <p className='italic'>{ description }</p>
      <h2 className='price'>{ price }</h2>
      <ul>
        <div className="points-wrap">
          {
            activePoints.map(point => (
              <div className="check">
                <Check />
                <li>{ point }</li>
              </div>
            ))
          }
          {
            inactivePoints &&
              inactivePoints.map(point => (
                <li className='inactive'>{ point }</li>
              ))
          }
        </div>
      </ul>
      <Button btnStyle='dark-outline'>
        Request Access 
      </Button>
    </div>
  )
}
export default PricingCard