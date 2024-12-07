import React from 'react';
import devicesData from '../../../Data/devices.json';
import DevicesCard from './Components/DevicesCard';

function Devices() {
    return (
        <section className='devices py-7' id='devices'>
            {/* Header */}
            <div className='header flex max-md:flex-col items-center gap-5 mb-7'>
                {/* Text Box */}
                <div className='text-box space-y-2 w-full'>
                    <h1 className='text-3xl font-semibold'>We Provide you streaming experience across various devices.</h1>
                    <p>With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.</p>
                </div>
            </div>
            {/* Content Grid */}
            <div className='content-grid grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {devicesData.map((device, index) => <DevicesCard
                    key={index}
                    deviceData={device}
                />)}
            </div>
        </section>
    )
}

export default Devices;