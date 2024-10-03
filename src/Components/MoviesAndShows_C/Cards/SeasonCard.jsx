import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GET_EPISODES_API, handleSeasonOpenStore } from '../../../Store/slices/seasonSlice';
import { useParams } from 'react-router-dom';
import EpisodeCard from './EpisodeCard';

function SeasonCard({ seasonData }) {

    const dispatch = useDispatch();

    const { seriesId, } = useParams();

    const { seasonData: { data }, seasonOpen } = useSelector(state => state.season);

    const {
        season_number,
        episode_count,
    } = seasonData;

    if (+episode_count === 0) return;

    const handleClick = () => {
        if (season_number === seasonOpen) {
            dispatch(handleSeasonOpenStore(null));
        } else {
            dispatch(handleSeasonOpenStore(season_number));
            if (season_number !== data.season_number) {
                dispatch(GET_EPISODES_API({ seriesId, season_number }));
            }
        }
    };

    return (
        <div onClick={handleClick} className='season-card cursor-pointer bg-black-color p-3 rounded-md border border-white/10'>
            {/* Head */}
            <div className='head mb-3 flex items-center justify-between'>
                {/* Season Info */}
                <div className='season-info flex items-center gap-2 select-none'>
                    {/* Season Number */}
                    <h2 className='text-xl font-semibold'>Season {season_number}</h2>
                    {/* Episodes Counts */}
                    <p className='text-gray-400'>{episode_count} Episodes</p>
                </div>
                {/* Arrow Info */}
                <div
                    title={`${season_number === seasonOpen ? "Hide" : "Show"} Episodes Season ${season_number}`}
                    className='text-xl text-gray-400 bg-card-color border border-white/10 w-10 h-10 leading-10 text-center rounded-full'
                >
                    <i className={`fa-solid fa-arrow-up ${season_number === seasonOpen && "rotate-180"} transition`}></i>
                </div>
            </div>
            {/* Episodes */}
            {
                season_number === seasonOpen &&
                <div onClick={e => e.stopPropagation()} className='episodes space-y-1 max-h-[400px] overflow-y-auto pe-2 cursor-auto'>
                    {
                        data.episodes.map((episode, index) => <EpisodeCard key={index} episodeData={episode} episode_count={episode_count} />)
                    }
                </div>
            }
        </div>
    )
}

export default SeasonCard;