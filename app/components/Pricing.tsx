'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('standard')

  const standardTiers = [
    { name: "1 - 5 Events", price: "40,000 INR", discount: "No Discount" },
    { name: "6 - 15 Events", price: "36,000 INR", discount: "10% Discount" },
    { name: "16 - 30 Events", price: "34,000 INR", discount: "15% Discount" },
    { name: "31+ Events", price: "32,000 INR", discount: "20% Discount" }
  ]

  const enterpriseTiers = [
    { name: "Up to 20 Events", price: "8,00,000 INR/year", description: "For enterprises hosting fewer events" },
    { name: "Up to 50 Events", price: "13,00,000 INR/year", description: "For medium-scale usage" },
    { name: "Unlimited Events", price: "18,00,000 INR/year", description: "Highly economical for frequent events" }
  ]

  return (
    <section id="pricing" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">Pricing</h2>
        <div className="flex justify-center mb-8">
          <button
            className={`px-4 py-2 rounded-l-full ${activeTab === 'standard' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setActiveTab('standard')}
          >
            Standard
          </button>
          <button
            className={`px-4 py-2 rounded-r-full ${activeTab === 'enterprise' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setActiveTab('enterprise')}
          >
            Enterprise
          </button>
        </div>
        {activeTab === 'standard' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {standardTiers.map((tier, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover-scale animate-fadeIn">
                <h3 className="text-lg font-semibold mb-2 text-primary">{tier.name}</h3>
                <p className="text-2xl font-bold mb-2 text-gray-800">{tier.price}</p>
                <p className="text-sm text-accent">{tier.discount}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-4">
            {enterpriseTiers.map((tier, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover-scale animate-fadeIn">
                <h4 className="text-lg font-semibold mb-2 text-primary">{tier.name}</h4>
                <p className="text-2xl font-bold mb-2 text-gray-800">{tier.price}</p>
                <p className="text-sm text-gray-600">{tier.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

