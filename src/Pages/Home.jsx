import React from 'react';
import Header from '../Components/Header/Header';
import Devices from '../Components/Sections/Devices/Devices';
import Faqs from '../Components/Sections/Faqs/Faqs';
import Plans from '../Components/Sections/Plans/Plans';

function Home() {
  return (
    <div className='home-page min-h-screen'>
      {/* Header */}
      <Header />
      {/* Devices */}
      <Devices />
      {/* Faqs */}
      <Faqs />
      {/* Plans */}
      <Plans />
    </div>
  )
}

export default Home;