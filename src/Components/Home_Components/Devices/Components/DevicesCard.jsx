import React from 'react';

function DevicesCard({ deviceData }) {

    const {
        title,
        description,
        imageNumPath
    } = deviceData;

    return (
        <div className={`device-card flex items-start gap-3 p-5 shadow-md rounded-md border border-black-color-10 bg-gradient-to-tr from-black to-red-color-45/10`}>
            {/* Icon */}
            <div className='faq-id w-10 h-10 flex items-center justify-center text-center rounded-md bg-black-color-12 border border-black-color-15'>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/devices/${imageNumPath}.png`}
                    alt={title}
                    width={25}
                />
            </div>
            {/* Text Box */}
            <div className='text-box space-y-2 w-full'>
                <h2 className='font-semibold'>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default DevicesCard;