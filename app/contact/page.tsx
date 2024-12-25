"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FormData } from '@/types';

// Define types for form data


const page: React.FC = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    goal: '',
    description: '',
    website: '',
    contactNumber: '',
    consent: false,
  });

  // Handle input change with proper typing for events
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle form submission with type annotation for event
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to an API)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="px-4 md:px-28 w-full py-10">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl bg-gradient-to-r from-pink-500 to-blue-800 bg-clip-text text-transparent font-bold">Contact Us</h1>
        <p className="text-xl text-gray-500 mt-5 py-1 px-8">
          Interested in working with us? Let us know your expectations and specific needs. Reach out today, and let’s explore how we can collaborate effectively!
        </p>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-10 p-8 bg-white rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block font-semibold">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block font-semibold">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block font-semibold">Email <span className="text-red-500">*</span></label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold">
            Which of these best describes what you're hoping to achieve working with us?
          </label>
          <div className="flex flex-col space-y-2">
            {['I want to build my software product', 'I want to increase engineering bandwidth', 'I want to take my product to market', 'I need to generate more leads/customers'].map((option) => (
              <label key={option} className="flex items-center">
                <input
                  type="radio"
                  name="goal"
                  value={option}
                  onChange={handleChange}
                  checked={formData.goal === option}
                  className="mr-2"
                  required
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block font-semibold">Tell us a little bit about what you need <span className="text-red-500">*</span></label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            rows={4}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold">Company Website <span className="text-red-500">*</span></label>
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="https://"
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold">Contact Number <span className="text-red-500">*</span></label>
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-sm text-gray-700">
            Please note that your email may be used for marketing purposes. You can choose to opt-out at any time.
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-3 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default page;
