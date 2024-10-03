import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import MediaCard from './Cards/MediaCard';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function MediaSlider({ mediaType, titleSlider, mediaList }) {

    const swiperRef = useRef(null);

    return (
        <div className='media-slider' id={mediaType + "-" + titleSlider.toLocaleLowerCase().split(" ").join('-')}>
            <div className='head flex items-center justify-between mb-3'>
                {/* Title */}
                <h2 className='text-xl font-semibold'>{titleSlider}</h2>
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
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={10}
                breakpoints={{
                    0: {
                        slidesPerView: 1.5,
                        slidesPerGroup: 1,
                        pagination: false
                    },
                    768: {
                        slidesPerView: 3,
                        slidesPerGroup: 3
                    },
                    1024: {
                        slidesPerView: 4,
                        slidesPerGroup: 4
                    },
                }}
                pagination={{
                    clickable: true,
                    type: 'bullets',
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className={`media-slider slider-media`}
            >
                {
                    mediaList.map((media, index) => <SwiperSlide key={index}>
                        <MediaCard mediaData={media} />
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    )
}

export default MediaSlider;