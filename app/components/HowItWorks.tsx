import { Camera, Cpu, Share2 } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: <Camera className="w-12 h-12 text-primary" />,
      title: "Capture",
      description: "Event photographers seamlessly upload high-quality images to our secure platform."
    },
    {
      icon: <Cpu className="w-12 h-12 text-primary" />,
      title: "Process",
      description: "Our advanced AI algorithms select the best shots and apply professional-grade edits."
    },
    {
      icon: <Share2 className="w-12 h-12 text-primary" />,
      title: "Share",
      description: "Attendees receive and share their professionally edited photos in real-time."
    }
  ]

  return (
    <section id="how-it-works" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">How FilterPixel Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

