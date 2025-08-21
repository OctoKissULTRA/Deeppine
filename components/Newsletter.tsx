'use client';import {useState} from 'react';
export default function Newsletter(){const[email,setEmail]=useState('');return(<section className="container py-16 card p-8 text-center">
<h3 className="text-3xl font-semibold">Power your next product leap</h3><p className="opacity-80 mt-2">Subscribe for expert insights on AI, SaaS, and product design.</p>
<form onSubmit={(e)=>{e.preventDefault();window.location.href=`mailto:admin@deeppine.io?subject=Subscribe&body=${encodeURIComponent(email)}`}} className="mt-6 max-w-lg mx-auto flex gap-3">
<input className="input" placeholder="Business email" type="email" required value={email} onChange={e=>setEmail(e.target.value)}/><button className="btn">Subscribe</button></form></section>)}