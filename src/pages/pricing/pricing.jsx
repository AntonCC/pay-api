import React from 'react'
import './pricing.scss'
import { cardInfo } from './pricingInfo'
import PricingCards from '../../components/pricing-cards/pricing-cards'

const Pricing = () => {
  return (
    <div className='pricing'>
      <PricingCards cardInfo={cardInfo} />
    </div>
  )
}
export default Pricing