import Image from 'next/image';
import React from 'react';
import slider1 from '../assets/slider1.jpg';

const Slider = () => {
    return (
        <div className='px-28 w-full h-screen'>
            <div className='flex justify-center items-center mx-auto'>
                <div>
                    <h1 className='text-4xl md:text-5xl text-center font-bold'>
                        Don’t take our word for it
                    </h1>
                    <p className='text-xl text-gray-500 text-center mt-5 p-1'>
                        We work with the best in the business with 400+ marketers, developers, and strategists helping achieve client goals and exceed expectations with our product and services.
                    </p>
                </div>
            </div>
            <div className='w-full h-[32rem] bg-slate-300 rounded-xl my-5'>
                <div className='w-full h-full flex justify-center items-center'>
                    <div className='flex justify-center items-center'>
                        {/* <Image
                            alt="NextUI Fruit Image with Zoom"
                            src={slider1}
                            width={1000}
                            height={300}
                            unoptimized
                        /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;