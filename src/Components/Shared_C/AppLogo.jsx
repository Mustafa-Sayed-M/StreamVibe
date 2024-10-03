import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png';
import { APP_NAME } from '../../Utils/constants';

function AppLogo() {
    return (
        <Link
            to={'/'}
            className='flex items-center gap-2 font-medium text-lg'
        >
            <img
                src={logo}
                alt='Logo'
                className='w-8'
            />
            <span>{APP_NAME}</span>
        </Link>
    )
}

export default AppLogo;