import { CheckCircle } from "lucide-react";

export default function Benefits() {
  const benefits = ["High Post-Event Engagement", "Impactful Sponsor Visibility", "Hassle-free Photo Sharing", "Real-time Social Media Presence", "Increased Brand Awareness", "Enhanced Attendee Experience"];

  return (
    <section
      id="benefits"
      className="py-16 bg-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Benefits for Event Organizers</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start space-x-3 justify-center"
            >
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
