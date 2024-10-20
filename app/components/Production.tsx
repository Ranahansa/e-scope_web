import Image from 'next/image'
import React from 'react'
import card1 from '../assets/card1.gif';
import card2 from '../assets/card2.gif';

const Card = ({ title, heading, description, isProduct }: CardProps) => {
  return (
    <div className="bg-gray-50 p-8 rounded-xl flex-1">
      <div className="space-y-6">
        <h3 className={`${isProduct ? 'text-purple-600' : 'text-cyan-400'} font-medium tracking-wide uppercase`}>
          {title}
        </h3>
        <h2 className="text-2xl font-bold">
          {heading}
        </h2>
        <div className="h-48 flex items-center justify-center">
          {isProduct ? (
            <Image
              src={card1}
              alt="Marketing illustration"
              width={200}
              height={200}
            />
          ) : (

            <Image
              src={card2}
              alt="Marketing illustration"
              width={200}
              height={200}
            />
          )}
        </div>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
}

const Production = () => {
  return (
    <div className="text-black bg-white w-full">
      <div className='px-4 md:px-28 py-16'>
        <h1 className="text-4xl md:text-5xl text-center font-bold">
          Great teams are built on product + market expertise, we've got both
        </h1>
        <p className='text-xl text-gray-500 text-center mt-7'>
          Over 400+ consultants with expertise ranging from Hemp to SaaS, from Boston to Dubai.
        </p>

        <div className="mt-16 flex flex-col md:flex-row gap-8">
          <Card
            title="PRODUCT ENGINEERING"
            heading="Launch your tech-product, hire your 1st or 100th developer."
            description="Surge provides flexible teams, advice, and support to take you from launching your MVP and sprint planning to handling large-scale enterprise projects."
            isProduct={true}
          />

          <Card
            title="GROWTH MARKETING"
            heading="Go to market, find your customers, and supercharge marketing."
            description="Surge provides consulting and qualified marketing professionals who have managed millions in ad spends with solid performance benchmarks."
            isProduct={false}
          />
        </div>
      </div>
    </div>
  )
}

export default Production