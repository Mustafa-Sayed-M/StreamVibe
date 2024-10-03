import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MoviesContainer from '../../Components/MoviesAndShows_C/MediaContainers/MoviesContainer';
import TvContainer from '../../Components/MoviesAndShows_C/MediaContainers/TvContainer';
import { GET_MOVIES_API, GET_MOVIES_GENRES_API, GET_MOVIES_TOP_RATED_API, GET_MOVIES_TRENDING_NOW_API, setMoviesDataFetched } from '../../Store/slices/moviesSlice';
import { GET_TV_API, GET_TV_GENRES_API, GET_TV_TOP_RATED_API, GET_TV_TRENDING_NOW_API, setTvDataFetched } from '../../Store/slices/tvSlice';
import StartFreeTrial from '../../Components/Shared_C/StartFreeTrial';
import NavContainer from '../../Components/MoviesAndShows_C/MediaContainers/NavContainer';

function MoviesAndShows() {

    const dispatch = useDispatch();

    const moviesStore = useSelector(state => state.movies);
    const tvStore = useSelector(state => state.tv);

    useEffect(() => { // Movies Data:
        const fetchShowsData = async () => {
            await Promise.all([
                dispatch(GET_TV_API()),
                dispatch(GET_TV_GENRES_API()),
                dispatch(GET_TV_TOP_RATED_API()),
                dispatch(GET_TV_TRENDING_NOW_API()),
                dispatch(setTvDataFetched()),
            ]);
        };

        if (!tvStore.dataFetched) fetchShowsData();
    }, [dispatch, moviesStore.dataFetched, tvStore.dataFetched]);

    useEffect(() => {// Tv Data:
        const fetchMoviesData = async () => {
            await Promise.all([
                dispatch(GET_MOVIES_API()),
                dispatch(GET_MOVIES_GENRES_API()),
                dispatch(GET_MOVIES_TOP_RATED_API()),
                dispatch(GET_MOVIES_TRENDING_NOW_API()),
                dispatch(setMoviesDataFetched()),
            ]);
        };
        if (!moviesStore.dataFetched) fetchMoviesData();
    }, [dispatch, moviesStore.dataFetched]);

    const [activeContainer, setActiveContainer] = useState("Movies");

    return (
        <div className='movies-and-shows-page pt-20 pb-10'>
            <div className='container space-y-5'>
                {/* Main Content */}
                <main className='space-y-10'>
                    {/* Nav Containers */}
                    <NavContainer
                        activeContainer={activeContainer}
                        setActiveContainer={setActiveContainer}
                    />
                    {/* Movies Container */}
                    <MoviesContainer activeContainer={activeContainer} />
                    {/* Tv Container */}
                    <TvContainer activeContainer={activeContainer} />
                </main>
                {/* Start Free Trial */}
                <StartFreeTrial />
            </div>
        </div>
    )
}

export default MoviesAndShows;