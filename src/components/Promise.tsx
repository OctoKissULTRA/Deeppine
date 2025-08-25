export default function Promise() {
  return (
    <section className="py-24 bg-gradient-to-r from-purple-900 via-purple-800 to-cyan-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="text-4xl font-bold text-cyan-400 mb-2">10x</div>
            <div className="text-white font-semibold">Faster Innovation</div>
            <div className="text-gray-300 text-sm mt-2">Accelerate your digital transformation journey</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="text-4xl font-bold text-purple-400 mb-2">60%</div>
            <div className="text-white font-semibold">Cost Reduction</div>
            <div className="text-gray-300 text-sm mt-2">Optimize resources with AI-driven efficiency</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="text-4xl font-bold text-pink-400 mb-2">100%</div>
            <div className="text-white font-semibold">Commitment</div>
            <div className="text-gray-300 text-sm mt-2">Your success is our only metric</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-purple-900 font-bold rounded-lg hover:shadow-2xl hover:shadow-white/25 transform hover:scale-105 transition-all duration-200">
            Start Your Transformation
          </button>
          <button className="px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-purple-900 transition-all duration-200">
            Schedule a Demo
          </button>
        </div>
      </div>
    </section>
  );
}