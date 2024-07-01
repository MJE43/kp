import Layout from '../../components/Layout';

export default function ServicesPage() {
  const services = [
    {
      title: 'Residential Electrical Services',
      description:
        'From basic repairs to full home rewiring, we provide comprehensive electrical services for homeowners.',
      items: [
        'Wiring and rewiring',
        'Electrical panel upgrades',
        'Lighting installation',
        'Outlet installation and repair',
        'Ceiling fan installation',
      ],
    },
    {
      title: 'Commercial Electrical Services',
      description:
        'Keep your business running smoothly with our reliable commercial electrical solutions.',
      items: [
        'Commercial wiring and lighting',
        'Energy-efficient upgrades',
        'Electrical system maintenance',
        'Power distribution',
        'Emergency backup systems',
      ],
    },
    {
      title: 'Emergency Electrical Services',
      description:
        '24/7 emergency electrical service to keep you safe and powered.',
      items: [
        'Power outage troubleshooting',
        'Electrical fire safety inspections',
        'Surge protection',
        'Emergency repairs',
        'Storm damage assessment and repair',
      ],
    },
    {
      title: 'Energy-Efficient Solutions',
      description:
        'Save money and reduce your carbon footprint with our energy-efficient electrical upgrades.',
      items: [
        'LED lighting installation',
        'Smart home automation',
        'Energy audits',
        'Solar panel installation',
        'EV charging station installation',
      ],
    },
    {
      title: 'Electrical Safety Inspections',
      description:
        'Ensure your property meets all safety standards with our thorough electrical inspections.',
      items: [
        'Comprehensive safety audits',
        'Code compliance checks',
        'Insurance inspection reports',
        'Pre-purchase inspections',
        'Annual safety maintenance plans',
      ],
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 bg-gray-100">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Our Electrical Services
        </h1>
        <p className="text-xl mb-12 text-center text-gray-700">
          KPPower Electrical Services offers a wide range of electrical
          solutions for residential and commercial clients in Phoenix, Arizona.
        </p>

        {services.map((service, index) => (
          <div
            key={index}
            className="mb-12 bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div className="bg-blue-600 text-white p-4">
              <h2 className="text-2xl font-semibold">{service.title}</h2>
            </div>
            <div className="p-6 text-gray-800">
              <p className="mb-4">{service.description}</p>
              <ul className="list-disc pl-6">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Ready to get started?
          </h3>
          <p className="mb-6 text-gray-700">
            Contact us today for a free estimate on your electrical project.
          </p>
          <a
            href="/contact"
            className="bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-full hover:bg-yellow-400 transition duration-300"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </Layout>
  );
}
