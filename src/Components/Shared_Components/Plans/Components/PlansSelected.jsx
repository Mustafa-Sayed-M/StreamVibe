import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPlanHandler } from '../../../../Store/slices/appSlice';

function PlansSelected() {
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
}

export default PlansSelected;