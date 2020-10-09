import React from 'react'
import './card.scss'
import { ReactComponent as Finances} from '../../assets/icon-personal-finances.svg'

const Card = () => {
  return (
    <div className='card'>
      <div className="icon-bg">
        <div className="icon">
          <Finances />
        </div>
      </div>
      <h3 className="small">Personal Finances</h3>
      <p className='italic'>Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account.</p>
    </div>
  )
}
export default Card