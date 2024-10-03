import React from 'react';

const linksData = [
    {
        to: "https://www.facebook.com/mustafacoder9/",
        icon: "fa-brands fa-facebook fa-fw",
    },
    {
        to: "https://www.linkedin.com/in/mustafa-sayed-65a40027a/",
        icon: "fa-brands fa-linkedin fa-fw",
    },
    {
        to: "https://github.com/Mustafa-Sayed-M",
        icon: "fa-brands fa-github fa-fw",
    },
]

function Contact() {
    return (
        <div className='contact space-y-3'>
            <h3 className='font-semibold'>Connect With Us</h3>
            <ul className='flex items-center gap-1'>
                {linksData.map((link, index) => <li key={index} data-aos="fade-left" data-aos-delay={index * 50} data-aos-once={true}>
                    <a
                        href={link.to}
                        target='_blank'
                        rel="noreferrer"
                        className='text-xl block p-2 bg-card-color border border-white/10 rounded-md'
                    >
                        <i className={link.icon}></i>
                    </a>
                </li>)}
            </ul>
        </div>
    )
}

export default Contact;