import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {

    const linkStyle = `text-grey-color-60 font-semibold transition sm:hover:text-white block px-2 sm:px-4`;

    return (
        <footer>
            <div className='container py-5'>
                {/* Main Content */}
                <div className='main-content py-3'></div>
                {/* Copyrights */}
                <div className='copyrights border-t border-t-black-color-15 py-3 flex max-lg:flex-col-reverse gap-y-5 items-center justify-between'>
                    {/* Copyrights Text */}
                    <p className='max-sm:text-center'>
                        @2025 StreamVib, All Rights Reserved - By
                        {" "}
                        <a
                            href='https://github.com/Mustafa-Sayed-M'
                            target='_blank'
                            title='Go to Github Profile ✨'
                            className='underline font-bold transition sm:hover:text-white'
                        >Mustafa Sayed</a>
                    </p>
                    {/* Links */}
                    <ul className='flex items-center max-md:flex-col gap-y-3'>
                        <li>
                            <Link to='' className={`${linkStyle}`}>Terms of Use</Link>
                        </li>
                        <li className='border-x-2 border-x-black-color-15'>
                            <Link to='' className={`${linkStyle}`}>Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to='' className={`${linkStyle}`}>Cookie Policy</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;