export default function Promise() {
  const benefits = [
    {
      metric: "10x",
      label: "Faster Innovation",
      description: "Accelerate your digital transformation journey"
    },
    {
      metric: "60%",
      label: "Cost Reduction",
      description: "Optimize resources with AI-driven efficiency"
    },
    {
      metric: "100%",
      label: "Commitment",
      description: "Your success is our only metric"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-[#2d5a4b] to-[#1e3d32]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            Our Promise
          </h2>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-2xl text-gray-100 leading-relaxed mb-6">
              To deliver enterprise-grade solutions with startup agility—designed for growth, engineered for trust.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We help businesses transition from legacy infrastructure to future-proof ecosystems, aligning regulatory compliance with AI-driven efficiency. From concept validation to full-stack deployment, Deep Pine provides the operational backbone for digital leaders who demand velocity, precision, and resilience.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-4xl font-bold text-[#8fd4c1] mb-3">{benefit.metric}</div>
              <div className="text-white font-semibold text-lg mb-2">{benefit.label}</div>
              <div className="text-gray-300 text-sm">{benefit.description}</div>
            </div>
          ))}
        </div>

        <div className="space-y-6 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
          <a
            href="https://calendly.com/deeppine"
            target="_blank"
            rel="noopener noreferrer"
            className="block sm:inline-block px-8 py-4 bg-white text-[#2d5a4b] font-bold rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-xl"
          >
            Start Your Transformation
          </a>
          <a
            href="mailto:hello@deeppine.io"
            className="block sm:inline-block px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-[#2d5a4b] transition-all duration-200"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  );
}