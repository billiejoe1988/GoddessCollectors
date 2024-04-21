import React, { ReactNode } from 'react';

export default function ContactoLayout({ children }: { children: ReactNode }) {
    return (
        <>
            {children}
            <footer className="bg-gray-200 w-full">
                <div className="container m-auto py-4 flex items-center gap-4">
                    <h4 className="text-2xl">Follow us on Social Media!!!</h4>
                    <a href="https://www.instagram.com/">Instagram</a>
                    <a href="https://www.linkedin.com/">LinkedIn</a>
                    <a href="https://twitter.com/">Twitter</a>
                </div>
            </footer>
        </>
    );
}
