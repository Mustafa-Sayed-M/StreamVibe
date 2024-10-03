import React from 'react';
import Contact from '../../Components/Support_C/Contact';
import Faq from '../../Components/Shared_C/Faq/Faq';
import StartFreeTrial from '../../Components/Shared_C/StartFreeTrial';

function Support() {
    return (
        <div className='support pt-20 pb-10'>
            <div className='container space-y-10 py-10'>
                {/* Contact */}
                <Contact />
                {/* Faq */}
                <Faq />
                {/* Start Free Trial */}
                <StartFreeTrial />
            </div>
        </div>
    )
}

export default Support;