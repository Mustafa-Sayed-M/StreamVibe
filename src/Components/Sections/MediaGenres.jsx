import React from 'react';
import { fetchGenres } from '../../Utils/api';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/free-mode';

const MediaGenres = React.memo(({ mediaKey, mediaType }) => {
    const { data: genresData, isLoading: genresIsLoading } = useQuery({
        queryKey: [mediaKey],
        queryFn: () => fetchGenres(mediaType),
        refetchOnWindowFocus: false
    });

    const [searchParams, setSearchParams] = useSearchParams();

    const genresParam = searchParams.get('genres');

    const handleFilter = React.useCallback((id) => {
        const newParams = new URLSearchParams(searchParams);
        if (genresParam) {
            let newGenres = [];
            if (genresParam.split(',').includes(id.toString())) {
                newGenres = genresParam.split(',').filter(genreId => +genreId !== id);
            } else {
                newGenres = [...genresParam.split(','), id];
            }
            if (newGenres.length === 0) {
                newParams.delete('genres')
            } else {
                newParams.set('genres', newGenres.join(','))
            }
        } else {
            newParams.set('genres', id)
        }
        setSearchParams(newParams);
    }, [genresParam, searchParams, setSearchParams]);

    return (
        <section
            className='media-genres py-5 sticky top-[81px] lg:top-[111px] z-40 bg-black-color-8 border-b border-b-black-color-15'
            id='genres'
        >
            <div className='container'>
                {/* Title */}
                <h2 className='font-semibold mb-3 text-grey-color-60'>Find With Genres</h2>
                {/* Slider Wrapper */}
                <div className='slider-wrapper relative'>
                    {/* Slider */}
                    <Swiper
                        spaceBetween={10}
                        modules={[FreeMode]}
                        freeMode={true}
                        breakpoints={{
                            0: {
                                slidesPerView: 1.5
                            },
                            375: {
                                slidesPerView: 2.2
                            },
                            575: {
                                slidesPerView: 3.3
                            },
                            768: {
                                slidesPerView: 4.4
                            },
                            1024: {
                                slidesPerView: 5.5
                            },
                            1200: {
                                slidesPerView: 6.6
                            },
                            1440: {
                                slidesPerView: 7.7
                            },
                        }}
                    >
                        {
                            genresIsLoading ? (
                                <>
                                    {
                                        Array.from({ length: 10 }).map((_, index) => <SwiperSlide key={index}>Loading...</SwiperSlide>)
                                    }
                                </>
                            ) : (
                                <>
                                    {
                                        genresData.genres.map((genre, index) => <SwiperSlide key={index}>
                                            <button
                                                aria-label='Filter Media'
                                                title={`Filter With ${genre.name}`}
                                                onClick={() => handleFilter(genre.id)}
                                                className={`w-full rounded-md font-medium p-2 ${genresParam?.split(',').includes((genre.id || 0).toString()) ? 'bg-white text-red-color-45' : 'bg-red-color-45'} transition`}
                                            >
                                                <span className='line-clamp-1'>{genre.name}</span>
                                            </button>
                                        </SwiperSlide>)
                                    }
                                </>
                            )
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
})

export default MediaGenres;