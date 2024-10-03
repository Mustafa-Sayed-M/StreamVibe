import React from 'react';
import landingHero from '../../../../Assets/HomeLanding/LandingHero.png';

function Hero() {
    return (
        <div className='hero-area' data-aos="zoom-out">
            <img
                src={landingHero}
                alt='Landing Hero'
                className='mx-auto w-[150px] md:w-[250px]'
            />
        </div>
    )
}

export default Hero;