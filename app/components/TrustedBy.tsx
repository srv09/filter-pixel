import Image from "next/image";

export default function TrustedBy() {
  const clients = [
    { name: "Google", logo: "/google-logo.png" },
    { name: "TImes Now", logo: "/times-now.png" },
    { name: "Lupin Pharma", logo: "/lupin-pharma.png" },
    { name: "Dholakia Ventures", logo: "/dholakia-ventures.png" },
    { name: "ET Edge", logo: "/et-edge.png" },
    { name: "Outlook India", logo: "/outlook-india.png" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Trusted By</h2>
        <div className="flex flex-wrap justify-center items-center gap-10">
          {clients.map((client) => (
            <div
              key={client.name}
              className="w-44 h-20 flex items-center justify-center"
            >
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                width={120}
                height={50}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
