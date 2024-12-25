import Image from 'next/image'
import React from 'react'
import tech2 from '../assets/tech2.jpg'
import tech1 from '../assets/tech1.jpg'


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
                <div className='border border-slate-500 rounded-xl h-[32rem]'>
                    <Image src={tech1} height={100} width={100} alt="tech1" layout="fill" objectFit="cover" className="rounded-xl" />
                </div>
                <div className='border border-slate-500 rounded-xl h-[32rem]'>

                </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-1 m-2">
                <div className='border border-slate-500 rounded-xl h-[32rem]'>

                </div>
                <div className='border border-slate-500 rounded-xl h-[32rem]'>

                </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-1 m-2">
                <div className='border border-slate-500 rounded-xl h-[32rem]'>

                </div>
                <div className='border border-slate-500 rounded-xl h-[32rem]'>

                </div>
            </div>
        </div>
    )
}

export default Page
