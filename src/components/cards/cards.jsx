import React from 'react'
import './cards.scss'
import uniqid from 'uniqid'
import Card from '../card/card'

const Cards = ({ cardInfo }) => {
  return (
    <div className='cards'>
      <div className="container">
        {
          cardInfo.map(info => (
            <Card key={uniqid()} {...info} />
          ))
        }
      </div>
    </div>
  )
}
export default Cards