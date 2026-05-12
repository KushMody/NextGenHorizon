import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect, lazy, Suspense } from 'react';
import Lenis from 'lenis';

const HomePage    = lazy(() => import('./pages/HomePage.jsx'));
const AboutPage   = lazy(() => import('./pages/AboutPage.jsx'));
const ServicesPage = lazy(() => import('./pages/ServicesPage.jsx'));
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'));

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-white text-gray-900 min-h-screen selection:bg-brand/30 selection:text-brand flex flex-col">
      <Header />
      <main className="flex-grow">
        <Suspense fallback={<div className="min-h-screen bg-white" aria-label="Loading page content" />}>
          <HomePage />
          <AboutPage />
          <ServicesPage />
          <ContactPage />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
