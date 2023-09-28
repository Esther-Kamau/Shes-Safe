import {
    LockClosedIcon,
    LightBulbIcon,
    UserGroupIcon,
    MapPinIcon,
    CogIcon,
    ServerIcon,
    ShieldCheckIcon,
} from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Anonymous Sharing',
        description: 'Your stories matter, and sharing them anonymously can make a significant impact. We invite you to share your experiences, helping others learn from your encounters and feel supported in their journey towards safety.',
        icon: ShieldCheckIcon,
    },

    {
        name: 'USSD Code Prompt',
        description: ' Easily share your stories through our USSD code prompt. Your input will help create a comprehensive database categorized by the type of crime, location, and incident details.',
        icon: CogIcon,
    },

    {
        name: 'Community Engagement',
        description: 'Connect with others by reading our blogs, commenting on your social media platforms, a WhatsApp bot for interactive discussions. Share images & OB (Occurrence Book)  of unsolved crimes to raise awareness & push authorities to take action.',
        icon: UserGroupIcon,
    },
    {
        name: 'Predictive Crime Models',
        description: 'We leverage the power of artificial intelligence to generate predictive crime models. These models analyze historical data to identify areas prone to crime in Nairobi. By using these insights, you can plan your routes and make informed decisions to stay safe.',
        icon: LightBulbIcon,
    },
   
    {
        name: 'Travel & Accomodation Insights',
        description: 'Moving out soon or looking for a new location to spend your vacation? Plan your travels and stays wisely with our safety surveys, guiding you to choose the safest destinations and accommodations',
        icon: MapPinIcon,
    },
   

]

export default function Example() {
    return (
        <div className="relative bg-white py-16 sm:py-32 lg:py-40">
            <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
                <h2 className="text-lg font-semibold text-pink-600">Ensure you and your loved ones are safe</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Your Journey, Towards a Safer Nairobi
                </p>
                <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
                Nairobi, like any vibrant city, has its share of crime hotspots. Being aware of these areas and taking precautions can make a significant 
                difference in your safety and the safety of those you care about. She's Safe is here to guide you on this journey.
                </p>
                <div className="mt-20">
                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="pt-6">
                                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                                    <div className="-mt-6">
                                        <div>
                                            <span className="inline-flex items-center justify-center rounded-xl bg-pink-500 p-3 shadow-lg">
                                                <feature.icon className="h-8 w-8 text-white" aria-hidden="true" />
                                            </span>
                                        </div>
                                        <h3 className="mt-8 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                                            {feature.name}
                                        </h3>
                                        <p className="mt-5 text-base leading-7 text-gray-600">{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
