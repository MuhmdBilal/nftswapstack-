import React, { useEffect } from 'react'
import Hero from './Hero'
import Team from './Team'
import Partners from './Partners'
import RoadMap from './RoadMap'
import Tokenomics from './Tokenomics'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'

const Home = () => {
  const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);
    
  return (
    <div className='homeFontNormal'>
      <Hero/>
      <Team/>
      <RoadMap/>
      <Tokenomics/>
      <Partners/>
    </div>
  )
}

export default Home