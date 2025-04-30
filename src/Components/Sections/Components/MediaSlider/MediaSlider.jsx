import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import MediaCard from '../../../Media/Components/MediaCard';
import { Pagination, Navigation } from 'swiper/modules';
import SliderControllers from './Components/SliderControllers';

function MediaSlider({ mediaList, paginationClassname, prevClassname, nextClassname }) {

    const swiperRef = React.useRef(null);

    return (
        <div className='media-slider'>
            {/* Swiper */}
            <Swiper
                navigation={{
                    prevEl: `.${prevClassname}`,
                    nextEl: `.${nextClassname}`,
                }
                }
                pagination={{
                    el: `.${paginationClassname}`,
                    dynamicBullets: true,
                }}
                modules={[Pagination, Navigation]}
                spaceBetween={20}
                breakpoints={{
                    0: {
                        slidesPerView: 1.3
                    },
                    375: {
                        slidesPerView: 1.5
                    },
                    575: {
                        slidesPerView: 2.2
                    },
                    768: {
                        slidesPerView: 3.3
                    },
                    1024: {
                        slidesPerView: 4.4
                    },
                    1200: {
                        slidesPerView: 5
                    },
                    1440: {
                        slidesPerView: 6
                    },
                }}
                onSwiper={swiper => swiperRef.current = swiper}
            >
                {
                    mediaList.map((media, index) => <SwiperSlide key={index}>
                        <MediaCard index={index} mediaData={media} />
                    </SwiperSlide>)
                }
            </Swiper>
            {/* Slider Controllers */}
            <SliderControllers
                swiperRef={swiperRef}
                paginationClassname={paginationClassname}
                prevClassname={prevClassname}
                nextClassname={nextClassname}
            />
        </div>
    )
}

export default MediaSlider;