import React from 'react'
import './home.scss'
import Landing from '../../components/landing/landing'
import BannerDark from '../../components/banner-dark/banner-dark'

const Home = () => {
  return (
    <div className='home'>
      <Landing />
      <BannerDark />
    </div>
  )
}
export default Home