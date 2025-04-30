import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { fetchReviews, imageApi } from '../../../../Utils/api';
import SliderControllers from '../../Components/MediaSlider/Components/SliderControllers';

function Reviews({ mediaType, mediaId }) {

    const [isShowReviews, setIsShowReviews] = React.useState(false);
    const swiperRef = React.useRef(null);

    const { data: reviewsData, isLoading: reviewsIsLoading } = useQuery({
        queryKey: [`${mediaType}_reviews_${mediaId}`],
        queryFn: () => fetchReviews(mediaType, mediaId),
        refetchOnWindowFocus: false
    });

    React.useEffect(() => {
        if (reviewsData) {
            if (reviewsData.results.length > 0) {
                setIsShowReviews(true);
            }
        }
    }, [reviewsData]);

    if (!isShowReviews) return;

    return (
        <div className='media-reviews lg:col-span-2'>
            <Swiper
                spaceBetween={20}
                navigation={{
                    prevEl: '.reviews_prev_btn',
                    nextEl: '.reviews_next_btn',
                }
                }
                pagination={{
                    el: '.reviews_pagination',
                    dynamicBullets: true,
                }}
                modules={[Pagination, Navigation]}
                onSwiper={swiper => swiperRef.current = swiper}
            >
                {
                    reviewsIsLoading ? (
                        Array.from({ length: 5 }).map((_, index) => (<SwiperSlide key={index} className='aspect-video rounded-md bg-black-color-8'>
                            Loading...
                        </SwiperSlide>))
                    ) : (
                        reviewsData.results.map(({
                            content,
                            author_details: { name, avatar_path, rating, username }
                        }, index) => (<SwiperSlide
                            key={index}
                        >
                            <div className='review-card p-5 rounded-md bg-black-color-6 border border-black-color-15'>
                                {/* Head */}
                                <div className='head flex items-center gap-5 mb-5'>
                                    {/* Author Avatar */}
                                    {
                                        avatar_path ? (
                                            <img
                                                src={`${imageApi.baseEndpoint}${imageApi.backdropUrl}${avatar_path}`}
                                                alt='Author Avatar'
                                                className='rounded-full w-[40px] h-[40px]'
                                            />
                                        ) : (
                                            <div className='author-avatar-second w-[40px] h-[40px] rounded-full bg-gray-600 flex items-center justify-center'>
                                                <i className="fa-solid fa-question fa-fw"></i>
                                            </div>
                                        )
                                    }
                                    {/* Author Info */}
                                    <div className='author-info'>
                                        {/* Name */}
                                        <h3 className='line-clamp-1'>{name || 'Unknown'}</h3>
                                        {/* Username */}
                                        <p>{username || 'No Username'}</p>
                                    </div>
                                    {/* Review Rating */}
                                    <div className='review-rating bg-black-color-8 border border-black-color-15 rounded-full flex items-center gap-2 py-2 px-4 ms-auto'>
                                        <ul className='flex items-center gap-0.5'>
                                            {
                                                Array.from({ length: 5 }).map((_, index) => (<li key={index} className='max-sm:hidden last-of-type:max-sm:block'>
                                                    <i className='fa-solid fa-star fa-fw text-red-color-45'></i>
                                                </li>))
                                            }
                                        </ul>
                                        <span>{rating}</span>
                                    </div>
                                </div>
                                {/* Review Content */}
                                <p className='line-clamp-4'>{content}</p>
                            </div>
                        </SwiperSlide>))
                    )
                }
            </Swiper>
            {/* Slider Controllers */}
            <SliderControllers
                swiperRef={swiperRef}
                paginationClassname={'reviews_pagination'}
                prevClassname={'reviews_prev_btn'}
                nextClassname={'reviews_next_btn'}
            />
        </div>
    )
}

export default Reviews;
