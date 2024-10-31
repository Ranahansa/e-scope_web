import React from 'react'
import { HiArrowRight } from "react-icons/hi2";

const SubContact = () => {
    return (
        <div className="text-black bg-white w-full px-28 h-screen ">
            <div className="flex flex-col items-center h-full justify-center">
                <div className="flex flex-col items-center text-center space-y-3">
                    <h1 className="text-5xl font-bold">How can we help?</h1>
                    <p className="text-5xl bg-gradient-to-r from-pink-500 to-blue-800 bg-clip-text text-transparent font-bold">
                        Talk to our experts today.
                    </p>
                    <div className="mt-5">
                        <button className="bg-gradient-to-r from-pink-500 to-blue-800 text-white w-60 py-2 px-6 rounded mt-9 text-3xl font-semibold flex items-center justify-center">
                        Contact Us
                        <span className="ml-4">
                            <HiArrowRight  size={24}/>
                        </span>
                    </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SubContact