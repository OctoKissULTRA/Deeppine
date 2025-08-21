'use client';
import { useState } from 'react';
import Image from 'next/image';

const TABS = [
  {
    key: 'ai',
    title: 'AI-powered efficiency',
    headline: 'Automate. Optimize. Accelerate.',
    desc: 'ML-enhanced research, content, ops and QA. We build assistants, pipelines, and evals with security baked in.',
    img: '/images/dashboard-ui.png'
  },
  {
    key: 'saas',
    title: 'SaaS for growth',
    headline: 'Operational excellence, product velocity.',
    desc: 'From prototype to scale: auth, billing, analytics, CI/CD, and observability. Ship confidently.',
    img: '/images/desk-lab.png'
  },
  {
    key: 'design',
    title: 'Next-level product design',
    headline: 'Interfaces users love. Systems teams trust.',
    desc: 'Design systems, tokens, and component libraries that stay beautiful at scale.',
    img: '/images/forest-hero.png'
  }
];

export default function Tabs() {
  const [active, setActive] = useState('ai');
  const tab = TABS.find(t => t.key === active)!;

  return (
    <div>
      <div className="flex gap-6 overflow-x-auto pb-2">
        {TABS.map(t => (
          <button key={t.key}
            onClick={() => setActive(t.key)}
            className={"whitespace-nowrap pb-2 text-sm " + (t.key === active ? "text-pine-200 border-b-2 border-pine-400" : "text-pine-100/70 hover:text-pine-100")}>
            {t.title}
          </button>
        ))}
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-3xl md:text-4xl font-bold">{tab.headline}</h3>
          <p className="text-muted mt-4">{tab.desc}</p>
        </div>
        <div className="card overflow-hidden">
          <Image src={tab.img} alt={tab.title} width={1200} height={800} className="w-full h-auto object-cover" />
        </div>
      </div>
    </div>
  );
}
