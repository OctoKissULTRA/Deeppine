'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f1f1a] via-[#1e3d32] to-[#2d5a4b] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4a8b7c] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-[#6eb5a6] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-[#8fd4c1] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center px-6 lg:px-8 max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            <span className="block">Next-Generation</span>
            <span className="bg-gradient-to-r from-[#8fd4c1] to-[#b8e6db] bg-clip-text text-transparent">
              AI-Powered SaaS
            </span>
            <span className="block">Accelerator</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Streamline digital transformation for ambitious organizations with cutting-edge machine learning, 
            composable architecture, and cloud-native design systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a
              href="https://calendly.com/deeppine"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#2d5a4b] text-white font-semibold rounded-lg hover:bg-[#1e3d32] transform hover:scale-105 transition-all duration-200 shadow-xl"
            >
              Schedule Demo
            </a>
            <a
              href="#features"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#features');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200"
            >
              Learn More
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-[#8fd4c1] mb-2">99.9%</div>
              <div className="text-white font-medium">Uptime SLA</div>
              <div className="text-gray-300 text-sm mt-2">Enterprise reliability</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-[#b8e6db] mb-2">10x</div>
              <div className="text-white font-medium">Faster Deployment</div>
              <div className="text-gray-300 text-sm mt-2">From weeks to days</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-3xl font-bold text-[#6eb5a6] mb-2">60%</div>
              <div className="text-white font-medium">Cost Reduction</div>
              <div className="text-gray-300 text-sm mt-2">Optimize operations</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}