import React from 'react';
import HeadSection from '../Components/HeadSection';
import plansData from '../../../Data/plans.json';
import PlanCard from './Components/PlanCard';

function Plans() {

    const [planType, setPlanType] = React.useState('MONTHLY');

    const handleClick = React.useCallback(() => {
        setPlanType(prev => prev === 'MONTHLY' ? 'YEARLY' : 'MONTHLY')
    }, []);

    return (
        <section className='plans-section py-7' id='plans'>
            <div className='container'>
                {/* Head Section */}
                <HeadSection
                    title={`Choose the plan that's right for you`}
                    description={`Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!`}
                >
                    {/* Plan Selectors */}
                    <div className='plan-selectors max-md:w-full bg-black-color-6 border border-black-color-15 rounded-md p-2 flex items-center gap-2 *:py-2 *:px-4 *:rounded-md *:flex-1'>
                        <button
                            type='button'
                            onClick={handleClick}
                            className={`transition ${planType === 'MONTHLY' ? 'bg-black-color-12' : 'sm:hover:bg-black-color-12'}`}
                        >Monthly</button>
                        <button
                            type='button'
                            onClick={handleClick}
                            className={`transition ${planType === 'YEARLY' ? 'bg-black-color-12' : 'sm:hover:bg-black-color-12'}`}
                        >Yearly</button>
                    </div>
                </HeadSection>
                {/* Plans Cards */}
                <div className='devices-cards grid md:grid-cols-2 xl:grid-cols-3 gap-5'>
                    {
                        plansData.map((plan, index) => <PlanCard
                            key={index}
                            planData={plan}
                            planType={planType}
                            setPlanType={setPlanType}
                        />)
                    }
                </div>
            </div>
        </section>
    )
}

export default Plans;