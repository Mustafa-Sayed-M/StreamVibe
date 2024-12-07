import React from 'react';
import Devices from '../Components/Home_Components/Devices/Devices';
import Faqs from '../Components/Shared_Components/Faqs/Faqs.jsx';
import Plans from '../Components/Shared_Components/Plans/Plans.jsx';
import Landing from '../Components/Home_Components/Landing.jsx';

function Home() {
    return (
        <div className='home-page'>
            {/* Landing */}
            <Landing />
            {/* Container */}
            <div className='container pt-7'>
                {/* Devices */}
                <Devices />
                {/* Faqs */}
                <Faqs />
                {/* Plans */}
                <Plans />
            </div>
        </div>
    )
}

export default Home;