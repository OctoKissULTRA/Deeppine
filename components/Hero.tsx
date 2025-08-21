import Image from 'next/image';
export default function Hero(){
  return(<section className="container py-16 grid md:grid-cols-2 gap-10 items-center">
    <div><h1 className="text-5xl font-extrabold leading-tight">Design smarter. <span className="text-[#9fcfc5]">Build faster.</span> Scale further.</h1>
    <p className="mt-6 text-lg opacity-90">AI-powered SaaS design and development for modern businesses.</p>
    <div className="mt-8 flex gap-4"><a href="#contact" className="btn">Start now</a><a href="#features" className="btn" style={{background:'transparent',border:'1px solid #0a3430',color:'#e6f2f0'}}>Explore features</a></div></div>
    <div className="card overflow-hidden"><Image src="/images/dashboard-ui.png" alt="UI" width={1200} height={800}/></div>
  </section>);
}