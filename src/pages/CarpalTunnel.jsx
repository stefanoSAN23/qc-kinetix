import { useEffect } from 'react';
import CarpalTunnelHero from '../components/Sections/CarpalTunnel/CarpalTunnelHero';
import CarpalTunnelContent from '../components/Sections/CarpalTunnel/CarpalTunnelContent';
import CarpalTunnelShare from '../components/Sections/CarpalTunnel/CarpalTunnelShare';
import CarpalTunnelNavigation from '../components/Sections/CarpalTunnel/CarpalTunnelNavigation';
import CarpalTunnelRelated from '../components/Sections/CarpalTunnel/CarpalTunnelRelated';
import ContactForm from '../components/Forms/ContactForm';

const CarpalTunnel = () => {
  // Ensure page starts from top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main>
      <CarpalTunnelHero />
      <CarpalTunnelContent />
      <CarpalTunnelShare />
      <CarpalTunnelNavigation />
      <CarpalTunnelRelated />
      <ContactForm />
    </main>
  );
};

export default CarpalTunnel;

