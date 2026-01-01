import Header from './components/Header';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

function App() {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen selection:bg-[#c89434]/30 selection:text-[#c89434]">
      <Header />
      <main>
        <HomePage />
        <AboutPage />
        <ServicesPage />
        <ContactPage />
      </main>
    </div>
  );
}

export default App;
