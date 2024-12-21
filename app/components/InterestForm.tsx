'use client'

import { useState } from 'react'
import { FilloutStandardEmbed } from "@fillout/react";
import "@fillout/react/style.css"

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
      {/* <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg"> */}
          <div style={{width: '100%', height: '100%'}}>

            <FilloutStandardEmbed filloutId='1QghLf2isZus' inheritParameters dynamicResize/>
          </div>
        {/* </div> */}
      {/* </div> */}
    </section>
  )
}

