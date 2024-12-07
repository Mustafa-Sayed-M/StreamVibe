import React from 'react';

function LinksComponent({ title, linksList }) {
    return (
        <div className='links-component'>
            <p className='font-medium mb-2'>{title}</p>
            <ul>
                {linksList.map((link, index) => <li key={index}>
                    <a
                        href={link.href}
                        onClick={e => e.preventDefault()}
                        title={`Go To ${link.text} Section`}
                        className='block text-grey-color-60 py-1 sm:hover:text-white transition-colors'
                    >
                        {link.text}
                    </a>
                </li>)}
            </ul>
        </div>
    )
}

export default LinksComponent;