import React from 'react'
import './about.scss'
import { points, points2 } from './aboutInfo'
import PageTitle from '../../components/page-title/page-title'
import TextPoint from '../../components/text-point/text-point'
import Image from '../../components/image/image'
import Metrics from '../../components/metrics/metrics'

const About = () => {
  return (
    <div className='about'>
      <PageTitle extraPadding >
        We empower innovators by delivering access to the financial system
      </PageTitle>
      {
        points.map(info => (
          <TextPoint {...info} />
        ))
      }
      <Image />
      <Metrics />
      {
        points2.map(info => (
          <TextPoint {...info} />
        ))
      }
    </div>
  )
}
export default About