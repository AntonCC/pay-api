import React from 'react'
import './cards.scss'
import Card from '../card/card'

const Cards = () => {
  return (
    <div className='cards'>
      <div className="container">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}
export default Cards