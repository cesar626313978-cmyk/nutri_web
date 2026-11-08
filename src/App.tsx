import React from 'react';
import { AccessibilityProvider, useAccessibility } from './context/AccessibilityContext';
import { AuthProvider } from './context/AuthContext';
import { CMSProvider } from './context/CMSContext';
import { AccessibilityBar } from './components/AccessibilityBar';
import { Header } from './components/Header';
import { BrandHeroBar } from './components/BrandHeroBar';
import { Footer } from './components/Footer';
import { LegalModals } from './components/LegalModals';
import { HomeView } from './components/views/HomeView';
import { ConocenosView } from './components/views/ConocenosView';
import { ServiciosView } from './components/views/ServiciosView';
import { ColaboraView } from './components/views/ColaboraView';
import { ActualidadView } from './components/views/ActualidadView';
import { ContactoView } from './components/views/ContactoView';
import { SociosView } from './components/views/SociosView';
import { AdminCMSView } from './components/views/AdminCMSView';

const MainContent: React.FC = () => {
  const { activeRoute } = useAccessibility();

  return (
    <main
      id="main-content"
      role="main"
      tabIndex={-1}
      className="min-h-screen focus:outline-none"
    >
      {activeRoute === '/' && <HomeView />}
      {activeRoute === '/conocenos' && <ConocenosView />}
      {activeRoute === '/servicios' && <ServiciosView />}
      {activeRoute === '/colabora' && <ColaboraView />}
      {activeRoute === '/actualidad' && <ActualidadView />}
      {activeRoute === '/contacto' && <ContactoView />}
      {activeRoute === '/socios' && <SociosView />}
      {activeRoute === '/admin' && <AdminCMSView />}
    </main>
  );
};

const Layout: React.FC = () => {
  const { activeRoute } = useAccessibility();
  const isAdmin = activeRoute === '/admin';

  return (
    <div className="flex flex-col min-h-screen transition-colors">
      <AccessibilityBar />
      <Header />
      {!isAdmin && <BrandHeroBar />}
      <div className="flex-1">
        <MainContent />
      </div>
      <Footer />
      <LegalModals />
    </div>
  );
};

export default function App() {
  return (
    <AccessibilityProvider>
      <AuthProvider>
        <CMSProvider>
          <Layout />
        </CMSProvider>
      </AuthProvider>
    </AccessibilityProvider>
  );
}
