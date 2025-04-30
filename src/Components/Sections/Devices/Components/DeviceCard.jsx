import React from 'react';

function DeviceCard({ deviceData: { icon, name, description } }) {
    return (
        <div className='device-card p-5 bg-black-color-10 border border-black-color-15 rounded-md'>
            {/* Header */}
            <div className='header flex items-center gap-3 mb-3'>
                {/* Icon */}
                <div className='icon w-12 h-12 flex items-center justify-center rounded-md bg-black-color-8 border border-black-color-12'>
                    <img
                        src={icon}
                        alt={'...'}
                        width={30}
                        height={30}
                    />
                </div>
                {/* Name */}
                <h3 className='font-semibold text-xl flex-1'>{name}</h3>
            </div>
            {/* Description */}
            <p>{description}</p>
        </div>
    )
}

export default DeviceCard;