import React from 'react'
import './about.scss'
import PageTitle from '../../components/page-title/page-title'
import TextPoint from '../../components/text-point/text-point'

const About = () => {
  return (
    <div className='about'>
      <PageTitle title='We empower innovators by delivering access to the financial system'/>
      <TextPoint />
      <TextPoint />
    </div>
  )
}
export default About