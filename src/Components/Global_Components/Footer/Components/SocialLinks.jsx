import React from 'react';

const linksList = [
    { href: 'https://www.facebook.com/mustafacoder9/', fontAwesomeIconClass: 'facebook', text: 'Facebook' },
    { href: 'https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3B6aL12gJvQx6JImC%2FnZ0AfA%3D%3D', fontAwesomeIconClass: 'linkedin', text: 'Linkedin' },
];

function SocialLinks() {
    return (<div className='links-component'>
        <p className='font-medium mb-2'>Contact Us</p>
        <ul className='flex items-center gap-2'>
            {linksList.map((link, index) => <li key={index}>
                <a
                    target='_blank'
                    title={`Go To ${link.text} Profile.`}
                    href={link.href}
                    rel="noreferrer"
                    className='block w-10 h-10 leading-10 text-center text-xl bg-black-color-10 border border-black-color-15 rounded-md sm:hover:bg-black-color-15 transition-colors'
                >
                    <i className={`fa-brands fa-${link.fontAwesomeIconClass} fa-fw`}></i>
                </a>
            </li>)}
        </ul>
    </div>)
}

export default SocialLinks;