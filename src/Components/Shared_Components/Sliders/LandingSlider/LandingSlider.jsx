import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative } from 'swiper/modules';
import ActionsSlide from './Components/ActionsSlide';
import LazyImage from '../../LazyImage';
import 'swiper/css/effect-creative';
import 'swiper/css';

function LandingSlider({ mediaList }) {
    return (
        <div className='landing-slider' id='trending'>
            <Swiper
                className='h-full'
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                    pauseOnMouseEnter: true,
                }}
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                }}
                modules={[Autoplay, EffectCreative]}
            >
                {mediaList.map((mediaData, index) => {

                    const {
                        backdrop_path,
                        overview,
                        title,
                        name
                    } = mediaData;

                    return (
                        <SwiperSlide
                            key={index}
                            className='rounded-md relative'
                        >
                            {/* Backdrop Image */}
                            <LazyImage
                                image={{
                                    src: `https://image.tmdb.org/t/p/original${backdrop_path}`,
                                    alt: title || name
                                }}
                            />
                            {/* Content Wrapper */}
                            <div className='content-wrapper bg-black/40 h-full flex flex-col justify-end px-4 py-7 space-y-3 absolute top-0 left-0 z-10 w-full'>
                                {/* Text Box */}
                                <div className='text-box space-y-2 text-center w-full'>
                                    <h1 className='sm:text-xl md:text-2xl lg:text-4xl font-semibold'>{title || name}</h1>
                                    <p className='md:max-w-[600px] mx-auto line-clamp-3 max-sm:text-sm text-grey-color-60'>{overview}</p>
                                </div>
                                {/* Actions Slide */}
                                <ActionsSlide mediaData={mediaData} />
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default LandingSlider;