import React from 'react';
import { imageApi } from '../../../Utils/api';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import LinkComponent from '../../Atoms/LinkComponent';

function HeaderMediaContent({ mainData: { id, name, title, overview, backdrop_path } }) {
    return (
        <div className='header-media-content'>
            <LazyLoadImage
                src={`${imageApi.baseEndpoint}${imageApi.backdropUrl}${backdrop_path}`}
                alt={name || title || 'Alt Text'}
                effect='blur'
                className='w-full h-full'
            />
            <div className='overlay absolute bg-black/40 w-full h-full left-0 top-0 z-10 flex items-end'>
                <div className='container mb-3 sm:mb-5 md:mb-7 xl:mb-10 '>
                    {/* Text Content */}
                    <div className='text-content text-center mb-5'>
                        {/* Name/Title */}
                        <h2 className='text-xl sm:text-2xl md:text-4xl font-bold'>{name || title}</h2>
                        {/* Overview */}
                        <p className='text-grey-color-60 mt-3 font-medium max-md:hidden'>{overview}</p>
                    </div>
                    {/* Actions */}
                    <div className='actions flex items-center gap-3 justify-center'>
                        {/* Details */}
                        <LinkComponent path={`/${title ? 'movies' : 'shows'}/${id}`}>
                            <i className='fa-solid fa-exclamation fa-fw'></i>
                            {"Details"}
                        </LinkComponent>
                        {/* Add to WhishList */}
                        <button
                            title='Add To WhishList'
                            className='w-10 h-10 leading-10 text-center rounded-md bg-black-color-6 border border-black-color-15 sm:hover:bg-black-color-12 transition'
                        >
                            <i className='fa-solid fa-heart fa-fw'></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderMediaContent;