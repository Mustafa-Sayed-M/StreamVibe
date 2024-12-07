import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function PlanCard({ planData }) {
    const { planSelected } = useSelector(state => state.app);

    const {
        name,
        description,
        prices: {
            monthly,
            annual,
        },
    } = planData;

    return (
        <div className='plan-card p-3 bg-black-color-10 border border-black-color-15 rounded-md'>
            {/* Name */}
            <h2 className='font-semibold text-xl mb-2'>{name}</h2>
            {/* Description */}
            <p className='mb-4'>{description}</p>
            {/* Price */}
            <div className='price flex items-end gap-2 mb-4'>
                {/* Price Num */}
                <h3 className='text-4xl font-bold'>${planSelected === "MONTHLY" ? monthly : annual}</h3>
                {/* Price Type */}
                <p>/{planSelected === "MONTHLY" ? "monthly" : "annual"}</p>
            </div>
            {/* Actions */}
            <div className='actions flex max-sm:flex-col items-center gap-2'>
                {/* Start Free Trial */}
                <Link
                    to={''}
                    className='block text-center py-2 w-full bg-black-color-8 border border-black-color-15 rounded-md'
                >
                    Start Free Trial
                </Link>
                {/* Choose Plan */}
                <Link
                    to={''}
                    className='block text-center py-2 w-full bg-red-color-45 rounded-md'
                >
                    Choose Plan
                </Link>
            </div>
        </div>
    )
}

export default PlanCard;