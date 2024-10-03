import React from 'react';
import landingImage from '../../../Assets/HomeLanding/Landing.png';
import Hero from './Components/Hero';
import TextArea from './Components/TextArea';

function Landing() {
    return (
        <div
            style={{
                backgroundImage: `url(${landingImage})`,
                backgroundSize: "cover",
                // boxShadow: "0 0 350px inset #141414"
            }}
            className='landing md:h-[90vh]'
        >
            {/* Overlay */}
            <div className='overlay h-full bg-black/65 py-20'>
                {/* Container */}
                <div className='container h-full flex items-end justify-center'>
                    {/* Content Container */}
                    <div className='content-container space-y-7'>
                        {/* Hero Area */}
                        <Hero />
                        {/* Text Area */}
                        <TextArea />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;