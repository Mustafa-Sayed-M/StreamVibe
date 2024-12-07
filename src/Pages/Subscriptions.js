import React from 'react';
import Plans from '../Components/Shared_Components/Plans/Plans';
import Features from '../Components/Subscriptions_Components/Features';

function Subscriptions() {
    return (
        <div className='subscriptions-page'>
            <div className='container'>
                {/* Plans */}
                <Plans />
                {/* Features */}
                <Features />
            </div>
        </div>
    )
}

export default Subscriptions;