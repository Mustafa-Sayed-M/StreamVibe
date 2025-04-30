import React from 'react';
import HeadSection from '../Components/HeadSection';
import devicesData from '../../../Data/devices.json';
import DeviceCard from './Components/DeviceCard';

function Devices() {
    return (
        <section className='devices-section py-7' id='devices'>
            <div className='container'>
                {/* Head Section */}
                <HeadSection
                    title={`We Provide you streaming experience across various devices.`}
                    description={`With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.`}
                />
                {/* Devices Cards */}
                <div className='devices-cards grid md:grid-cols-2 xl:grid-cols-3 gap-5'>
                    {
                        devicesData.map((device, index) => <DeviceCard deviceData={device} key={index} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default Devices;