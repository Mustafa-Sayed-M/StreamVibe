import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchImages, imageApi } from '../../../../Utils/api';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useImagePreview } from '../../../../Context/ImagePreviewContext';
import SliderControllers from '../../Components/MediaSlider/Components/SliderControllers';

function Images({ mediaType, mediaId }) {

    const [isShowImages, setIsShowImages] = React.useState(false);

    const { data: imagesData, isLoading: imagesIsLoading } = useQuery({
        queryKey: [`${mediaType}_images_${mediaId}`],
        queryFn: () => fetchImages(mediaType, mediaId),
        refetchOnWindowFocus: false,
    });

    const swiperRef = React.useRef(null);

    const { setImageData } = useImagePreview();

    const handleClick = (src) => {
        setImageData({ src });
    };

    React.useEffect(() => {
        if (imagesData) {
            if (imagesData.backdrops.length > 0) {
                setIsShowImages(true);
            }
        }
    }, [imagesData]);

    if (!isShowImages) return;

    return (
        <div className='media-images lg:col-span-2'>
            <Swiper
                spaceBetween={15}
                slidesPerView={3}
                navigation={{
                    prevEl: '.images_prev_btn',
                    nextEl: '.images_next_btn',
                }
                }
                pagination={{
                    el: '.images_pagination',
                    dynamicBullets: true,
                }}
                modules={[Pagination, Navigation]}
                breakpoints={{
                    0: {
                        slidesPerView: 1.2
                    },
                    420: {
                        slidesPerView: 1.6
                    },
                    575: {
                        slidesPerView: 2.3
                    },
                    1024: {
                        slidesPerView: 3
                    }
                }}
                className='rounded-md'
                onSwiper={swiper => swiperRef.current = swiper}
            >
                {
                    imagesIsLoading ? (
                        Array.from({ length: 5 }).map((_, index) => (<SwiperSlide key={index} className='aspect-video rounded-md bg-black-color-8'>
                            Loading...
                        </SwiperSlide>))
                    ) : (
                        imagesData.backdrops.map((backdrop, index) => (<SwiperSlide
                            key={index}
                            onClick={() => handleClick(backdrop.file_path)}
                            className='aspect-video rounded-md bg-black-color-8 cursor-pointer'
                        >
                            <LazyLoadImage
                                src={`${imageApi.baseEndpoint}${imageApi.backdropUrl}${backdrop.file_path}`}
                                alt={``}
                                effect='blur'
                                className='rounded-md sm:hover:'
                            />
                        </SwiperSlide>))
                    )
                }
            </Swiper>
            {/* Slider Controllers */}
            <SliderControllers
                swiperRef={swiperRef}
                paginationClassname={'images_pagination'}
                prevClassname={'images_prev_btn'}
                nextClassname={'images_next_btn'}
            />
        </div>
    )
}

export default Images;