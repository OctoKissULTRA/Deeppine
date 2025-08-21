'use client';
import { useState } from 'react';

const QA = [
  {
    q: "What solutions do you provide?",
    a: "End‑to‑end AI and SaaS product design, UI/UX, prototyping, and scalable backend development for modern businesses."
  },
  {
    q: "What is your project workflow?",
    a: "Discovery, design, prototyping, development, and launch—with clear milestones and transparent updates."
  },
  {
    q: "Which sectors do you work with?",
    a: "Startups, enterprises, and organizations in tech, finance, healthcare, and anywhere embracing digital innovation."
  },
  {
    q: "How do I request support?",
    a: "Email admin@deeppine.io for technical or project assistance. We provide ongoing help to keep your product running smoothly."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <div>
      <h3 className="text-3xl font-bold mb-6">Frequently asked questions</h3>
      <p className="text-muted">Your questions, answered fast. Get the clarity you need to move forward.</p>
      <div className="mt-8 space-y-4">
        {QA.map((item, i) => (
          <div key={i} className="card">
            <button className="w-full text-left p-5 flex justify-between items-center" onClick={() => setOpen(open === i ? -1 : i)}>
              <span className="font-medium">{item.q}</span>
              <span className="text-pine-200/60">{open === i ? "–" : "+"}</span>
            </button>
            {open === i && <div className="px-5 pb-5 text-pine-100/80">{item.a}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
