import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import plansData from '../../../Data/plans.json';
import PlanCard from './Components/PlanCard';
import { selectPlanHandler } from '../../../Store/slices/appSlice';

const PlansSelected = () => {

    const dispatch = useDispatch();

    const { planSelected } = useSelector(state => state.app);

    const handleSelectedPlan = (plan) => {
        if (plan !== planSelected) dispatch(selectPlanHandler(plan));
    };

    return (
        <div className='plans-togglers text-nowrap bg-black-color-6 border border-black-color-15 rounded-md py-2 px-4'>
            {/* Monthly */}
            <button
                aria-label='Plans Selected'
                type='button'
                onClick={() => handleSelectedPlan("MONTHLY")}
                className={`py-2 px-4 ${planSelected === "MONTHLY" && "bg-black-color-12"} rounded-md transition`}
            >
                Monthly
            </button>
            {/* Yearly */}
            <button
                aria-label='Plans Selected'
                type='button'
                onClick={() => handleSelectedPlan("YEARLY")}
                className={`py-2 px-4 ${planSelected === "YEARLY" && "bg-black-color-12"} rounded-md transition`}
            >
                Yearly
            </button>
        </div>
    )
};

function Plans() {
    return (
        <section className='plans py-7' id='plans'>
            {/* Header */}
            <div className='header flex max-md:flex-col items-center gap-5 mb-7'>
                {/* Text Box */}
                <div className='text-box space-y-2 w-full'>
                    <h1 className='text-3xl font-semibold'>Choose the plan that's right for you</h1>
                    <p>Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!</p>
                </div>
                {/* Plans Selected */}
                <PlansSelected />
            </div>
            {/* Content Grid */}
            <div className='content-grid grid sm:grid-cols-2 md:grid-cols-3 gap-3'>
                {plansData.map((planItem, index) => <PlanCard
                    key={index}
                    planData={planItem}
                />)}
            </div>
        </section>
    )
}

export default Plans;