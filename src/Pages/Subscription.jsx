import React from 'react';
import Plans from '../Components/Sections/Plans/Plans';
import ComparePlans from '../Components/Sections/ComparePlans';

function Subscription() {
    return (
        <div className='subscription-page'>
            {/* Plans */}
            <Plans />
            {/* Compare Plans */}
            <ComparePlans />
        </div>
    )
}

export default Subscription;