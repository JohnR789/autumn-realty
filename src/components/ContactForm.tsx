import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send form data to your backend here.
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white rounded-xl p-8 shadow-lg flex flex-col gap-6">
      <h2 className="text-3xl font-bold text-autumn-dark mb-2">Contact John</h2>
      <div>
        <label htmlFor="name" className="block text-autumn-dark font-medium mb-1">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full rounded border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-autumn"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-autumn-dark font-medium mb-1">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full rounded border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-autumn"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-autumn-dark font-medium mb-1">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={handleChange}
          className="w-full rounded border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-autumn"
        />
      </div>
      <button
        type="submit"
        className="bg-autumn-dark text-white rounded-full px-7 py-3 text-lg font-semibold shadow-md hover:bg-autumn transition"
        disabled={sent}
      >
        {sent ? "Message Sent!" : "Send Message"}
      </button>
      {sent && (
        <p className="text-autumn font-semibold text-center">Thank you for reaching out! We'll be in touch soon.</p>
      )}
    </form>
  );
};

export default ContactForm;
