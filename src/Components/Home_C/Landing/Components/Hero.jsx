import React from 'react';

function Hero() {
    return (
        <div className='hero-area' data-aos="zoom-out">
            <img
                src={`${process.env.PUBLIC_URL}/assets/home/landingHero.png`}
                alt='Landing Hero'
                className='mx-auto w-[150px] md:w-[250px]'
            />
        </div>
    )
}

export default Hero;