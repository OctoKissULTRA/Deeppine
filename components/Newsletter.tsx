'use client';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:admin@deeppine.io?subject=Subscribe&body=Please subscribe %3A%20${encodeURIComponent(email)}`;
  };
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h3 className="text-3xl font-bold">Power your next product leap</h3>
        <p className="text-muted mt-2">
          Subscribe for expert insights on AI, SaaS, and product design. Actionable updates—no clutter.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="card p-6">
        <label className="block text-sm mb-2">Business email</label>
        <input className="input" type="email" placeholder="email@company.com" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
        <button className="btn-primary mt-4 w-full">Subscribe</button>
      </form>
    </div>
  );
}
