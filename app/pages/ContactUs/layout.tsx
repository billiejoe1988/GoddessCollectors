import React, { ReactNode } from 'react';
import { FaInstagram, FaLinkedin, FaXing } from 'react-icons/fa';

export default function ContactoLayout({ children }: { children: ReactNode }) {
    return (
        <>
            {children}
            <footer className="bg-gray-200 w-full py-8">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
                    <h4 className="text-2xl text-gray-800 mb-4 md:mb-0">Follow us on Social Media!!!</h4>
                    <div className="flex items-center space-x-4">
                        <a href="https://www.instagram.com/" className="text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out"><FaInstagram size={24} color="#d75900" /></a>
                        <a href="https://www.linkedin.com/" className="text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out"><FaLinkedin size={24} color="#d75900" /></a>
                        <a href="https://x.com/" className="text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out"><FaXing size={24} color="#d75900" /></a>
                    </div>
                </div>
            </footer>
        </>
    );
}
