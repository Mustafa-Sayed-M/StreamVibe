import React from 'react';

function FaqCard({ faqData: { id, question, answer } }) {

    const [isOpen, setIsOpen] = React.useState(false);

    const handleIsOpen = React.useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    return (
        <div
            onClick={handleIsOpen}
            className={`faq-card p-5 flex ${isOpen ? 'items-start' : 'items-center'} gap-3 border-b border-b-red-color-45/50 cursor-pointer`}
        >
            {/* Faq Number */}
            <div className='faq-num p-3 bg-black-color-12 border border-black-color-15 rounded-md'>{id.toString().padStart(2, '0')}</div>
            {/* Content */}
            <div className='content flex-1'>
                {/* Content Header */}
                <div className='content-header flex items-center gap-3'>
                    {/* Question */}
                    <h3 className='font-semibold text-xl flex-1'>{question}</h3>
                    <div className='state-icon text-xl'>
                        <i className={`fa-solid fa-${isOpen ? 'minus' : 'plus'} fa-fw`}></i>
                    </div>
                </div>
                {/* Answer */}
                {isOpen && <p className='font-medium mt-3 cursor-auto' onClick={e => e.stopPropagation()}>{answer}</p>}
            </div>
        </div>
    )
}

export default FaqCard;