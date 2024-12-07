import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
    return (
        <Link
            to={'/'}
            className='logo'
        >
            <img
                src={`${process.env.PUBLIC_URL}/assets/logo.png`}
                alt='Logo'
                width={130}
                height={130}
            />
        </Link>
    )
}

export default Logo;