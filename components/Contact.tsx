'use client';import {useState} from 'react';
export default function Contact(){const[agree,setAgree]=useState(false);return(<section id="contact" className="container py-16 grid md:grid-cols-2 gap-10 items-start">
<img src="/images/forest-hero.png" alt="forest" className="w-full rounded-xl border border-[#0a3430]"/>
<form onSubmit={(e)=>{e.preventDefault();if(!agree){alert('Please accept privacy policy');return;}window.location.href='mailto:admin@deeppine.io?subject=Project Inquiry';}} className="space-y-4">
<h3 className="text-3xl font-bold">Let’s talk about your next project</h3>
<input className="input" placeholder="Full name" required/><input className="input" placeholder="Work email" type="email" required/>
<select className="input" defaultValue=""><option value="" disabled>Project focus</option><option>Product design</option><option>AI integration</option><option>SaaS build</option><option>Accessibility / Compliance</option></select>
<textarea className="input" placeholder="Your message" rows={6}></textarea>
<label className="text-sm flex gap-2 items-center"><input type="checkbox" onChange={e=>setAgree(e.target.checked)}/>I agree to the <a href="/privacy.html">privacy policy</a>.</label>
<button className="btn w-full">Submit</button>
</form></section>)}