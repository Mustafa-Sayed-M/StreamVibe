import React from 'react';
import Overview from '../Overview';
import SeasonsItems from './Components/SeasonsItems';

function ShowSeasons({ seasonsData, mainDataIsLoading }) {
    return (
        <div className='show-seasons lg:col-span-2'>
            <h2 className='text-lg mb-7 font-semibold'>Seasons and Episodes</h2>
            {/*  */}
            {
                mainDataIsLoading ? (
                    <>Loading...</>
                ) : (
                    <SeasonsItems
                        seasonsData={seasonsData}
                    />
                )
            }
        </div>
    )
}

export default ShowSeasons;