import React from 'react';
import { Link } from 'react-router-dom';

function AppLogo() {
    return (
        <Link
            to="/"
            className="app-logo"
        >
            <picture>
                <source
                    media="(max-width: 575px)"
                    srcSet={`/assets/images/logo-mobile.png`}
                />
                <source
                    media="(max-width: 1024px)"
                    srcSet={`/assets/images/logo-laptop.png`}
                />
                <img
                    src={`/assets/images/logo-desktop.png`}
                    alt="App Logo"
                    width={80}
                    height={80}
                    className="w-auto h-auto"
                />
            </picture>
        </Link>
    )
}

export default AppLogo;