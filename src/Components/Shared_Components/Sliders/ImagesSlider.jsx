import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import NavigationSlider from './Components/NavigationSlider';
import 'swiper/css';
import LazyImage from '../LazyImage';

function ImagesSlider({ imagesList }) {

    const swiperRef = React.useRef(null);

    return (
        <div className='images-slider space-y-4'>
            {/* Swiper */}
            <Swiper
                spaceBetween={15}
                breakpoints={{
                    0: {
                        slidesPerView: 1.5
                    },
                    640: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 1.5
                    },
                    1024: {
                        slidesPerView: 2
                    },
                    1200: {
                        slidesPerView: 3
                    },
                    1440: {
                        slidesPerView: 4
                    },
                }}
                onSwiper={(swiper) => swiperRef.current = swiper}
            >
                {imagesList.map((imageListItem, index) => <SwiperSlide key={index}>
                    {/* Images Container */}
                    <div className='images-container overflow-hidden rounded-md'>
                        <LazyImage
                            image={{
                                className: 'rounded-md',
                                src: `https://image.tmdb.org/t/p/original/${imageListItem.file_path}`,
                                alt: imageListItem.width
                            }}
                        />
                    </div>
                </SwiperSlide>)}
            </Swiper>
            {/* Navigation */}
            <NavigationSlider swiperRef={swiperRef} />
        </div>
    )
}

export default ImagesSlider;