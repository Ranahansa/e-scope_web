import React, { useState, useRef } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { FiChevronDown } from "react-icons/fi";
import { FaBalanceScale, FaBolt, FaServer, FaUserTag } from "react-icons/fa";
import { IoMdPulse } from "react-icons/io";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const icons = {
        chevron: <FiChevronDown className="text-white" size={16} />,
        scale: <FaBalanceScale className="text-warning" size={20} />,
        activity: <IoMdPulse className="text-secondary" size={20} />,
        flash: <FaBolt className="text-primary" size={20} />,
        server: <FaServer className="text-success" size={20} />,
        user: <FaUserTag className="text-danger" size={20} />,
    };

    const handleMouseEnter = () => {
        if (timeoutRef.current !== null) {
            if (timeoutRef.current !== null) {
                clearTimeout(timeoutRef.current);
            }
        }
        timeoutRef.current = setTimeout(() => setIsOpen(true), 300);
    };

    const handleMouseLeave = () => {
        if (timeoutRef.current !== null) {
            if (timeoutRef.current !== null) {
                clearTimeout(timeoutRef.current);
            }
        }
        timeoutRef.current = setTimeout(() => setIsOpen(false), 300);
    };

    return (
        <Navbar maxWidth="full" className="bg-[#000040] py-3 px-4 md:px-8 lg:px-16 ">
            <NavbarBrand>
                <Link href="/" className="font-bold text-inherit text-white no-underline">
                    E-Scope
                </Link>
            </NavbarBrand>
            <NavbarContent className="hidden md:flex gap-12" justify="center">
                <Dropdown isOpen={isOpen} onOpenChange={setIsOpen}>
                    <NavbarItem>
                        <DropdownTrigger>
                            <div
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Button
                                    disableRipple
                                    className="p-0 bg-transparent data-[hover=true]:bg-transparent text-white text-md"
                                    endContent={icons.chevron}
                                    radius="sm"
                                    variant="light"
                                >
                                    Features
                                </Button>
                            </div>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu 
                        aria-label="ACME features" 
                        className="w-[280px]"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <DropdownItem key="autoscaling" startContent={icons.scale}>
                            Autoscaling
                        </DropdownItem>
                        <DropdownItem key="usage_metrics" startContent={icons.activity}>
                            Usage Metrics
                        </DropdownItem>
                        <DropdownItem key="production_ready" startContent={icons.flash}>
                            Production Ready
                        </DropdownItem>
                        <DropdownItem key="99_uptime" startContent={icons.server}>
                            +99% Uptime
                        </DropdownItem>
                        <DropdownItem key="supreme_support" startContent={icons.user}>
                            +Supreme Support
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <NavbarItem>
                    <Link href="#" className="text-white">
                        Customers
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="#" className="text-white">
                        Integrations
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="#" className="text-white">
                        Services
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} href="#" className="bg-[#FF3841] text-white rounded-md px-10 py-2">
                        Contact Us
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}