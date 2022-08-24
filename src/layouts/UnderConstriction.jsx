import React from 'react'
import CallToAction from '../components/Hero'
import HomesiteLayout from './HomesiteLayout'

export default function UnderConstriction() {
  return (
    <HomesiteLayout>
      <CallToAction buttonText='404'/>
      <h4>Not fund or under contruction`s page!</h4>
      <a href="/#"  >Back</a>
    </HomesiteLayout>
  )
}
