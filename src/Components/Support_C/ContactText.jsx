import React from 'react';
import LazyImage from '../Shared_C/LazyImage';

function ContactText() {

    const imageSrc = `${process.env.PUBLIC_URL}/assets/contact/contact-hero.png`;

    return (
        <div className='contact-text space-y-5'>
            <div className='text-box space-y-3'>
                <h1 className='text-2xl md:text-4xl font-bold' data-aos='fade-right'>Welcome to our support page!</h1>
                <p className='text-gray-400' data-aos='fade-right' data-aos-delay={100}>We're here to help you with any problems you may be having with our product.</p>
            </div>
            <div className='image-box border-2 border-gray-color rounded-md' data-aos='fade-up' data-aos-delay={200}>
                <LazyImage image={{ src: imageSrc, className: 'rounded-md', effect: 'blur' }} />
            </div>
        </div>
    )
}

export default ContactText;