import React from 'react';

function NavigationSlider({ swiperRef }) {

    const handlePreviousSlide = () => {
        swiperRef.current.slidePrev();
    };

    const handleNextSlide = () => {
        swiperRef.current.slideNext();
    };

    const buttonStyle = `max-sm:hidden bg-black-color-10 border border-black-color-12 rounded-full w-10 h-10 leading-10 text-center sm:hover:bg-black-color-12 transition`;

    return (
        <div className='navigation flex items-center justify-center gap-3 py-2 px-3 rounded-md bg-black-color-6 border border-black-color-12 w-fit mx-auto'>
            {/* Previous */}
            <button
                type='button'
                aria-label='Previous Trigger'
                title='Previous Slide'
                onClick={handlePreviousSlide}
                className={`${buttonStyle}`}
            >
                <i className="fa-solid fa-angle-left fa-fw"></i>
            </button>
            {/* Next */}
            <button
                type='button'
                aria-label='Next Trigger'
                title='Next Slide'
                onClick={handleNextSlide}
                className={`${buttonStyle}`}
            >
                <i className="fa-solid fa-angle-right fa-fw"></i>
            </button>
        </div>
    )
}

export default NavigationSlider;