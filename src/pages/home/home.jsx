import React from 'react'
import './home.scss'
import { imgBannerInfo } from './homeInfo'
import Landing from '../../components/landing/landing'
import BannerDark from '../../components/banner-dark/banner-dark'
import ImgBanner from '../../components/img-banner/img-banner'
import Cards from '../../components/cards/cards'
import PreFooter from '../../components/pre-footer/pre-footer'

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
      <Cards />
      <PreFooter />
    </div>
  )
}
export default Home