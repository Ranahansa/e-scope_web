import React from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Link } from '@nextui-org/react';
import { GoChevronDown } from "react-icons/go";

const NavigationBar = () => {
    return (
        <div className="bg-[#00365C] py-3">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold text-white">E-Scope</h1>
                <ul className="flex space-x-7 font-bold">
                    <li>
                        <Link className="text-white hover:text-gray-300">Home</Link>
                    </li>
                    <li className="relative">
                        <Dropdown>
                            <DropdownTrigger>
                                <button className="flex items-center text-white hover:text-gray-300 focus:outline-none focus:ring-0">
                                    Services <GoChevronDown className="w-4 h-4 ml-1 mt-1" />
                                </button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Services Dropdown" color="primary" variant="light">
                                <DropdownItem>
                                    <Link className="block text-white bg-gray-700 px-4 py-2 rounded-lg" href="/service1">Service 1</Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link className="block text-white bg-gray-700 px-4 py-2 rounded-lg" href="/service2">Service 2</Link>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </li>
                    <li className="relative">
                        <Dropdown>
                            <DropdownTrigger>
                                <button className="flex items-center text-white hover:text-gray-300 focus:outline-none focus:ring-0">
                                    Portfolio <GoChevronDown className="w-4 h-4 ml-1 mt-1" />
                                </button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Portfolio Dropdown" color="primary" variant="light">
                                <DropdownItem>
                                    <Link className="block text-white bg-gray-700 px-4 py-2 rounded-lg" href="/portfolio1">Portfolio 1</Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link className="block text-white bg-gray-700 px-4 py-2 rounded-lg" href="/portfolio2">Portfolio 2</Link>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </li>
                    <li>
                        <Link className="text-white hover:text-gray-300">Careers</Link>
                    </li>
                    <li>
                        <Link className="text-white hover:text-gray-300">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavigationBar;