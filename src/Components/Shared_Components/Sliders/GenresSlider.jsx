import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link, useSearchParams } from 'react-router-dom';
import 'swiper/css';

function GenresSlider({ page, genresList }) {

    const [searchParams] = useSearchParams();

    const swiperRef = React.useRef(null);

    const handlePreviousSlide = () => {
        swiperRef.current.slidePrev();
    };

    const handleNextSlide = () => {
        swiperRef.current.slideNext();
    };

    const buttonStyle = `max-sm:hidden bg-black-color-10 border border-black-color-15 rounded-full w-10 h-10 leading-10 text-center sm:hover:bg-black-color-12 transition`;

    return (
        <div className='genres-slider flex items-center gap-2'>
            {/* Prev */}
            <button
                type='button'
                aria-label='Previous Trigger'
                title='Previous Slide'
                onClick={handlePreviousSlide}
                className={`${buttonStyle}`}
            >
                <i className="fa-solid fa-angle-left fa-fw"></i>
            </button>
            <Swiper
                spaceBetween={15}
                breakpoints={{
                    100: {
                        slidesPerView: 2
                    },
                    400: {
                        slidesPerView: 3
                    },
                    768: {
                        slidesPerView: 4
                    },
                    1024: {
                        slidesPerView: 5
                    },
                    1440: {
                        slidesPerView: 6
                    },
                }}
                onSwiper={(swiper) => swiperRef.current = swiper}
                className='w-full'
            >
                {genresList.map((genre, index) => <SwiperSlide key={index}>
                    <Link
                        to={`/${page}?genre=${genre.id}`}
                        className={`block text-center bg-red-color-45 p-3 rounded-full text-nowrap line-clamp-1 font-medium ${+searchParams.get('genre') === genre.id ? "bg-white text-red-color-45" : "sm:hover:bg-white sm:hover:text-red-color-45"} transition`}
                    >
                        {genre.name}
                    </Link>
                </SwiperSlide>)}
            </Swiper>
            {/* Next */}
            <button
                type='button'
                aria-label='Next Trigger'
                title='Next Slide'
                onClick={handleNextSlide}
                className={`${buttonStyle}`}
            >
                <i className="fa-solid fa-angle-right fa-fw"></i>
            </button>
        </div>
    )
}

export default GenresSlider;