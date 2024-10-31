import Image from 'next/image';
import React from 'react';
import card1 from '../assets/card1.gif';
import card2 from '../assets/card2.gif';
import { CardProps } from '@/types/Card';



const Card = ({ title, heading, description, isProduct, capabilities }: CardProps) => {
  return (
    <div className="bg-gray-50 p-6 sm:p-8 rounded-xl flex-1 flex flex-col">
      <div className="flex-grow space-y-4 sm:space-y-6">
        <h3 className={`${isProduct ? 'text-purple-600' : 'text-cyan-400'} font-medium tracking-wide uppercase`}>
          {title}
        </h3>
        <h2 className="text-xl sm:text-2xl font-bold">{heading}</h2>
        <div className="h-32 sm:h-48 flex items-center justify-center">
          {isProduct ? (
            <Image
              src={card1}
              alt="Marketing illustration"
              width={200}
              height={200}
              unoptimized
            />
          ) : (
            <Image
              src={card2}
              alt="Marketing illustration"
              width={200}
              height={200}
              unoptimized
            />
          )}
        </div>
        <p className="text-gray-600">{description}</p>

        {/* Capabilities Section */}
        <div className="mt-6 sm:mt-8">
          <h4 className="font-medium mb-2">Capabilities</h4>
          <div className="flex flex-wrap gap-2">
            {capabilities.map((capability, index) => (
              <span
                key={index}
                className="bg-blue-50 text-blue-600 px-3 py-1 rounded-md text-sm"
              >
                {capability}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-1">+ 100s of more</p>
        </div>
      </div>

      <button 
        className={`mt-4 sm:mt-6 w-36 sm:w-44 px-4 sm:px-5 py-2 rounded-lg text-white flex items-center gap-2 ${
          isProduct ? 'bg-purple-600 hover:bg-purple-700' : 'bg-cyan-400 hover:bg-cyan-500'
        }`}
      >
        Learn more
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>
    </div>
  );
}

const Production = () => {
  const productCapabilities = ['UX/UI', 'Architecture', 'AWS', 'Node', 'React Native', 'PHP', 'React', 'Angular', 'C#'];
  const marketingCapabilities = ['Strategy', 'SEO', 'A/B testing', 'Design', 'Blogging', 'PPC', 'Creative', 'Web development'];

  return (
    <div className="text-black bg-white w-full">
      <div className='px-6 sm:px-10 md:px-20 lg:px-28 py-12 sm:py-16'>
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold">
          Great teams are built on product + market expertise, we've got both
        </h1>
        <p className='text-lg sm:text-xl text-gray-500 text-center mt-5'>
          Over 400+ consultants with expertise ranging from Hemp to SaaS, from Boston to Dubai.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-6 sm:gap-8">
          <Card
            title="PRODUCT ENGINEERING"
            heading="Launch your tech-product, hire your 1st or 100th developer."
            description="Surge provides flexible teams, advice, and support to take you from launching your MVP and sprint planning to handling large-scale enterprise projects."
            isProduct={true}
            capabilities={productCapabilities}
          />

          <Card
            title="GROWTH MARKETING"
            heading="Go to market, find your customers, and supercharge marketing."
            description="Surge provides consulting and qualified marketing professionals who have managed millions in ad spends with solid performance benchmarks."
            isProduct={false}
            capabilities={marketingCapabilities}
          />
        </div>
      </div>
    </div>
  );
}

export default Production;
