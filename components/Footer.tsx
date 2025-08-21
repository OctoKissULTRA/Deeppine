export default function Footer() {
  return (
    <footer className="section border-t border-pine-800 mt-10">
      <div className="container grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="text-lg font-semibold">Deep Pine LLC</div>
          <p className="text-muted mt-2">AI-powered SaaS. Designed in Colorado.</p>
          <a className="underline mt-2 inline-block" href="/docs/deep-pine-self-assessment.pdf">Download</a>
        </div>
        <div>
          <div className="font-semibold">Product</div>
          <ul className="mt-2 space-y-1">
            <li><a href="#features">Platform</a></li>
            <li><a href="#features">Solutions</a></li>
            <li><a href="#features">Pricing</a></li>
            <li><a href="#newsletter">Support</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Company</div>
          <ul className="mt-2 space-y-1">
            <li><a href="#tabs">About</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#contact">Press</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Legal</div>
          <ul className="mt-2 space-y-1">
            <li><a href="/terms.html">Terms</a></li>
            <li><a href="/privacy.html">Privacy</a></li>
            <li><a href="/accessibility.html">Accessibility</a></li>
            <li><a href="/changelog.html">Changelog</a></li>
          </ul>
        </div>
      </div>
      <div className="container mt-10 text-xs text-pine-100/60">
        © {new Date().getFullYear()} Deep Pine LLC — All rights reserved.
      </div>
    </footer>
  );
}
