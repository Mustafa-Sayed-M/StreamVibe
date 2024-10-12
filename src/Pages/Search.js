import React, { useCallback, useEffect } from 'react';
import SearchHeader from '../Components/Search/SearchHeader';
import { SEARCH_API } from '../Store/slices/searchSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import MediaGrid from '../Components/Shared_C/Media/MediaGrid';
import SkeletonMediaGrid from '../Components/MoviesAndShows_C/Skeletons/SkeletonMediaGrid';

function Search() {

    const searchResults = useSelector(state => state.search);
    const trendingResults = useSelector(state => state.trending);

    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();

    const QUERY_PARM = searchParams.get('query');

    const SearchTrigger = useCallback(() => {
        dispatch(SEARCH_API({
            page: '1',
            year: searchParams.get('year'),
            query: searchParams.get('query'),
            type: searchParams.get('type'),
            lang: searchParams.get('type'),
        }));
    }, [dispatch, searchParams]);

    useEffect(() => {
        if (QUERY_PARM) SearchTrigger();
    }, [QUERY_PARM, SearchTrigger]);

    return (
        <div className='search-page pt-20 pb-10'>
            <div className='container space-y-5'>
                {/* Search Header */}
                <SearchHeader />
                {/* Display Media */}
                <div className='display-media space-y-3'>
                    {/* Heading */}
                    <h1 className='font-bold text-2xl'>{searchResults.results?.length > 0 ? <>
                        <i className="fa-solid fa-magnifying-glass fa-fw me-2 text-primary-color"></i>
                        <span>Search Results</span>
                    </> : (<>
                        <i className="fa-solid fa-arrow-trend-up fa-fw me-2 text-primary-color"></i>
                        <span>Trending Today</span>
                    </>)}</h1>
                    {
                        searchResults.results ? (
                            searchResults.loading ? (
                                <SkeletonMediaGrid />
                            ) : !(searchResults.results?.length > 0) ? (
                                <p className='p-2 font-bold text-center'><span className='text-primary-color'>Ops!</span> No Results 😢</p>
                            ) : (
                                <MediaGrid mediaList={searchResults.results} />
                            )
                        ) : (
                            <MediaGrid mediaList={trendingResults.results} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Search;