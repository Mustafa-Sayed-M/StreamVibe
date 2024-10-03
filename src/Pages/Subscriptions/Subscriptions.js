import React from 'react';
import ChoosePlan from '../../Components/Shared_C/ChoosePlan/ChoosePlan';
import ComparePlans from '../../Components/Subscription_C/ComparePlans';
import StartFreeTrial from '../../Components/Shared_C/StartFreeTrial';

function Subscriptions() {
  return (
    <div className='subscriptions-page pt-20 pb-10'>
      <div className='container space-y-10 py-10'>
        {/* Choose Plan */}
        <ChoosePlan />
        {/* Compare Plans */}
        <ComparePlans />
        {/* Start Free Trial */}
        <StartFreeTrial />
      </div>
    </div>
  )
}

export default Subscriptions;