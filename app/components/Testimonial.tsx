import Image from 'next/image'

export default function Testimonial() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Hear from Our Clients</h2>
          <div className="aspect-w-16 aspect-h-9 mb-8">
            <iframe
              src="https://www.youtube.com/embed/m_GIl2zw1c0"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg shadow-lg"
            ></iframe>
          </div>
          <blockquote className="text-2xl font-semibold text-center mb-4 text-gray-700">
            "FilterPixel transformed our event experience with real-time photo distribution"
          </blockquote>
          <p className="text-center text-gray-600">Farish CV, Program Head - Google India</p>
        </div>
      </div>
    </section>
  )
}

