import React from 'react';
import Contact from '../Components/Support_Components/Contact/Contact';
import Faqs from '../Components/Shared_Components/Faqs/Faqs';

function Support() {
    return (
        <div className='support-page'>
            <div className='container pt-7'>
                {/* Contact */}
                <Contact />
                {/* Faqs */}
                <Faqs />
            </div>
        </div>
    )
}

export default Support;