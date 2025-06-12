import React, { useContext } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Router, { RouterContext } from './components/Router';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Clients from './pages/Clients';
import Produits from './pages/Produits';
import Rapports from './pages/Rapports';
import Securite from './pages/Securite';
import Parametres from './pages/Parametres';
import CentreAide from './pages/CentreAide';

const AppContent: React.FC = () => {
  const { currentPage } = useContext(RouterContext);

  const renderPage = () => {
    switch (currentPage) {
      case 'analytics':
        return <Analytics />;
      case 'clients':
        return <Clients />;
      case 'produits':
        return <Produits />;
      case 'rapports':
        return <Rapports />;
      case 'securite':
        return <Securite />;
      case 'parametres':
        return <Parametres />;
      case 'centre-aide':
        return <CentreAide />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout>
      {renderPage()}
    </Layout>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;