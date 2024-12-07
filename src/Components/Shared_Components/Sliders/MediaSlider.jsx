import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import NavigationSlider from './Components/NavigationSlider';
import MediaCard from '../Media/MediaCards/MediaCard';
import 'swiper/css';

function MediaSlider({ mediaList }) {

    const swiperRef = React.useRef(null);

    return (
        <div className='media-slider space-y-4'>
            {/* Swiper */}
            <Swiper
                spaceBetween={15}
                breakpoints={{
                    640: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 3
                    },
                    1200: {
                        slidesPerView: 4
                    }
                }}
                onSwiper={(swiper) => swiperRef.current = swiper}
            >
                {mediaList.map((mediaListItem, index) => <SwiperSlide key={index}>
                    <MediaCard index={index} mediaData={mediaListItem} />
                </SwiperSlide>)}
            </Swiper>
            {/* Navigation */}
            <NavigationSlider swiperRef={swiperRef} />
        </div>
    )
}

export default MediaSlider;