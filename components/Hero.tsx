import Image from "next/image";

export default function Hero() {
  return (
    <section className="section container grid md:grid-cols-2 gap-10 items-center">
      <div>
        <div className="badge mb-4">AI-powered efficiency</div>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Design smarter. <span className="text-pine-300">Build faster.</span><br/>
          <span className="text-pine-300">Scale further.</span>
        </h1>
        <p className="mt-6 text-lg text-muted">
          AI-powered SaaS design and development for modern businesses.
          Streamline your workflow with expert UI, seamless integration, and scalable solutions.
        </p>
        <div className="mt-8 flex gap-4">
          <a href="#contact" className="btn-primary">Start now</a>
          <a href="#features" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-pine-700 hover:bg-pine-900">Explore features</a>
        </div>
      </div>
      <div className="card overflow-hidden">
        <Image
          src="/images/dashboard-ui.png"
          alt="Dashboard UI"
          width={1200} height={800}
          className="w-full h-auto object-cover"
          priority
        />
      </div>
    </section>
  );
}
