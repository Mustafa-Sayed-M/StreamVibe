import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { faqOpenHandler } from '../../../../Store/slices/appSlice';

function FaqCard({ faqData }) {
    const { faqOpens } = useSelector(state => state.app);

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(faqOpenHandler(id));
    };

    const {
        id,
        quiz,
        answer
    } = faqData;

    return (
        <div className={`faq-card flex rounded-b-md shadow-md ${!faqOpens.includes(id) && 'items-center'} gap-3 py-4 border-b border-b-red-color-45`}>
            {/* Faq Id */}
            <div className='faq-id w-10 h-10 leading-10 text-center rounded-md bg-black-color-12 border border-black-color-15'>0{id}</div>
            {/* Text Box */}
            <div className='text-box space-y-2 w-full'>
                <h1 className='font-semibold'>{quiz}</h1>
                {faqOpens.includes(id) && <p>{answer}</p>}
            </div>
            {/* Toggler */}
            <button
                type='button'
                aria-label='Toggler'
                title={faqOpens.includes(id) ? "Close" : "Open"}
                onClick={handleClick}
                className='toggler text-xl self-start'
            >
                {
                    faqOpens.includes(id) ? (
                        <i className="fa-solid fa-minus"></i>
                    ) : (
                        <i className="fa-solid fa-plus"></i>
                    )
                }
            </button>
        </div>
    )
}

export default FaqCard;