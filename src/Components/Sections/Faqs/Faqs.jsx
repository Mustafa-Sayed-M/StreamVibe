import React from 'react';
import HeadSection from '../Components/HeadSection';
import faqsData from '../../../Data/faqs.json';
import FaqCard from './Components/FaqCard';
import { Link } from 'react-router-dom';
import LinkComponent from '../../Atoms/LinkComponent';

function Faqs() {
    return (
        <section className='faqs-section py-7' id='faqs'>
            <div className='container'>
                {/* Head Section */}
                <HeadSection
                    title={`Frequently Asked Questions`}
                    description={`Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.`}
                >
                    {/* Add Faq */}
                    <LinkComponent path={''}>
                        Ask a Question
                    </LinkComponent>
                </HeadSection>
                {/* Faqs Cards */}
                <div className='devices-cards grid md:grid-cols-2 gap-5'>
                    {
                        faqsData.map((faq, index) => <FaqCard faqData={faq} key={index} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default Faqs;