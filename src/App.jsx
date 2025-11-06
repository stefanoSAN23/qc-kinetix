import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Stats from './components/Stats/Stats';
import WhatIsRegenerative from './components/Sections/WhatIsRegenerative';
import BodyPainMap from './components/Sections/BodyPainMap';
import QCKinetixDifference from './components/Sections/QCKinetixDifference';
import Benefits from './components/Sections/Benefits';
import Testimonials from './components/Sections/Testimonials';
import ContactForm from './components/Forms/ContactForm';
import Footer from './components/Footer/Footer';
import FloatingBanner from './components/Common/FloatingBanner';
import RegenerativeMedicine from './pages/RegenerativeMedicine';
import StemCellTreatments from './pages/StemCellTreatments';
import './App.css';

function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Stats />
        <WhatIsRegenerative />
        <BodyPainMap />
        <QCKinetixDifference />
        <Benefits />
        <Testimonials />
        <ContactForm />
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <FloatingBanner />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/regenerative-medicine" element={<RegenerativeMedicine />} />
          <Route path="/regenerative-medicine/stem-cell-treatments" element={<StemCellTreatments />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
