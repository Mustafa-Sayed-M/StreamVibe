import React from 'react';

const StartFreeTrial = () => {
    return <button type='button' title='Choose This Plane' aria-label='Choose Plane' className='bg-black-color border border-white/10 py-2 w-full rounded-md'>
        Start Free Trial
    </button>
};
const ChoosePlan = () => {
    return <button type='button' title='Choose This Plane' aria-label='Choose Plane' className='bg-primary-color py-2 w-full rounded-md'>
        Choose Plan
    </button>
};

function PlanCard({ typePlane, planData, index }) {

    const {
        name,
        content,
        priceMonthly,
        priceYearly,
    } = planData;

    return (
        <div
            data-aos="fade-up-left"
            data-aos-delay={50 * index}
            className='plan-card bg-card-color p-5 rounded-md space-y-5'
        >
            {/* Text Box */}
            <div className='text-box space-y-1'>
                {/* Name */}
                <h3 className='font-semibold text-xl'>{name}</h3>
                {/* Content */}
                <p className='text-gray-400 line-clamp-2'>{content}</p>
            </div>
            {/* Price */}
            <div className='price flex items-end gap-1'>
                <h1 className='text-3xl font-semibold'>${typePlane === "MONTHLY" ? priceMonthly : priceYearly}</h1>
                <span className='slash'>/</span>
                <p className='text-gray-400'>{typePlane === "MONTHLY" ? "monthly" : "yearly"}</p>
            </div>
            {/* Buttons */}
            <div className='buttons flex items-center gap-2'>
                {/* Button Star Free Trial */}
                <StartFreeTrial />
                {/* Button Choose Plane */}
                <ChoosePlan />
            </div>
        </div>
    )
}

export default PlanCard;