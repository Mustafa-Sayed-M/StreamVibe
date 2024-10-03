import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GET_SERIES_API, GET_SERIES_IMAGES_API, GET_SERIES_REVIEWS_API } from '../../Store/slices/SeriesSlice';
import { resetSeasonDataStore } from '../../Store/slices/seasonSlice';
import MediaOverview from '../../Components/Shared_C/Details/MediaOverview';
import MediaDetails from '../../Components/Shared_C/Details/MediaDetails';
import MediaImages from '../../Components/Shared_C/Details/MediaImages';
import MediaReviews from '../../Components/Shared_C/Details/MediaReviews';
import LandingBackdrop from '../../Components/Shared_C/Details/LandingBackdrop';
import StartFreeTrial from '../../Components/Shared_C/StartFreeTrial';
import SeasonsAndEpisodes from '../../Components/MoviesAndShows_C/SeasonsAndEpisodes';

function Series() {

    const { seriesData, seriesImagesData, seriesReviewsData } = useSelector(state => state.series);

    const { seriesId } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);

    useEffect(() => { // # Reset Season Data.
        dispatch(resetSeasonDataStore());
    }, [dispatch]);

    useEffect(() => {
        const fetchData = async () => {
            await Promise.all([
                dispatch(GET_SERIES_API(seriesId)),
                dispatch(GET_SERIES_IMAGES_API(seriesId)),
                dispatch(GET_SERIES_REVIEWS_API(seriesId)),
            ])
        };

        if (seriesData.data.id !== +seriesId) fetchData();
    }, [dispatch, seriesData.data.id, seriesId]);

    return (
        <div className={`series-${seriesId} pt-20 pb-10`}>
            {/* Landing Backdrop */}
            <LandingBackdrop mediaData={seriesData?.data} />
            {/* Container */}
            <div
                style={{
                    boxShadow: "0 -200px 400px #141414"
                }}
                className='container space-y-10 py-10 relative'
            >
                {/* Please Don't Remove Items Start Property to Keep (Media Details)_C in Start Content! */}
                <div className='content-container grid grid-cols-1 lg:grid-cols-3 gap-y-3 lg:gap-x-3 items-start'>
                    <MediaOverview overview={seriesData.data.overview} />
                    {/* Don't Forget Set Row Span Count To (Media Details)_C When Change The Count ELements in Large Screen */}
                    <MediaDetails mediaData={seriesData.data} />
                    {/* Seasons And Episodes */}
                    {
                        seriesData?.data?.seasons?.length > 0 && <SeasonsAndEpisodes seasonsList={seriesData?.data?.seasons} />
                    }
                    {/* Images */}
                    {
                        seriesImagesData?.data?.backdrops?.length > 0 && <MediaImages imagesList={seriesImagesData?.data?.backdrops || []} />
                    }
                    {/* Reviews */}
                    {
                        seriesReviewsData?.data?.results?.length > 0 && <MediaReviews reviewsList={seriesReviewsData?.data?.results || []} />
                    }
                </div>
                {/* Start Free Trial */}
                <StartFreeTrial />
            </div>
        </div>
    )
}

export default Series;