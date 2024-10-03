import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from '../../MoviesAndShows_C/Cards/ReviewCard';
import 'swiper/css';

function MediaReviews({ reviewsList }) {

    const swiperRef = useRef(null);

    return (
        <div className='media-reviews bg-card-color p-3 rounded-md col-span-2' data-aos="fade-up">
            {/* Head */}
            <div className='head flex items-center justify-between mb-3'>
                {/* Title */}
                <h2 className='text-xl font-semibold'>Reviews</h2>
                {/* Navigation */}
                <div className='swiper-navigation flex items-center gap-3 bg-black-color p-2 rounded-md'>
                    {/* Prev */}
                    <button type='button' onClick={() => swiperRef.current?.slidePrev()} className='swiper-prev bg-card-color p-2 rounded-md'>
                        <i className="fa-solid fa-arrow-left fa-fw"></i>
                    </button>
                    {/* Next */}
                    <button type='button' onClick={() => swiperRef.current?.slideNext()} className='swiper-next bg-card-color p-2 rounded-md'>
                        <i className="fa-solid fa-arrow-right fa-fw"></i>
                    </button>
                </div>
            </div>
            {/* Slider */}
            <Swiper
                spaceBetween={10}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                    },
                    768: {
                        slidesPerView: 2,
                        slidesPerGroup: 3
                    },
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className={`media-images-slider slider-media`}
            >
                {
                    reviewsList.map((review, index) => <SwiperSlide key={index} style={{ height: "auto" }}>
                        <ReviewCard reviewData={review} />
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    )
}

export default MediaReviews;