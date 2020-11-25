import React from 'react'
import './home.scss'
import uniqid from 'uniqid'
import { imgBannerInfo, cardInfo } from './homeInfo'
import Landing from '../../components/landing/landing'
import BannerDark from '../../components/banner-dark/banner-dark'
import ImgBanner from '../../components/img-banner/img-banner'
import Cards from '../../components/cards/cards'

const Home = () => {
  return (
    <div className='home'>
      <Landing />
      <BannerDark />
      {
        imgBannerInfo.map(info => (
          <ImgBanner key={uniqid()} {...info} />
        ))
      }
      <Cards cardInfo={cardInfo} />
    </div>
  )
}
export default Home