
import Link from 'next/link';
import React from 'react'
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { MdGroupAdd } from "react-icons/md";


const Page = () => {
    
    return (
        <div className="px-28 w-full pt-12 min-h-screen">
            <div className="items-center flex flex-col justify-center text-4xl sm:text-5xl lg:text-7xl font-bold">
                <p>Hire the top 1% of</p>
                <p className="py-2">
                    <span className="bg-gradient-to-r from-pink-500 to-blue-800 bg-clip-text text-transparent">engineering</span> talent
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl text-center font-light text-gray-500 py-6 sm:py-8 lg:py-10">
                    Leverage elite engineering expertise trusted by billion-dollar companies and government institutions to build systems that serve millions daily.
                </p>
            </div>
            <div className="grid grid-cols-2 grid-rows-1 m-2">
                <div className='rounded-sm h-[32rem]'>
                    <div className='flex flex-col justify-center items-center h-full'>
                        <h1 className='text-5xl font-bold px-5'>Full stack engineering team</h1>
                        <p className='text-lg text-gray-500 text-start px-5 pt-11'>
                            Our full stack engineering team combines expertise across front-end, back-end, and everything in between to build seamless, scalable applications. From concept to deployment, we create intuitive, high-performing systems that millions rely on, delivering solutions that support business growth and adapt to evolving needs.
                        </p>
                    </div>
                </div>
                <div className='rounded-sm h-[32rem]'>
                    <div className='bg-gradient-to-r from-[#FF3535] to-black h-full rounded-xl'>

                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-1 m-2">
                <div className='rounded-sm h-[32rem]'>
                    <div className='bg-gradient-to-r from-[#C20027] to-[#0A2368] h-full rounded-xl'>

                    </div>
                </div>
                <div className='rounded-sm h-[32rem]'>
                    <div className='flex flex-col justify-center items-center h-full'>
                        <h1 className='text-5xl items-start font-bold px-5'>Cloud computing</h1>
                        <p className='text-lg text-gray-500 text-start px-5 pt-11'>
                            We design, implement, and manage cloud infrastructures that empower organizations to scale rapidly and securely. Our cloud solutions enable billion-dollar enterprises and government agencies to operate with flexibility, optimize resources, and stay resilient, handling demands in even the most data-intensive environments.
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-1 m-2">
                <div className='rounded-sm h-[32rem]'>
                    <div className='flex flex-col justify-center items-center h-full'>
                        <h1 className='text-5xl items-start font-bold px-5'>Data science, AI/ML</h1>
                        <p className='text-lg text-gray-500 text-start px-5 pt-11'>
                            We harness the power of data science, AI, and machine learning to drive predictive analytics, automation, and intelligent decision-making. Our models enable businesses to stay ahead with insights that are both forward-thinking and grounded in real-world applications, unlocking new avenues for growth and innovation.
                        </p>
                    </div>
                </div>
                <div className='rounded-sm h-[32rem]'>
                    <div className='bg-[radial-gradient(circle_710px_at_5.2%_7.2%,_#2559DE_0%,_#2559DE_7.5%,_#04041D_44.7%)] h-full rounded-xl'>

                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-1 m-2">
                <div className='rounded-sm h-[32rem]'>
                    <div className='bg-gradient-to-r from-[#003D64] via-[#2F7FA4] to-[#1EC6C6] h-full rounded-xl'>

                    </div>
                </div>
                <div className='rounded-sm h-[32rem]'>
                    <div className='flex flex-col justify-center items-center h-full'>
                        <h1 className='text-5xl items-start font-bold px-5'>SEO Technologies</h1>
                        <p className='text-lg text-gray-500 text-start px-5 pt-11'>
                            We harness the power of data science, AI, and machine learning to drive predictive analytics, automation, and intelligent decision-making. Our models enable businesses to stay ahead with insights that are both forward-thinking and grounded in real-world applications, unlocking new avenues for growth and innovation.
                        </p>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="py-28 p-1">
                <div className="text-center space-y-4">
                    <h2 className="text-5xl font-bold">The Faster, Affordable, Better Solution</h2>
                    <p className="text-gray-500 max-w-3xl mx-auto">
                        Discover the advantages of choosing QuickEdit over a traditional editor. Say goodbye to
                        delays and elevate your content creation process.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    {/* 98% Card */}
                    <div className="bg-white rounded-lg p-8 shadow-lg text-center">
                        <div className="text-6xl font-bold mb-4">98%</div>
                        <div className="flex items-center justify-center space-x-2">
                            <span className="text-green-500">✓</span>
                            <p className="text-gray-600">faster than a traditional editor</p>
                        </div>
                    </div>

                    {/* 85% Card */}
                    <div className="bg-white rounded-lg p-8 shadow-lg text-center">
                        <div className="text-6xl font-bold mb-4">85%</div>
                        <div className="flex items-center justify-center space-x-2">
                            <span role="img" aria-label="money" className="text-yellow-500">✓</span>
                            <p className="text-gray-600">more affordable than a traditional editor</p>
                        </div>
                    </div>

                    {/* 120% Card */}
                    <div className="bg-white rounded-lg p-8 shadow-lg text-center">
                        <div className="text-6xl font-bold mb-4">120%</div>
                        <div className="flex items-center justify-center space-x-2">
                            <span role="img" aria-label="rocket" className="text-red-500">✓</span>
                            <p className="text-gray-600">increased efficiency and features</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-5 h-[24rem] mb-12 p-2 gap-6">
                {/* Left Side (60%) */}
                <div className="col-span-3 bg-gradient-to-r from-[#FF3535] to-black rounded-l-lg">
                    <div className='flex flex-row justify-start items-start m-6'>
                        <button className="bg-transparent hover:bg-black text-white font-semibold hover:text-white py-2 px-3 border border-gray-700 hover:border-transparent rounded-2xl">
                            Careers
                        </button>
                    </div>
                    <div className='flex flex-row justify-center items-center px-6'>
                        <h1 className='text-5xl text-white items-center font-bold'>Interested in joining our team of experts?</h1>
                    </div>
                    <div className='flex flex-row justify-between items-center px-6 pt-12'>
                        <div>
                            <p className='text-gray-400 text-lg font-semibold'>
                                Explore Opportunities
                            </p>
                        </div>
                        <div>
                            <button>
                                <BsArrowUpRightCircleFill className='text-7xl text-gray-300' />
                            </button>
                        </div>
                    </div>
                </div>
                {/* Right Side (40%) */}
                <div className="col-span-2 bg-black rounded-r-lg">
                    <div className='flex flex-row justify-start items-start m-6'>
                        <button>
                            <MdGroupAdd className='text-3xl text-gray-300' />
                        </button>
                    </div>
                    <div className='flex flex-row justify-center items-center px-6'>
                        <h1 className='text-5xl text-white items-center font-bold'>
                            Ready to meet your technology team ?
                        </h1>
                    </div>
                    <div className='flex flex-row justify-between items-center px-6 pt-12'>
                        <Link href="/contact">
                            <div className='text-gray-400 text-xl font-semibold'>
                                Contact Us
                            </div>
                        </Link>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page