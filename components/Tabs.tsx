'use client';import {useState} from 'react';import Image from 'next/image';
const tabs=[{k:'ai',t:'AI-powered efficiency',b:'Automate. Optimize. Accelerate.',img:'/images/dashboard-ui.png'},
{k:'saas',t:'SaaS for growth',b:'Reliable, secure, and built to scale.',img:'/images/desk-lab.png'},
{k:'design',t:'Next-level product design',b:'Intuitive, modular, brand-consistent.',img:'/images/forest-hero.png'}];
export default function Tabs(){const[i,setI]=useState(0);const p=tabs[i];return(<section id="tabs" className="container py-12">
<div className="flex gap-4 flex-wrap">{tabs.map((t,idx)=>(<button key={t.k} onClick={()=>setI(idx)} className={"px-4 py-2 rounded-full border "+(i===idx?"bg-[#126157] text-white":"border-[#0a3430]")}>{t.t}</button>))}</div>
<h3 className="text-2xl mt-6">{p.b}</h3>
<div className="grid md:grid-cols-2 gap-8 mt-6 items-center"><div className="card overflow-hidden"><Image src={p.img} alt={p.t} width={1200} height={800}/></div>
<ul className="space-y-3"><li className="card p-4">Design systems</li><li className="card p-4">Accessible components</li><li className="card p-4">Motion as meaning</li></ul></div></section>)}