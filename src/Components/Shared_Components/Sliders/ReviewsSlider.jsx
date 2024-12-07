import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import NavigationSlider from './Components/NavigationSlider';
import MediaReviewCard from '../Media/MediaCards/MediaReviewCard';
import 'swiper/css';


function ReviewsSlider({ reviews }) {

    const swiperRef = React.useRef(null);

    return (
        <div className='reviews-slider space-y-4'>
            {/* Swiper */}
            <Swiper
                spaceBetween={15}
                breakpoints={{
                    0: {
                        slidesPerView: 1
                    },
                    640: {
                        slidesPerView: 1.5
                    },
                    768: {
                        slidesPerView: 1
                    },
                    1024: {
                        slidesPerView: 1.5
                    },
                    1280: {
                        slidesPerView: 2
                    }
                }}
                onSwiper={(swiper) => swiperRef.current = swiper}
            >
                {reviews.map((reviewData, index) => <SwiperSlide key={index}>
                    <MediaReviewCard reviewData={reviewData} />
                </SwiperSlide>)}
            </Swiper>
            {/* Navigation */}
            <NavigationSlider swiperRef={swiperRef} />
        </div>
    )
}

export default ReviewsSlider;