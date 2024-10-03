import React from 'react';
import { useNavigate } from 'react-router-dom';

function LinksComponents({ page, title, linksList }) {

    const navigate = useNavigate();

    const handleClick = (e, to) => {
        e.preventDefault();
        navigate(page);
        setTimeout(() => {
            const targetSection = document.getElementById(to);
            if (targetSection) targetSection.scrollIntoView({ behavior: 'smooth' });
        }, 0);
    }

    return (
        <div className='links-components'>
            {/* Title */}
            <h3 className='font-medium mb-3'>{title}</h3>
            {/* List of Links */}
            <ul>
                {linksList.map((link, index) => <li key={index}>
                    <a href={`#${link.href}`} className='text-gray-400 font-medium block py-2 hover:text-white transition' onClick={e => handleClick(e, link.href)}>{link.label}</a>
                </li>)}
            </ul>
        </div>
    )
}

export default LinksComponents;