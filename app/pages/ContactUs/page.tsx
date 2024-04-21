import React from 'react'
import ContactForm from "@/components/contact/ContactForm";

const Contact = () => {
  return (
    <>
        <main className="container m-auto px-16 py-5">
            <h1 className="text-4xl text-orange-400 my-6">
                Contact
            </h1>
            
            <hr/>
            <ContactForm/>
        </main>
    </>
)
}
export default Contact
