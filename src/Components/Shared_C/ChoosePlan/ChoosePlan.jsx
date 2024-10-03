import React, { useState } from 'react';
import HeadSection from '../HeadSection';
import { APP_NAME } from '../../../Utils/constants';
import { useSelector } from 'react-redux';
import PlanCard from './Components/PlanCard';

function ChoosePlan() {

    const { plansData } = useSelector(state => state.plans);

    const [typePlane, setTypePlane] = useState("MONTHLY");

    const toggleTypePlane = (type) => {
        setTypePlane(type);
    }

    return (
        <section className='faq-section py-10' id='pricing'>
            {/* Header */}
            <div className='header flex max-md:flex-col items-center justify-between mb-10'>
                {/* Section Head */}
                <HeadSection
                    className={"mb-0"}
                    title={"Choose the plan that's right for you"}
                    description={`Join ${APP_NAME} and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!`}
                />
                {/* Toggle Plans */}
                <div
                    data-aos="fade-down-left"
                    className='togglers-plans max-md:w-full p-2 rounded-md bg-black-color border border-white/10 flex items-center gap-2'
                >
                    {/* Monthly */}
                    <button
                        type='button'
                        title='Monthly'
                        aria-label='Monthly'
                        onClick={() => toggleTypePlane("MONTHLY")}
                        className={`py-2 max-md:w-full md:px-5 transition rounded-md ${typePlane === "MONTHLY" ? "bg-card-color" : "sm:hover:bg-card-color"}`}
                    >
                        Monthly
                    </button>
                    {/* Yearly */}
                    <button
                        type='button'
                        title='Yearly'
                        aria-label='Yearly'
                        onClick={() => toggleTypePlane("YEARLY")}
                        className={`py-2 max-md:w-full md:px-5 transition rounded-md ${typePlane === "YEARLY" ? "bg-card-color" : "sm:hover:bg-card-color"}`}
                    >
                        Yearly
                    </button>
                </div>
            </div>
            {/* Plans Container */}
            <div className='plans-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {plansData.map((plan, index) => <PlanCard key={index} index={index} typePlane={typePlane} planData={plan} />)}
            </div>
        </section>
    )
}

export default ChoosePlan;