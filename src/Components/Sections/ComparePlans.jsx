import React from 'react';
import HeadSection from './Components/HeadSection';

function ComparePlans() {
    return (
        <section className='compare-plans-section py-7' id='comparePlans'>
            <div className='container'>
                {/* Head Section */}
                <HeadSection
                    title={`Compare our plans and find the right one for you`}
                    description={`StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you.`}
                />
                {/*  */}
                <p>This Section Under Work...</p>
            </div>
        </section>
    )
}

export default ComparePlans;