import React from 'react'
import './pricing-card.scss'
import Button from '../button/button'
import {ReactComponent as Check} from '../../assets/icon-check.svg'

const PricingCard = () => {
  return (
    <div className='pricing-card'>
      <h3>Free Plan</h3>
      <p className='italic'>Build and test using our core set of products with up to 100 API requests </p>
      <h2>$0.00</h2>
      <ul>
        <div className="check">
          <Check />
          <li>Transactions</li>
        </div>
        <div className="check">
          <Check />
          <li>Auth</li>
        </div>
        <div className="check">
          <Check />
          <li>Identity</li>
        </div>
        <li className='inactive'>Investments</li>
        <li className='inactive'>Assets</li>
        <li className='inactive'>Liabilities</li>
        <li className='inactive'>Income</li>
      </ul>
      <Button btnStyle='dark-outline'>
        Request Access 
      </Button>
    </div>
  )
}
export default PricingCard