import React from 'react'
import CodeBlock from '../../assets/illustration-easy-to-implement.svg'
import PhoneUi from '../../assets/illustration-simple-ui.svg'
import {ReactComponent as Finances} from '../../assets/icon-personal-finances.svg'
import {ReactComponent as Banking} from '../../assets/icon-banking-and-coverage.svg'
import {ReactComponent as Payments} from '../../assets/icon-consumer-payments.svg'

export const imgBannerInfo = [
  {
    img: CodeBlock ,
    title: 'Easy to implement',
    body: 'Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.',
  },
  {
    img: PhoneUi,
    title: 'Simple UI & UX',
    body: 'Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion.',
    switchSide: true
  }
]

export const cardInfo = [
  {
    img: <Finances />,
    title: 'Personal Finances',
    body: 'Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account.'
  },
  {
    img: <Banking />,
    title: 'Banking & Coverage',
    body: 'With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.'
  },
  {
    img: <Payments />,
    title: 'Consumer Payments',
    body: 'It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.'
  }
]