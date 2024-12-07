import React from 'react';
import { Link } from 'react-router-dom';

function ActionsSlide({ mediaData }) {

    const {
        id,
        title
    } = mediaData;

    return (
        <div className='actions w-full flex items-center justify-center gap-2'>
            {/* Detail Link */}
            <Link
                to={`/${title ? "movies" : "shows"}/${id}`}
                className='block py-2 px-4 bg-red-color-45 rounded-md'
            >
                <i className="fa-solid fa-info fa-fw me-2"></i>
                <span>Details</span>
            </Link>
            {/* Add Button */}
            <button
                type='button'
                aria-label='Add'
                title='Add'
                className='bg-black-color-6 border border-black-color-15 rounded-md p-2 sm:hover:bg-black-color-10 transition'
            >
                <i className="fa-solid fa-plus fa-fw"></i>
            </button>
            {/* Like Button */}
            <button
                type='button'
                aria-label='Like'
                title='Like'
                className='bg-black-color-6 border border-black-color-15 rounded-md p-2 sm:hover:bg-black-color-10 transition'
            >
                <i className="fa-solid fa-thumbs-up fa-fw"></i>
            </button>
            {/* Volume Button */}
            <button
                type='button'
                aria-label='Volume'
                title='Volume'
                className='bg-black-color-6 border border-black-color-15 rounded-md p-2 sm:hover:bg-black-color-10 transition'
            >
                <i className="fa-solid fa-volume-high fa-fw"></i>
            </button>
        </div>
    )
}

export default ActionsSlide;