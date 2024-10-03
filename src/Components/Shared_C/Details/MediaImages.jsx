import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { endpoints } from '../../../Api/endpoints';
import { useDispatch } from 'react-redux';
import { handleImagePreviewStore } from '../../../Store/slices/appSlice';
import LazyImage from '../LazyImage';
import 'swiper/css';

function MediaImages({ imagesList }) {

    const swiperRef = useRef(null);

    const dispatch = useDispatch();

    const handleClick = (image) => {
        dispatch(handleImagePreviewStore({
            preview: true,
            imageData: image
        }));
    };

    return (
        <div className='media-images bg-card-color p-3 rounded-md col-span-2' data-aos="fade-up">
            {/* Head */}
            <div className='head flex items-center justify-between mb-3'>
                {/* Title */}
                <h2 className='text-xl font-semibold'>Images</h2>
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
                        slidesPerView: 1.5,
                        slidesPerGroup: 1,
                        pagination: false
                    },
                    768: {
                        slidesPerView: 2,
                        slidesPerGroup: 2
                    },
                    1024: {
                        slidesPerView: 3,
                        slidesPerGroup: 3
                    },
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className={`media-images-slider slider-media`}
            >
                {
                    imagesList.map((image, index) => <SwiperSlide key={index} onClick={() => handleClick(image)} className='cursor-pointer'>
                        <LazyImage
                            image={{
                                src: `${endpoints.IMAGE}${endpoints.BACKDROP}${image.file_path}`,
                                effect: "blur",
                                className: "rounded-md"
                            }}
                        />
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    )
}

export default MediaImages;