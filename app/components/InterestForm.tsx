'use client'

import { useState } from 'react'

export default function InterestForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const [loading, setLoading] = useState(false) // State to handle button disable

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true) // Disable the button
    try {
      const response = await fetch('https://formsubmit.co/7b3455a6da4a99454bfdc2c3679155e0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        console.log('Form submitted successfully:', response);
        // Reset form after successful submission
        setFormData({ name: '', email: '', company: '', message: '' })
      } else {
        throw new Error("Error in submitting the form");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false) // Re-enable the button
    }
  }

  return (
    <section id="interest-form" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Get Started with FilterPixel</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="company" className="block mb-2 text-gray-700">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>
            <div className="w-full flex flex-row justify-center">
            <button
                type="submit"
                className={`btn-primary bg-primary text-white px-2 py-1 hover:bg-opacity-80 transition duration-200 ${
                  loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={loading} // Disable the button
              >
                {loading ? 'Please wait' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

