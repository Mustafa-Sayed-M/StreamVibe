import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchSeasonEpisodes } from '../../../../../../../Utils/api';
import EpisodeItem from './Components/EpisodeItem';

const SeasonItem = React.memo(({ seasonData: { season_number, episode_count }, activeSeason, setActiveSeason }) => {

    const { showId } = useParams();

    const { data: episodesData, isLoading: episodesIsLoading } = useQuery({
        queryKey: [`show_${showId}_season_${activeSeason}`, activeSeason],
        queryFn: () => fetchSeasonEpisodes(showId, activeSeason), // active season as season number.
        refetchOnWindowFocus: false,
        enabled: Boolean(activeSeason !== null)
    });

    return (
        <div className='season-item bg-black-color-6 border border-black-color-15 rounded-md'>
            {/* Season Header */}
            <div
                onClick={() => setActiveSeason(prev => prev === season_number ? null : season_number)}
                className='season-header p-5 flex items-center justify-between cursor-pointer'
            >
                {/* Text Header */}
                <div className='text-header flex items-center gap-2.5'>
                    {/* Season Number */}
                    <h3 className='font-semibold'>Season {season_number === 0 ? season_number + 1 : season_number}</h3>
                    {/* Season Episodes Count */}
                    <p>{episode_count} Episodes</p>
                </div>
                {/* Icon State Open */}
                <div className={`${activeSeason === season_number ? '*:rotate-180' : ''} icon-state-open w-10 h-10 leading-10 text-center rounded-full bg-black-color-8 border border-black-color-15 text-grey-color-60 text-lg`}>
                    <i className='fa-solid fa-arrow-down fa-fw transition'></i>
                </div>
            </div>
            {/* Season Episodes */}
            {
                (activeSeason === season_number) ? (
                    <>
                        {/* Split Line */}
                        <hr className='border border-black-color-15 w-[calc(100%-40px)] mx-auto' />
                        {/* Season Episodes */}
                        <div className='season-episodes p-5'>
                            {
                                episodesIsLoading ? (
                                    <>Episodes Loading...</>
                                ) : (
                                    episodesData.episodes.map((episode, index) => (
                                        <EpisodeItem
                                            key={index}
                                            episodeData={episode}
                                            season_number={season_number}
                                        />
                                    ))
                                )
                            }
                        </div>
                    </>
                ) : (null)
            }
        </div>
    )
},
    (prevProps, nextProps) => {
        const wasActive = prevProps.activeSeason === prevProps.seasonData.season_number;
        const isActive = nextProps.activeSeason === nextProps.seasonData.season_number;
        return wasActive === isActive;
    });

export default SeasonItem;