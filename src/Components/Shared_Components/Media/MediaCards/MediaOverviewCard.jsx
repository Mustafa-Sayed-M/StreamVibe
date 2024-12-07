import React from 'react';

function MediaOverviewCard({ overview }) {

  if (!overview) return;

  return (
    <div className={`media-overview-card space-y-2 bg-black-color-10 border border-black-color-10 rounded-md p-5`}>
      <h3 className='text-grey-color-60'>Description</h3>
      <p className='text-white'>{overview}</p>
    </div>
  )
}

export default MediaOverviewCard;