import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <div
            className='landing max-md:min-h-[700px] md:h-[700px]'
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/landingHome/landing-bg.png)`,
                backgroundSize: 'cover'
            }}
        >
            {/* Content Container */}
            <div className='content-container h-full bg-gradient-to-b from-black/20 to-black flex items-end py-16'>
                <div className='container space-y-5'>
                    {/* Icon Hero */}
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/landingHome/landing-hero.png`}
                        alt='Icon Hero'
                        className='mx-auto max-w-[250px]'
                    />
                    {/* Text Box */}
                    <div className='text-box text-center space-y-2'>
                        {/* Title */}
                        <h1 className='font-semibold text-3xl'>The Best Streaming Experience</h1>
                        {/* Description */}
                        <p>StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>
                    </div>
                    {/* Link Start Watching Now */}
                    <Link
                        to={`/movies`}
                        className='block w-fit mx-auto py-2 px-4 bg-red-color-45 rounded-md sm:hover:bg-white sm:hover:text-red-color-45 font-medium transition'
                    >
                        <i className="fa-solid fa-play me-2"></i>
                        <span>Start Watching Now</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Landing;