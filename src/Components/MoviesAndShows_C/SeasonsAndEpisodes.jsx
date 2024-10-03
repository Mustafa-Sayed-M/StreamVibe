import React from 'react';
import SeasonCard from './Cards/SeasonCard';

function SeasonsAndEpisodes({ seasonsList }) {
  return (
    <div className='seasons-and-episodes bg-card-color p-3 rounded-md space-y-4 col-span-2' data-aos="fade-up">
      {/* Seasons Cards */}
      <div className='seasons-cards space-y-3'>
        {seasonsList.map((season, index) => <SeasonCard key={index} seasonData={season} />)}
      </div>
    </div>
  )
}

export default SeasonsAndEpisodes;