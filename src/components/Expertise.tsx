'use client';

export default function Expertise() {
  const expertiseAreas = [
    {
      title: "Enterprise SaaS Engineering",
      description: "Robust, secure, and compliance-ready platforms designed for high availability and infinite scale.",
      features: ["Multi-tenant architecture", "99.99% uptime SLA", "SOC 2 & HIPAA compliance", "Automated CI/CD pipelines"]
    },
    {
      title: "Human-Centered Product Design",
      description: "Data-driven UX/UI frameworks that drive adoption, retention, and measurable ROI.",
      features: ["User research & personas", "A/B testing optimization", "Accessibility compliance", "Design system architecture"]
    },
    {
      title: "AI-First Development",
      description: "Harnessing generative intelligence for code automation, workflow orchestration, and predictive analytics.",
      features: ["LLM integration", "Automated code generation", "Predictive analytics", "MLOps deployment"]
    },
    {
      title: "Systems Integration",
      description: "Seamless interoperability across APIs, cloud environments, and third-party platforms.",
      features: ["RESTful & GraphQL APIs", "Event-driven architecture", "Legacy modernization", "Multi-cloud orchestration"]
    }
  ];

  return (
    <section id="expertise" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At the crossroads of innovation and reliability, we deliver solutions that transform businesses
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#faf8f3] to-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {area.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {area.description}
              </p>
              <ul className="space-y-3">
                {area.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-[#2d5a4b] rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#2d5a4b] to-[#4a8b7c] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg mb-6 opacity-90">
              Let&apos;s discuss how Deep Pine can accelerate your digital transformation journey.
            </p>
            <a
              href="https://calendly.com/deeppine"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-[#2d5a4b] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
            >
              Book Consultation
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}