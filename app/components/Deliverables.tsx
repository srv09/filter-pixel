import { Check } from 'lucide-react'

export default function Deliverables() {
  const deliverables = [
    "Live photo sharing by face recognition",
    "Branded QR codes for receiving photos",
    "Branded Watermark on all photos",
    "Custom Event Analytics Report",
    "Separate Chief-Guest gallery",
    "Full gallery access for the organizer",
    "AI-based photo selection to show the best photos",
    "Event on-ground experts to handle smooth delivery"
  ]

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">What We Deliver</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {deliverables.map((item, index) => (
            <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-md hover-scale animate-fadeIn">
              <Check className="text-accent mr-2 mt-1 flex-shrink-0 w-5 h-5" />
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

