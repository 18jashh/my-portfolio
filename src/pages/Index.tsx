
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SplashScreen from '@/components/SplashScreen';
import ThemeToggle from '@/components/ThemeToggle';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <div className="min-h-screen">
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <ThemeToggle />
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
