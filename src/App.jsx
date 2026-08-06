import { useEffect } from 'react';
import Lenis from 'lenis';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      window.lenis = null;
      lenis.destroy();
    };
  }, []);


  return (
    <div className="bg-white text-gray-900 min-h-screen selection:bg-brand/30 selection:text-brand flex flex-col">
      <Header />
      <main className="flex-grow">
        <HomePage />
        <AboutPage />
        <ServicesPage />
        <ContactPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;


