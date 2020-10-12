import React from 'react'
import './pricing-cards.scss'
import PricingCard from '../pricing-card/pricing-card'

const PricingCards = () => {
  return (
    <div className='pricing-cards'>
      <div className="container">
        <h2 className='title'>Pricing</h2>
        <div className="card-wrap">
          <PricingCard />
          <PricingCard />
          <PricingCard />
        </div>
      </div>
    </div>
  )
}
export default PricingCards