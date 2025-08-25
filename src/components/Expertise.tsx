'use client';

import { useState } from 'react';

export default function Expertise() {
  const [activeTab, setActiveTab] = useState(0);

  const expertiseAreas = [
    {
      title: "Enterprise SaaS Engineering",
      icon: "🏢",
      description: "Robust, secure, and compliance-ready platforms designed for high availability and infinite scale.",
      details: [
        "Multi-tenant architecture with data isolation",
        "99.99% uptime SLA guarantee",
        "GDPR, HIPAA, and SOC 2 compliance",
        "Automated CI/CD pipelines",
        "Microservices and containerization",
        "Global CDN and edge computing"
      ]
    },
    {
      title: "Human-Centered Product Design",
      icon: "🎨",
      description: "Data-driven UX/UI frameworks that drive adoption, retention, and measurable ROI.",
      details: [
        "User research and persona development",
        "A/B testing and conversion optimization",
        "Responsive design systems",
        "Accessibility compliance (WCAG 2.1)",
        "Interactive prototypes and user testing",
        "Design token architecture"
      ]
    },
    {
      title: "AI-First Development",
      icon: "🤖",
      description: "Harnessing generative intelligence for code automation, workflow orchestration, and predictive analytics.",
      details: [
        "Large Language Model integration",
        "Automated code generation and review",
        "Predictive analytics and forecasting",
        "Natural language processing",
        "Computer vision capabilities",
        "MLOps and model deployment"
      ]
    },
    {
      title: "Systems Integration",
      icon: "🔗",
      description: "Seamless interoperability across APIs, cloud environments, and third-party platforms.",
      details: [
        "RESTful and GraphQL API design",
        "Event-driven architecture",
        "Message queuing and streaming",
        "Legacy system modernization",
        "Multi-cloud orchestration",
        "Real-time data synchronization"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At the crossroads of innovation and reliability, we deliver solutions that transform businesses
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {expertiseAreas.map((area, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === index
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-purple-500'
              }`}
            >
              <span className="mr-2 text-2xl">{area.icon}</span>
              {area.title}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {expertiseAreas[activeTab].title}
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                {expertiseAreas[activeTab].description}
              </p>
              <ul className="space-y-3">
                {expertiseAreas[activeTab].details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-cyan-100 rounded-2xl flex items-center justify-center">
                <div className="text-[150px] animate-pulse">
                  {expertiseAreas[activeTab].icon}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}