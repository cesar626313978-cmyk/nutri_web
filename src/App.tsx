import React from 'react';
import { AccessibilityProvider, useAccessibility } from './context/AccessibilityContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './components/views/HomeView';
import { ProyectoView } from './components/views/ProyectoView';
import { GuiasView } from './components/views/GuiasView';
import { AsociacionView } from './components/views/AsociacionView';
import { ContactoView } from './components/views/ContactoView';
import {
  TransparenciaView,
  AvisoLegalView,
  PrivacidadView,
  CookiesView,
  AccesibilidadView,
} from './components/views/LegalAndTransparenciaViews';

const MainAppContent: React.FC = () => {
  const { activeRoute } = useAccessibility();

  const renderView = () => {
    switch (activeRoute) {
      case '/':
        return <HomeView />;
      case '/proyecto':
        return <ProyectoView />;
      case '/guias':
        return <GuiasView />;
      case '/asociacion':
        return <AsociacionView />;
      case '/contacto':
        return <ContactoView />;
      case '/transparencia':
        return <TransparenciaView />;
      case '/privacidad':
        return <PrivacidadView />;
      case '/aviso-legal':
        return <AvisoLegalView />;
      case '/cookies':
        return <CookiesView />;
      case '/accesibilidad':
        return <AccesibilidadView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF8] text-[#20282E] transition-colors">
      <Header />

      <main id="main-content" className="flex-grow focus:outline-none" tabIndex={-1}>
        {renderView()}
      </main>

      <Footer />
    </div>
  );
};

export function App() {
  return (
    <AccessibilityProvider>
      <MainAppContent />
    </AccessibilityProvider>
  );
}

export default App;
