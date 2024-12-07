import React from 'react';

function ContactHero() {
    return (
        <div className='contact-hero space-y-3'>
            <h1 className='font-semibold text-xl md:text-2xl lg:text-4xl'>Welcome to our support page!</h1>
            <p>We're here to help you with any problems you may be having with our product.</p>
            <img
                src={`${process.env.PUBLIC_URL}/assets/support/contact-hero.png`}
                alt='Contact Hero'
                className='rounded-md'
            />
        </div>
    )
}

export default ContactHero;