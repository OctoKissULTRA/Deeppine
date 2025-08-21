const QA=[
{q:'What solutions do you provide?',a:'End‑to‑end AI and SaaS product design, UI/UX, prototyping, and scalable backend development.'},
{q:'What is your project workflow?',a:'Discovery → design → prototyping → development → launch.'},
{q:'Which sectors do you work with?',a:'Tech, finance, healthcare, and anyone embracing digital innovation.'},
{q:'How do I request support?',a:'Email admin@deeppine.io and we will help.'},
];
export default function FAQ(){return(<section id="faq" className="container py-16"><h2 className="text-3xl font-bold mb-6">Frequently asked questions</h2>
<div className="space-y-3">{QA.map(it=>(<details key={it.q} className="card p-5"><summary className="cursor-pointer">{it.q}</summary><p className="mt-2 opacity-90">{it.a}</p></details>))}</div></section>)}