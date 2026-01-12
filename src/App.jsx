import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

function App() {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen selection:bg-brand/30 selection:text-brand flex flex-col">
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
