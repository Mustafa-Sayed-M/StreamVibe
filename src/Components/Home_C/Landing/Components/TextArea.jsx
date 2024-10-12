import React from 'react';
import { APP_NAME } from '../../../../Utils/constants';
import { Link } from 'react-router-dom';

function TextArea() {
    return (
        <div className='text-area text-center'>
            <h1
                data-aos="fade-up"
                className='text-xl md:text-3xl font-bold mb-3'
            >
                The Best Streaming Experience
            </h1>
            <p
                data-aos="fade-up"
                data-aos-delay="100"
                className='text-gray-400 md:max-w-[768px] mb-10'
            >
                {APP_NAME} is the best streaming experience for watching your favorite movies and shows on demand,
                anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters,
                classic movies, popular TV shows, and more. You can also create your own Watch Lists, so you can easily find the
                content you want to watch.
            </p>
            {/* Link Watch */}
            <Link
                data-aos="fade-up"
                data-aos-delay="200"
                to={'/subscriptions'}
                className='text-center py-3 px-5 bg-primary-color rounded-md font-medium block w-fit mx-auto'
            >
                <i className='fa-solid fa-play me-2'></i>
                <span>Start Watch Now</span>
            </Link>
        </div>
    )
}

export default TextArea;