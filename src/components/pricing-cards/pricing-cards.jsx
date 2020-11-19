import React from 'react'
import './pricing-cards.scss'
import PricingCard from '../pricing-card/pricing-card'
import {ReactComponent as Circle} from '../../assets/bg-circle.svg'

const PricingCards = ({ cardInfo }) => {
  return (
    <div className='pricing-cards'>
      <div className="container">
        <h2 className='title'>Pricing</h2>
        <div className="card-wrap">
          {
            cardInfo.map(info => (
              <PricingCard {...info} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
export default PricingCards