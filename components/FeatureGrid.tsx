import Image from "next/image";

const FEATURES = [
  {
    title: "AI design intelligence",
    desc: "Streamline development with AI tools for seamless, cross‑platform experiences.",
    img: "/images/dashboard-ui.png"
  },
  {
    title: "SaaS built to scale",
    desc: "Drive growth with secure, reliable SaaS foundations and clean architecture.",
    img: "/images/desk-lab.png"
  },
  {
    title: "Next‑gen UI frameworks",
    desc: "Deliver intuitive, modular interfaces with flexible design systems.",
    img: "/images/dashboard-ui.png"
  },
  {
    title: "Growth‑driven roadmaps",
    desc: "Actionable sitemaps and strategic frameworks that convert.",
    img: "/images/forest-hero.png"
  }
];

export default function FeatureGrid() {
  return (
    <div>
      <h2 className="text-3xl md:text-5xl font-extrabold mb-8">AI‑powered products. Business‑ready results.</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {FEATURES.map((f) => (
          <div key={f.title} className="card p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <span className="badge">Featured</span>
            </div>
            <p className="text-muted mt-3">{f.desc}</p>
            <div className="mt-5 overflow-hidden rounded-xl border border-pine-800">
              <Image src={f.img} alt={f.title} width={1200} height={800} className="w-full h-auto object-cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
