import React from 'react'
import HomeFlex from './HomeFlex'
import Biography from './Biography'
import Achievements from './Achievements'
import Footer from './Footer'
import AllRightsReserved from './AllRightsReserved'

const HomePage = () => {
  return (
    <>
        <div className='mt-24'></div>
        <HomeFlex/>
      <Biography/>
      <Achievements/>
      <Footer quote="'We try to work on things which billions of people will use every day'"/>
      <AllRightsReserved/>
    </>
  )
}

export default HomePage