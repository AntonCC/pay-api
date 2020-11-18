import React from 'react'
import './home.scss'
import { imgBannerInfo, cardInfo } from './homeInfo'
import Landing from '../../components/landing/landing'
import BannerDark from '../../components/banner-dark/banner-dark'
import ImgBanner from '../../components/img-banner/img-banner'
import Cards from '../../components/cards/cards'
import { ReactComponent as Circle } from '../../assets/bg-circle.svg'

const Home = () => {
  return (
    <div className='home'>
      <Landing />
      <BannerDark />
      {
        imgBannerInfo.map(info => (
          <ImgBanner {...info} />
        ))
      }
      <Cards cardInfo={cardInfo} />
    </div>
  )
}
export default Home