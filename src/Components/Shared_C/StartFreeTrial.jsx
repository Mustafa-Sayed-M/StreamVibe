import React from 'react';
import { Link } from 'react-router-dom';
import { APP_NAME } from '../../Utils/constants';
import StartFreeTrialImage from '../../Assets/StartFreeTrial.png';

function StartFreeTrial() {
    return (
        <section
            style={{
                backgroundImage: `url(${StartFreeTrialImage})`,
                backgroundSize: "cover",
            }}
            data-aos="fade-down-left"
            className='start-free-trail py-10 min-h-[250px] rounded-md relative'
        >
            <div
                style={{
                    background: 'linear-gradient(to left, rgba(229, 0, 0, 0.3), black)',
                }}
                className='content px-5 absolute left-0 top-0 rounded-md w-full h-full flex max-sm:flex-col items-center justify-center sm:justify-between gap-5'
            >
                <div className='tex-box space-y-2 max-sm:text-center'>
                    <h1 className='font-bold text-xl md:text-2xl'>Start your free trial today!</h1>
                    <p className='text-gray-400'>This is a clear and concise call to action that encourages users to sign up for a free trial of {APP_NAME}.</p>
                </div>
                {/* Link */}
                <Link
                    to={'/subscriptions'}
                    className='block py-2 px-5 rounded-md bg-primary-color text-nowrap'
                >
                    Start Free Trial
                </Link>
            </div>
        </section>
    )
}

export default StartFreeTrial;