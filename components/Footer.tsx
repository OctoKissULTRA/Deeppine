export default function Footer(){return(<footer className="border-t border-[#0a3430] mt-10">
<div className="container py-10 grid md:grid-cols-4 gap-8 text-sm">
<div><b>Deep Pine</b><p className="opacity-80 mt-2">AI-powered SaaS. Designed in Colorado.</p><p className="mt-2"><a href="mailto:admin@deeppine.io">admin@deeppine.io</a></p></div>
<div><p className="font-semibold">Product</p><ul className="mt-2 space-y-2 opacity-90"><li><a href="#features">Platform</a></li><li><a href="#tabs">Solutions</a></li><li><a href="#assurance">Assurance</a></li><li><a href="/changelog.html">Changelog</a></li></ul></div>
<div><p className="font-semibold">Company</p><ul className="mt-2 space-y-2 opacity-90"><li><a href="/privacy.html">Privacy</a></li><li><a href="/terms.html">Terms</a></li><li><a href="/accessibility.html">Accessibility</a></li></ul></div>
<div><p className="font-semibold">Resources</p><ul className="mt-2 space-y-2 opacity-90"><li><a href="/docs/deep-pine-self-assessment.pdf">Due diligence</a></li><li><a href="/.well-known/security.txt">Security</a></li><li><a href="/sitemap.xml">Sitemap</a></li></ul></div>
</div>
<div className="container text-xs opacity-70 py-6">© {new Date().getFullYear()} Deep Pine LLC — All rights reserved.</div>
</footer>)}