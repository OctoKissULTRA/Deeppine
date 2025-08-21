import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Tabs from "@/components/Tabs";
import FeatureGrid from "@/components/FeatureGrid";
import Assurance from "@/components/Assurance";
import Newsletter from "@/components/Newsletter";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import "./globals.css";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <section id="tabs" className="section container">
        <Tabs />
      </section>
      <section id="features" className="section container">
        <FeatureGrid />
      </section>
      <section id="assurance" className="section container">
        <Assurance />
      </section>
      <section id="newsletter" className="section container">
        <Newsletter />
      </section>
      <section id="faq" className="section container">
        <FAQ />
      </section>
      <section id="contact" className="section container">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
