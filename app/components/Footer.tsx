import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#000040] text-white px-6 py-10 md:px-28 md:py-16">
            {/* Main Footer Content */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 mb-12">
                {/* Capabilities Section */}
                <div>
                    <h3 className="font-semibold mb-4 text-lg">CAPABILITIES</h3>
                    <ul className="space-y-3">
                        <li><Link href="/product" className="hover:text-gray-300">Product</Link></li>
                        <li><Link href="/growth" className="hover:text-gray-300">Growth</Link></li>
                    </ul>
                </div>

                {/* Company Section */}
                <div>
                    <h3 className="font-semibold mb-4 text-lg">COMPANY</h3>
                    <ul className="space-y-3">
                        <li><Link href="/clients" className="hover:text-gray-300">Clients</Link></li>
                        <li><Link href="/about" className="hover:text-gray-300">About us</Link></li>
                    </ul>
                </div>

                {/* Careers Section */}
                <div>
                    <h3 className="font-semibold mb-4 text-lg">CAREERS</h3>
                    <ul className="space-y-3">
                        <li><Link href="/careers" className="hover:text-gray-300">Careers</Link></li>
                        <li><Link href="/internships" className="hover:text-gray-300">Internships</Link></li>
                    </ul>
                </div>

                {/* Resources Section */}
                <div>
                    <h3 className="font-semibold mb-4 text-lg">RESOURCES</h3>
                    <ul className="space-y-3">
                        <li><Link href="/blog" className="hover:text-gray-300">Blog</Link></li>
                        <li><Link href="/academy" className="hover:text-gray-300">Academy</Link></li>
                        <li><Link href="/benchmarks" className="hover:text-gray-300">Benchmarks guide</Link></li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div>
                    <h3 className="font-semibold mb-4 text-lg">CONTACT</h3>
                    <ul className="space-y-3">
                        <li><Link href="/contact" className="hover:text-gray-300">Contact us</Link></li>
                    </ul>
                </div>

                {/* Legal Section */}
                <div>
                    <h3 className="font-semibold mb-4 text-lg">LEGAL</h3>
                    <ul className="space-y-3">
                        <li><Link href="/privacy" className="hover:text-gray-300">Privacy Policy</Link></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700">
                {/* Copyright */}
                <div className="text-gray-400 mb-4 md:mb-0">
                    © Copyright 2024 E-Scope International.
                </div>

                {/* Social Icons */}
                <div className="flex space-x-6">
                    <Link href="#" className="text-gray-400 hover:text-white">
                        <FaFacebookF size={20} />
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-white">
                        <FaInstagram size={20} />
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-white">
                        <FaLinkedinIn size={20} />
                    </Link>
                    <Link href="#" className="text-gray-400 hover:text-white">
                        <FaYoutube size={20} />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
