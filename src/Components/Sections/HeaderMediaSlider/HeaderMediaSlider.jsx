import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { fetchTrending } from '../../../Utils/api';
import { useLocation } from 'react-router-dom';
import HeaderMediaContent from '../Components/HeaderMediaContent';
import SliderControllers from '../Components/MediaSlider/Components/SliderControllers';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

function HeaderMediaSlider({ mediaType }) {

    const { data, isLoading } = useQuery({
        queryKey: [`${mediaType}_trending`],
        queryFn: () => fetchTrending(mediaType),
        refetchOnWindowFocus: false
    });

    const { pathname } = useLocation();
    const swiperRef = React.useRef(null);
    const pageKey = React.useMemo(() => `${pathname.slice(1)}-ActiveIndex`, [pathname]);
    const [initialIndex] = React.useState(() => +(sessionStorage.getItem(pageKey) || 0));

    // Handle Slide Change:
    const handleSlideChange = React.useCallback(() => {
        if (swiperRef.current && swiperRef.current.activeIndex !== undefined) {
            const activeIndex = swiperRef.current.activeIndex;
            sessionStorage.setItem(pageKey, activeIndex);
        }
    }, [pageKey]);

    return (
        <section className='header-media-slider py-7' id='headerMediaSlider'>
            <div className='container'>
                {/* Slider */}
                {
                    isLoading ? (
                        <div className='aspect-video'>Loading...</div>
                    ) : (
                        <Swiper
                            key={initialIndex}
                            pagination={{
                                el: '.custom-swiper-pagination',
                                dynamicBullets: true,
                            }}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                            }}
                            modules={[EffectCoverflow, Pagination]}
                            onSwiper={swiper => swiperRef.current = swiper}
                            grabCursor={true}
                            spaceBetween={20}
                            effect={'coverflow'}
                            initialSlide={initialIndex}
                            onSlideChange={handleSlideChange}
                            className="mySwiper bg-black-color-6"
                        >
                            {
                                data.results.map((media, index) => <SwiperSlide
                                    key={index}
                                    className='aspect-video overflow-hidden relative shadow-md'
                                >
                                    {/* Header Media Content */}
                                    <HeaderMediaContent mainData={media || {}} />
                                </SwiperSlide>)
                            }
                        </Swiper>
                    )
                }
                {/* Slider Controllers */}
                <SliderControllers
                    swiperRef={swiperRef}
                />
            </div>
        </section>
    )
}

export default HeaderMediaSlider;