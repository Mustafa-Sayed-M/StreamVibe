import React from 'react';
import Overview from './Components/Overview';
import Images from './Components/Images';
import Reviews from './Components/Reviews';
import SubDetails from './Components/SubDetails';

function MediaDetails({ rowSpanCount, subDetailOrder, mainData, mainDataIsLoading, mediaType, mediaId, children }) {
    return (
        <section className='media-details py-7' id='mediaDetails'>
            <div className='container'>
                {/* Content Grid */}
                <div className='content-grid grid grid-cols-1 lg:grid-cols-3 gap-5 items-start *:bg-black-color-10 *:border *:border-black-color-15 *:rounded-xl *:max-md:p-3 *:md:p-5'>
                    {/* Children */}
                    {children}
                    {/* Overview */}
                    <Overview overview={mainData ? mainData.overview : null} isLoading={mainDataIsLoading} />
                    {/* Sub Details */}
                    <SubDetails
                        rowSpanCount={rowSpanCount}
                        isLoading={mainDataIsLoading}
                        mediaData={mainData ? mainData : {}}
                        subDetailOrder={subDetailOrder}
                    />
                    {/* Images */}
                    <Images
                        mediaType={mediaType}
                        mediaId={mediaId}
                    />
                    {/* Reviews */}
                    <Reviews
                        mediaType={mediaType}
                        mediaId={mediaId}
                    />
                </div>
            </div>
        </section>
    )
}

export default MediaDetails;