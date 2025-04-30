import React from 'react';

function SliderControllers({ swiperRef, paginationClassname, prevClassname, nextClassname }) {

    // Handle Controllers Btns:
    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };
    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    return (
        <div className='slider-controllers flex items-center justify-between mt-5'>
            {/* Prev Button */}
            <button
                onClick={handlePrev}
                title='Previous Slide'
                className={`${prevClassname} w-10 h-10 leading-10 text-center sm:hover:bg-black-color-12 transition bg-black-color-6 rounded-full border border-black-color-15 disabled:opacity-60 disabled:cursor-not-allowed`}
            >
                <i className="fa-solid fa-chevron-left fa-fw"></i>
            </button>
            {/* external pagination */}
            <div className={`custom-swiper-pagination ${paginationClassname}`}></div>
            {/* Next Button */}
            <button
                title='Next Slide'
                onClick={handleNext}
                className={`${nextClassname} w-10 h-10 leading-10 text-center sm:hover:bg-black-color-12 transition bg-black-color-6 rounded-full border border-black-color-15 disabled:opacity-60 disabled:cursor-not-allowed`}
            >
                <i className="fa-solid fa-chevron-right fa-fw"></i>
            </button>
        </div>
    )
}

export default SliderControllers;