import React from 'react';
import Landing from '../../Components/Home_C/Landing/Landing';
import Faq from '../../Components/Shared_C/Faq/Faq';
import ChoosePlan from '../../Components/Shared_C/ChoosePlan/ChoosePlan';
import StartFreeTrial from '../../Components/Shared_C/StartFreeTrial';

function Home() {
    return (
        <div className='home-page pb-10'>
            {/* Landing */}
            <Landing />
            {/* Container */}
            <div
                style={{
                    boxShadow: "0 -200px 350px #141414"
                }}
                className='container py-5 space-y-5'
            >
                {/* Faq */}
                <Faq />
                {/* Choose Plan */}
                <ChoosePlan />
                {/* Start Free Trial */}
                <StartFreeTrial />
            </div>
        </div>
    )
}

export default Home;