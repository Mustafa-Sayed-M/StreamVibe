import React from 'react';
import { Link } from 'react-router-dom';
import LinkComponent from '../Atoms/LinkComponent';

function Header() {
    return (
        <header className='relative h-[calc(100dvh-200px)] overflow-hidden'>
            <img
                src='/assets/images/header-bg.webp'
                alt='Header background'
                className='w-full h-full object-cover'
                width={1920}
                height={1080}
                fetchPriority="high"
            />
            {/* Fade Out Top */}
            <div className='w-full h-[200px] absolute top-0 bg-gradient-to-b from-black to-transparent z-10'></div>
            {/* Header Content */}
            <div className='header-content h-full w-full bg-black/40 absolute left-0 top-0 z-20 pb-10'>
                <div className='container flex flex-col gap-5 justify-end h-full'>
                    {/* Header Hero */}
                    <img
                        src='/assets/images/header-hero.webp'
                        alt='Header Hero'
                        width={300}
                        height={300}
                        className='mx-auto'
                    />
                    {/* Header Text Content */}
                    <div className='header-text-content text-center'>
                        <h1 className='font-bold text-3xl mb-3'>The Best Streaming Experience</h1>
                        <p className='max-md:line-clamp-3 md:max-w-[750px] mx-auto mb-5'>StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere.
                            With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows,
                            and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>
                        {/* Watching Now */}
                        <LinkComponent path={'/'} className={'mx-auto'}>
                            <i className='fa-solid fa-play me-2 fa-fw'></i>
                            <span>Start Watching Now</span>
                        </LinkComponent>
                    </div>
                </div>
            </div>
            {/* Fade Out Bottom */}
            <div className='w-full h-[200px] absolute bottom-0 bg-gradient-to-t from-black to-transparent z-10'></div>
        </header>
    );
}

export default Header;