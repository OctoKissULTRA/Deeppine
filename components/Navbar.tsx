import Image from 'next/image';
export default function Navbar(){
  return(<header className="container flex items-center justify-between py-4 sticky top-0">
    <div className="flex items-center gap-3"><Image src="/images/logo-square.png" width={32} height={32} alt="logo" className="rounded-md border border-[#0a3430]"/><b>DEEP PINE</b></div>
    <nav className="hidden md:flex gap-6 text-sm opacity-80"><a href="#features">Features</a><a href="#faq">FAQ</a><a href="#contact" className="btn">Get started</a></nav>
  </header>);
}