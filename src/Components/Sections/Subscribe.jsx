import React from 'react';
import { Link } from 'react-router-dom';

function Subscribe() {
    return (
        <section className='subscribe-section py-10' id='subscribe'>
            <div className='container'>
                <div
                    style={{
                        backgroundImage: `url(/assets/images/subscribe-bg.png)`,
                        backgroundSize: 'cover'
                    }}
                    className='content-container min-h-[250px] rounded-xl border border-black-color-15 overflow-hidden'
                >
                    <div className='content-wrapper bg-gradient-to-r from-[#0F0F0F] via-[#0F0F0F]/80 via-20% to-[#E50000]/40 h-full min-h-[250px] flex items-center'>
                        <div className='container flex items-center justify-between max-md:flex-col gap-5'>
                            {/* Text Content */}
                            <div className='text-content md:w-3/4'>
                                <h2 className='mb-3 font-bold text-3xl'>Start your free trial today!</h2>
                                <p className='font-medium'>This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</p>
                            </div>
                            {/* Link */}
                            <Link
                                to={``}
                                className='block max-md:w-full text-center bg-red-color-45 py-2 px-4 rounded-md transition sm:hover:bg-white sm:hover:text-red-color-45 font-medium'
                            >Start Free Trial</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribe;