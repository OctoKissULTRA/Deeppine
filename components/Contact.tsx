'use client';
import { useState } from 'react';

export default function Contact() {
  const [agree, setAgree] = useState(false);
  return (
    <div className="grid md:grid-cols-2 gap-10 items-start">
      <div className="overflow-hidden rounded-2xl border border-pine-800">
        <img src="/images/forest-hero.png" alt="Reforestation" className="w-full h-full object-cover"/>
      </div>
      <form onSubmit={(e)=>{e.preventDefault(); if(!agree){alert('Please accept privacy policy.'); return;} window.location.href='mailto:admin@deeppine.io?subject=Project Inquiry';}} className="space-y-5">
        <h3 className="text-3xl md:text-4xl font-bold">Let’s talk about your next project</h3>
        <p className="text-sm text-pine-100/70">Reach out for product design or support: <a className="underline" href="mailto:admin@deeppine.io">admin@deeppine.io</a></p>
        <input className="input" placeholder="Full name" required/>
        <input className="input" placeholder="Work email" type="email" required/>
        <select className="select" defaultValue="" required>
          <option value="" disabled>Project focus</option>
          <option>Product Design</option>
          <option>SaaS Platform</option>
          <option>AI Assistant / LLM</option>
          <option>Accessibility & Compliance</option>
        </select>
        <textarea className="input min-h-[140px]" placeholder="Your message"/>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={agree} onChange={(e)=>setAgree(e.target.checked)} />
          <span>I agree to the <a href="/privacy.html" className="underline">privacy policy</a>.</span>
        </label>
        <button className="btn-primary w-full">Submit</button>
        <div className="text-sm text-pine-100/70 pt-4">
          Build smarter. Launch faster. <a href="mailto:admin@deeppine.io" className="underline">admin@deeppine.io</a>
        </div>
      </form>
    </div>
  );
}
