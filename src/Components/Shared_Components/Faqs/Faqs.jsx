import React from 'react';
import faqsData from '../../../Data/faqs.json';
import FaqCard from './Components/FaqCard';

function Faqs() {
    return (
        <section className='faqs py-7' id='faq'>
            {/* Header */}
            <div className='header flex max-md:flex-col items-center gap-5 mb-7'>
                {/* Text Box */}
                <div className='text-box space-y-2 w-full'>
                    <h1 className='text-3xl font-semibold'>Frequently Asked Questions</h1>
                    <p>Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.</p>
                </div>
            </div>
            {/* Content Grid */}
            <div className='content-grid grid md:grid-cols-2 gap-5'>
                {faqsData.map((faq, index) => <FaqCard
                    key={index}
                    faqData={faq}
                />)}
            </div>
        </section>
    )
}

export default Faqs;