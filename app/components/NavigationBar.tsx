"use client";
import React, { useState, useRef } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { FaBalanceScale, FaBolt, FaServer, FaUserTag } from "react-icons/fa";
import { IoMdPulse } from "react-icons/io";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const menuItems = [
        { name: "Profile", path: "/profile" },
        { name: "Dashboard", path: "/dashboard" },
        { name: "Activity", path: "/activity" },
        { name: "Analytics", path: "/analytics" },
        { name: "System", path: "/system" },
        { name: "Deployments", path: "/deployments" },
        { name: "My Settings", path: "/my-settings" },
        { name: "Team Settings", path: "/team-settings" },
        { name: "Help & Feedback", path: "/help-feedback" },
        { name: "Log Out", path: "/logout" },
    ];

    const icons = {
        chevron: <FiChevronDown className="text-white" size={16} />,
        scale: <FaBalanceScale className="text-warning" size={20} />,
        activity: <IoMdPulse className="text-secondary" size={20} />,
        flash: <FaBolt className="text-primary" size={20} />,
        server: <FaServer className="text-success" size={20} />,
        user: <FaUserTag className="text-danger" size={20} />,
        menu: <FiMenu className="text-white" size={24} />,
        close: <FiX className="text-white" size={24} />
    };

    const handleMouseEnter = () => {
        if (timeoutRef.current !== null) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => setIsOpen(true), 300);
    };

    const handleMouseLeave = () => {
        if (timeoutRef.current !== null) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => setIsOpen(false), 300);
    };

    return (
        <div className="w-full sticky top-0 right-0 left-0 z-50">
            <Navbar 
                isMenuOpen={isMenuOpen}
                onMenuOpenChange={setIsMenuOpen} 
                maxWidth="full" 
                classNames={{ 
                    wrapper: "px-0",
                    toggle: "text-white"
                }} 
                className="bg-[#000040] py-3 px-5 md:px-28"
            >
                <NavbarContent className="md:hidden" justify="start">
                    <NavbarMenuToggle
                        icon={isMenuOpen ? icons.close : icons.menu}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    />
                </NavbarContent>

                <NavbarBrand>
                    <Link href="/" className="font-bold text-inherit text-white no-underline">
                        E-Scope
                    </Link>
                </NavbarBrand>

                {/* Main Navigation for Larger Screens */}
                <NavbarContent className="hidden md:flex gap-8" justify="center">
                    <Dropdown isOpen={isOpen} onOpenChange={setIsOpen}>
                        <NavbarItem>
                            <DropdownTrigger>
                                <div
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <Button 
                                        disableRipple
                                        className="p-0 bg-transparent text-white text-md "
                                        endContent={icons.chevron}
                                        radius="sm"
                                        // variant="light"
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
                        <Link href="#" className="text-white">Customers</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="#" className="text-white">Integrations</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="#" className="text-white">Services</Link>
                    </NavbarItem>
                </NavbarContent>

                {/* Contact Us Button */}
                <NavbarContent justify="end">
                    <NavbarItem>
                        <Button as={Link} href="#" className="bg-[#FF3841] text-white rounded-md px-4 py-2 md:px-10">
                            Contact Us
                        </Button>
                    </NavbarItem>
                </NavbarContent>

                {/* Mobile Menu */}
                <NavbarMenu className="bg-[#000040] mt-2">
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={item.name}>
                            <Link
                                href={item.path}
                                className="w-full text-white hover:text-white/60"
                                color={
                                    index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                                }
                                size="lg"
                            >
                                {item.name}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </div>
    );
}
