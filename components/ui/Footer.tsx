import React from "react";
import { LogoXl } from "./LogoXl.js";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
                <div className="flex items-center">
                  <LogoXl />
                </div>
                <div className="flex flex-col items-center sm:items-start mt-4 sm:mt-0">
                    <h2 className="text-xl py-3"> Contact Us </h2>
                    <p>Email: example@example.com</p>
                    <p>Phone: +1234567890</p>
                    <p>Address: Boulevard of Broken Dreams 431 st </p>
                </div>
                <div className="mt-4 sm:mt-0">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.991329327734!2d-0.12775834893602942!3d51.507350153571034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ce235daddd%3A0x717f59cc29c48012!2sBuckingham%20Palace!5e0!3m2!1sen!2suk!4v1648883078037!5m2!1sen!2suk" 
                        width="300" 
                        height="150" 
                        style={{border:0}}
                        loading="lazy">
                    </iframe>
                </div>
            </div>
        </footer>
    );
}