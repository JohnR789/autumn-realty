import React from "react";
import ContactForm from "../components/ContactForm";

const Contact: React.FC = () => (
  <section className="max-w-2xl mx-auto py-16 px-4">
    <h2 className="text-4xl md:text-5xl font-bold text-autumn-dark mb-8">Contact John</h2>
    <ContactForm />
  </section>
);

export default Contact;

