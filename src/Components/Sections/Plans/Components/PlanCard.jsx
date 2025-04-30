import React from 'react';
import { Link } from 'react-router-dom';
import LinkComponent from '../../../Atoms/LinkComponent';

function PlanCard({ planType, planData: { name, description, price: { monthly, yearly } } }) {
    return (
        <div className='plan-card p-5 bg-black-color-10 border border-black-color-15 rounded-md flex flex-col'>
            {/* Name */}
            <h3 className='font-semibold text-xl mb-2'>{name}</h3>
            {/* Description */}
            <p className='font-medium mb-5'>{description}</p>
            {/* Price */}
            <div className='price flex items-center gap-2 mb-5 mt-auto'>
                <div className='price-num text-4xl font-bold'>${planType === 'MONTHLY' ? monthly : yearly}</div>
                <p>/{planType === 'MONTHLY' ? 'month' : 'year'}</p>
            </div>
            {/* Actions */}
            <div className='actions flex items-center flex-wrap gap-3 *:block *:py-2 *:px-4 *:rounded-md *:sm:flex-1 *:max-sm:w-full *:text-center *:font-medium'>
                {/* Start Free */}
                <Link
                    to={``}
                    className='bg-black-color-8 border border-black-color-15 sm:hover:bg-black-color-12 transition'
                >Start Free Trial</Link>
                {/* Choose Plan */}
                <LinkComponent path={''}>
                    Choose Plan
                </LinkComponent>
            </div>
        </div>
    )
}

export default PlanCard;