import React from 'react';
import { useSelector } from 'react-redux';
import FaqCard from './Components/FaqCard';
import { APP_NAME } from '../../../Utils/constants';
import { Link } from 'react-router-dom';
import HeadSection from '../HeadSection';

function Faq() {

    const { faqData } = useSelector(state => state.faq);

    return (
        <section className='faq-section py-10' id='faq'>
            {/* Header */}
            <div className='header flex max-md:flex-col items-center justify-between mb-10 gap-5'>
                {/* Section Head */}
                <HeadSection
                    className={"mb-0"}
                    title={"Frequently Asked Questions"}
                    description={`Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about ${APP_NAME}.`}
                />
                {/* Link Ask Question */}
                <Link
                    data-aos="fade-down-left"
                    className='block max-md:w-full text-center bg-primary-color py-2 px-5 rounded-md text-nowrap'
                >
                    Ask a question
                </Link>
            </div>
            {/* Faq  Container */}
            <div className='faq-container grid grid-cols-1 md:grid-cols-2 gap-3' data-aos="fade-up">
                {faqData.map((faq, index) => <FaqCard key={index} index={index} faqData={faq} />)}
            </div>
        </section>
    )
}

export default Faq;