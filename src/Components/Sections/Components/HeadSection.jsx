import React from 'react';

const HeadSection = React.memo(({ title, description, children }) => {
    return (
        <div className='head-section mb-10 flex items-center gap-5 max-md:flex-col max-md:items-start justify-between'>
            <div className='text-content md:w-3/4'>
                <h2 className='font-semibold text-2xl'>{title}</h2>
                <p className='text-grey-color-60 mt-2'>{description}</p>
            </div>
            {children}
        </div>
    )
});

export default HeadSection;