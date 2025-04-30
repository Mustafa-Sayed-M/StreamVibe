import React from 'react';
import SeasonItem from './SeasonItem/SeasonItem';

function SeasonsItems({ seasonsData }) {

    const [activeSeason, setActiveSeason] = React.useState(null);

    return (
        <div className='seasons-items space-y-3'>
            {
                seasonsData.map((season, index) => (
                    <SeasonItem
                        key={index}
                        seasonData={season}
                        activeSeason={activeSeason}
                        setActiveSeason={setActiveSeason}
                    />
                ))
            }
        </div>
    )
}

export default SeasonsItems;