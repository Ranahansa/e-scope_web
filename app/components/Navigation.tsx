import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { FiChevronDown } from "react-icons/fi";
import { FaBalanceScale, FaLock, FaBolt, FaServer, FaUserTag } from "react-icons/fa";
import { IoMdPulse } from "react-icons/io";

export default function Navigation() {
    const icons = {
        chevron: <FiChevronDown className="text-white" size={16} />,
        scale: <FaBalanceScale className="text-warning" size={20} />,
        activity: <IoMdPulse className="text-secondary" size={20} />,
        flash: <FaBolt className="text-primary" size={20} />,
        server: <FaServer className="text-success" size={20} />,
        user: <FaUserTag className="text-danger" size={20} />,
    };

    return (
        <Navbar maxWidth="full" className="bg-[#000040] py-2 px-6 md:px-8 lg:px-16">
            <NavbarBrand>
                <Link href="/" className="font-bold text-inherit text-white no-underline">
                    E-Scope
                </Link>
            </NavbarBrand>
            <NavbarContent className="hidden md:flex gap-12" justify="center">
                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-white text-md"
                                endContent={icons.chevron}
                                radius="sm"
                                variant="light"
                            >
                                Features
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu aria-label="ACME features" className="w-[280px]">
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
                    <Button as={Link} href="#" className="bg-[#FF3841] text-white rounded-md px-4 py-2">
                        Contact Us
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}