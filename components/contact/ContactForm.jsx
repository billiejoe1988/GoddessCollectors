"use client"
import { useState } from "react";
import Button from "../ui/Button";

const ContactForm = () => {
    const [values, setValues] = useState({
        email: '',
        text: ''
    });

    const handleChange = (e) => { 
        setValues({ 
            ...values, 
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetch('http://localhost:3000/api/contact', {
            method: 'POST',
            body: JSON.stringify(values)
        });
    };

    return (
        <form onSubmit={handleSubmit} className="my-12 py-12">
            <input
                type="email"
                required
                placeholder="Your email"
                className="p-4 rounded-lg w-full border border-gray-300 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
                name="email"
                onChange={handleChange}
            />
            <textarea
                required
                placeholder="Read a message"
                className="resize-none p-4 rounded-lg w-full h-48 border border-gray-300 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out mt-4"
                name="text"
                onChange={handleChange}
            />

            <Button type="submit" className="my-6">Send</Button>
        </form>
    );
};

export default ContactForm;
