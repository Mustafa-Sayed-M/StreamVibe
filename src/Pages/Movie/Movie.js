import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GET_MOVIE_API, GET_MOVIE_IMAGES_API, GET_MOVIE_REVIEWS_API } from '../../Store/slices/MovieSlice';
import MediaOverview from '../../Components/Shared_C/Details/MediaOverview';
import MediaDetails from '../../Components/Shared_C/Details/MediaDetails';
import MediaImages from '../../Components/Shared_C/Details/MediaImages';
import MediaReviews from '../../Components/Shared_C/Details/MediaReviews';
import LandingBackdrop from '../../Components/Shared_C/Details/LandingBackdrop';
import StartFreeTrial from '../../Components/Shared_C/StartFreeTrial';

function Movie() {

    const { movieData, movieImagesData, movieReviewsData } = useSelector(state => state.movie);

    const { movieId } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);

    useEffect(() => {

        const fetchData = async () => {
            await Promise.all([
                dispatch(GET_MOVIE_API(movieId)),
                dispatch(GET_MOVIE_IMAGES_API(movieId)),
                dispatch(GET_MOVIE_REVIEWS_API(movieId)),
            ])
        };

        if (movieData.data.id !== +movieId) fetchData();
    }, [dispatch, movieData.data.id, movieId]);

    return (
        <div className={`movie-${movieId} pt-20 pb-10`}>
            {/* Landing Backdrop */}
            <LandingBackdrop mediaData={movieData.data} />
            {/* Container */}
            <div
                style={{
                    boxShadow: "0 -200px 400px #141414"
                }}
                className='container space-y-10 py-10 relative'
            >
                {/* Please Don't Remove Items Start Property to Keep (Media Details)_C in Start Content! */}
                <div className='other-content-container grid grid-cols-1 lg:grid-cols-3 gap-y-3 lg:gap-x-3 items-start'>
                    <MediaOverview overview={movieData?.data?.overview} />
                    {/* Don't Forget Set Row Span Count To (Media Details)_C When Change The Count ELements in Large Screen */}
                    <MediaDetails mediaData={movieData?.data} />
                    <MediaImages imagesList={movieImagesData?.data?.backdrops || []} />
                    {
                        movieReviewsData?.data?.results?.length > 0 && <MediaReviews reviewsList={movieReviewsData?.data?.results || []} />
                    }
                </div>
                {/* Start Free Trial */}
                <StartFreeTrial />
            </div>
        </div>
    )
}

export default Movie;