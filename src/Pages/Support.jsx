import React from 'react';
import ContactForm from '../Components/Sections/ContactForm/ContactForm';
import Faqs from '../Components/Sections/Faqs/Faqs';

function Support() {
    return (
        <div className='support-page min-h-screen'>
            {/* Contact Form */}
            <ContactForm />
            {/* Faqs */}
            <Faqs />
        </div>
    )
}

export default Support;