import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-pine-900/60">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <Image src="/images/logo-square.png" alt="Deep Pine" width={36} height={36} className="rounded-lg border border-pine-800" />
          <span className="font-semibold tracking-wide">DEEP&nbsp;PINE</span>
        </div>
        <nav className="hidden md:flex items-center gap-7 text-sm text-pine-100/80">
          <a href="#tabs">About</a>
          <a href="#features">Capabilities</a>
          <a href="#faq">FAQ</a>
          <a href="#contact" className="btn-primary">Get started</a>
        </nav>
      </div>
    </header>
  );
}
