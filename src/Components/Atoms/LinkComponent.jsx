import React from 'react';
import { Link } from 'react-router-dom';

function LinkComponent({ path, className, children }) {
    return (
        <Link
            to={path}
            className={`block w-fit py-2 px-4 rounded-md bg-red-color-45 font-semibold transition sm:hover:bg-white sm:hover:text-red-color-45 ${className}`}
        >
            {children}
        </Link>
    )
}

export default LinkComponent;