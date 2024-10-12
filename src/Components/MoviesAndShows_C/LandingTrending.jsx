import React from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import MediaTrending from '../Shared_C/Media/MediaTrending';
import 'swiper/css';
import 'swiper/css/navigation';

function LandingTrending() {

    const swiperRef = React.useRef(null);

    const { results } = useSelector(state => state.trending);

    return (
        <div className='landing-trending h-[600px] relative' data-aos='fade-down'>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                className='h-full'
                onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
                {
                    results.map((result, index) => (
                        <SwiperSlide key={index}>
                            {/* Trending Card */}
                            <MediaTrending mediaData={result} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            {/* Navigation */}
            <div className='navigation absolute bottom-0 z-10 w-full swiper-navigation flex items-center justify-between gap-3 py-2 px-5 rounded-md'>
                {/* Prev */}
                <button title='Previous Slide' type='button' onClick={() => swiperRef.current?.slidePrev()} className='swiper-prev bg-card-color p-2 rounded-md sm:hover:bg-card-color/50'>
                    <i className="fa-solid fa-arrow-left fa-fw"></i>
                </button>
                {/* Next */}
                <button title='Next Slide' type='button' onClick={() => swiperRef.current?.slideNext()} className='swiper-next bg-card-color p-2 rounded-md sm:hover:bg-card-color/50 transition-colors'>
                    <i className="fa-solid fa-arrow-right fa-fw"></i>
                </button>
            </div>
        </div>
    )
}

export default LandingTrending;