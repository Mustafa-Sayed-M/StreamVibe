import React, { useState } from 'react';

function FaqCard({ faqData }) {

    const {
        question,
        answer,
        id
    } = faqData;

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <div
            onClick={handleClick}
            className={`flex ${open ? "items-start" : "items-center"} gap-3 p-4 cursor-pointer select-none border-b border-b-primary-color/50 rounded-b-md shadow-md`}
        >
            {/* Faq Number */}
            <div className='faq-number bg-card-color border border-white/10 py-3 px-4 rounded-md'>0{id}</div>
            {/* Faq Content */}
            <div className='faq-content w-full'>
                {/* Faq Head Title */}
                <div className='faq-head-question flex items-center justify-between'>
                    <h3 className='font-semibold text-xl'>{question}</h3>
                    {/* Icon State */}
                    <div className='icon-state relative w-5'>
                        {/* Horizontal Col */}
                        <div className='horizontal-col bg-white h-0.5 w-5 absolute'></div>
                        {/* Vertical Col */}
                        <div className={`vertical-col bg-white h-0.5 w-5 absolute transition ${!open && "rotate-90"}`}></div>
                    </div>
                </div>
                {/* Faq Answer */}
                {
                    open && <p className={`text-gray-400 mt-2`}>{answer}</p>
                }
            </div>
        </div>
    )
}

export default FaqCard;