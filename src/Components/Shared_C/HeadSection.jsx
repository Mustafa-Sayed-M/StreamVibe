import React from 'react';

function HeadSection({ title, description, className }) {
    return (
        <div className={`section-head space-y-3 w-full mb-7 ${className}`}>
            {/* Section Title */}
            <h1
                data-aos="fade-up-left"
                className='font-semibold text-xl md:text-3xl'
            >
                {title}
            </h1>
            {/* Section Description */}
            <p
                data-aos="fade-up-left"
                data-aos-delay="100"
                className='text-gray-400'
            >
                {description}
            </p>
        </div>
    )
}

export default HeadSection;