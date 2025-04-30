import React from 'react';

function ContactHero() {
    return (
        <div className='contact-hero'>
            <h2 className='mb-2 text-4xl font-bold'>Welcome to our support page!</h2>
            <p>We're here to help you with any problems you may be having with our product.</p>
            <div className='contact-hero-image border-2 border-black-color-15 rounded-xl overflow-hidden mt-5'>
                <img
                    src='/assets/images/contact-hero.png'
                    alt='Contact Hero Image'
                />
            </div>
        </div>
    )
}

export default ContactHero;