import React from 'react';
import HeadSection from '../Shared_C/HeadSection';
import { APP_NAME } from '../../Utils/constants';
import { useSelector } from 'react-redux';

function ComparePlans() {

    const { plansData } = useSelector(state => state.plans);

    return (
        <section className='compare-plans-section py-10'>
            {/* Head Section */}
            <HeadSection
                title={"Compare our plans and find the right one for you"}
                description={`${APP_NAME} offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you.`}
            />
            {/* Table Of Content */}
            <div className='table-of-content rounded-md border border-white/10'>
                Table Of Content
            </div>
        </section>
    )
}

export default ComparePlans;