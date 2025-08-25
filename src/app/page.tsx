import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Expertise from '@/components/Expertise';
import Promise from '@/components/Promise';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Features />
      <Expertise />
      <Promise />
      <Footer />
    </>
  );
}