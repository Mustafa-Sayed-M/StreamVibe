import React from 'react';
import { Link } from 'react-router-dom';

function StartToday() {
    return (
        <div className='start-today'>
            <div className='container py-10'>
                <div className='content-wrapper min-h-[200px] rounded-xl overflow-hidden' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/start-today.png)`, backgroundSize: 'cover' }}>
                    <div className='p-5 min-h-[200px] flex max-sm:flex-col items-center gap-5 bg-gradient-to-r from-[#0F0F0F] via-[#140F0F]/90 to-[#E50000]/40'>
                        {/* Text */}
                        <div className='w-full space-y-2 max-sm:text-center'>
                            <h1 className='font-medium text-3xl'>Start your free trial today!</h1>
                            <p>This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</p>
                        </div>
                        {/* Button */}
                        <Link
                            to={'/subscriptions'}
                            title='Start a Free Trail'
                            className='bg-red-color-45 py-2 px-4 rounded-md text-nowrap'
                        >
                            Start a Free Trail
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StartToday;