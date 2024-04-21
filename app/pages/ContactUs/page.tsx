import React from 'react'
import ContactForm from "@/components/contact/ContactForm";

const Contact = () => {
  return (
    <>
        <main className="container m-auto">
            <h1 className="text-4xl text-blue-600 my-4">
                Contact
            </h1>
            
            <hr/>
            <ContactForm/>
        </main>
    </>
)
}
export default Contact
