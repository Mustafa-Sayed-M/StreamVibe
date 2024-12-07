import React from 'react';
import { Link } from 'react-router-dom';

function Copyrights() {

    const styleLink = `block text-grey-color-60 py-1 sm:hover:text-white transition-colors`;

    return (
        <div className='copyrights flex max-md:flex-col items-center justify-between gap-3 py-3 border-t border-t-black-color-15'>
            <p>@2024 streamvib, All Rights Reserved</p>
            <ul className='flex items-center gap-3'>
                <li>
                    <Link className={styleLink}>
                        Terms of Use
                    </Link>
                </li>
                <li>
                    <Link className={styleLink}>
                        Privacy Policy
                    </Link>
                </li>
                <li>
                    <Link className={styleLink}>
                        Cookie Policy
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Copyrights;