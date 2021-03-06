import React from 'react'
import './banner-dark.scss'
import { NavLink } from 'react-router-dom'
import Button from '../button/button'
import { ReactComponent as Tesla } from '../../assets/tesla.svg'
import { ReactComponent as Microsoft } from '../../assets/microsoft.svg'
import { ReactComponent as HP } from '../../assets/hewlett-packard.svg'
import { ReactComponent as Oracle } from '../../assets/oracle.svg'
import { ReactComponent as Google } from '../../assets/google.svg'
import { ReactComponent as Nvidia } from '../../assets/nvidia.svg'
import { ReactComponent as Circle } from '../../assets/bg-circle.svg'

const BannerDark = () => {
  return (
    <div className='banner-dark'>
      <div className="container">
        <div className="banner-dark-circle">
          <Circle />
        </div>
        <div className="side-a">
          <h2 className="small">Who we work with</h2>
          <p className='italic'>Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users. </p>
          <NavLink to='/about'>
            <Button btnStyle='white-outline'>
              About Us
            </Button>
          </NavLink>
        </div>
        <div className="side-b">
          <div className="brands-container">
            <Tesla />
            <Microsoft />
            <HP />
            <Oracle />
            <Google />
            <Nvidia />
          </div>
        </div>
      </div>
    </div>
  )
}
export default BannerDark