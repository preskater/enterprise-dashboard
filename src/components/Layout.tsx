import React, { useContext } from 'react';
import { RouterContext } from './Router';
import { useTheme } from '../contexts/ThemeContext';
import { 
  BarChart3, 
  Users, 
  ShoppingCart, 
  DollarSign, 
  Settings, 
  Bell,
  Search,
  User,
  ChevronDown,
  Home,
  TrendingUp,
  FileText,
  Shield,
  HelpCircle
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { currentPage, setCurrentPage } = useContext(RouterContext);
  const { actualTheme } = useTheme();

  const menuItems = [
    { id: 'dashboard', label: 'Tableau de Bord', icon: Home },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'clients', label: 'Clients', icon: Users },
    { id: 'produits', label: 'Produits', icon: ShoppingCart },
    { id: 'rapports', label: 'Rapports', icon: FileText },
    { id: 'securite', label: 'Sécurité', icon: Shield },
    { id: 'parametres', label: 'Paramètres', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-theme-secondary flex">
      {/* Sidebar */}
      <div className="w-64 bg-theme-primary shadow-theme border-r border-theme-primary fixed h-full">
        <div className="p-6 border-b border-theme-primary">
          <div className="flex items-center">
            <BarChart3 className="h-8 w-8 text-accent" />
            <span className="ml-2 text-xl font-bold text-theme-primary">EnterprisePro</span>
          </div>
        </div>
        
        <nav className="mt-6">
          <div className="px-4">
            <div className="space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`w-full text-left group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                    currentPage === item.id
                      ? 'bg-accent-light text-accent'
                      : 'text-theme-secondary hover:bg-theme-tertiary hover:text-theme-primary'
                  }`}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="mt-8 px-4">
            <h3 className="px-2 text-xs font-semibold text-theme-tertiary uppercase tracking-wider">Support</h3>
            <div className="mt-2 space-y-1">
              <button
                onClick={() => setCurrentPage('centre-aide')}
                className={`w-full text-left group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                  currentPage === 'centre-aide'
                    ? 'bg-accent-light text-accent'
                    : 'text-theme-secondary hover:bg-theme-tertiary hover:text-theme-primary'
                }`}
              >
                <HelpCircle className="mr-3 h-5 w-5" />
                Centre d'aide
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 ml-64">
        {/* Header */}
        <header className="bg-theme-primary shadow-theme border-b border-theme-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="max-w-lg w-full lg:max-w-xs">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-theme-tertiary" />
                    </div>
                    <input
                      className="block w-full pl-10 pr-3 py-2 border border-theme-primary rounded-md leading-5 bg-theme-primary placeholder-theme-tertiary focus:outline-none focus:placeholder-theme-secondary focus:ring-1 focus:ring-accent focus:border-accent sm:text-sm text-theme-primary"
                      placeholder="Rechercher..."
                      type="search"
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <button className="p-1 rounded-full text-theme-tertiary hover:text-theme-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-colors">
                  <Bell className="h-6 w-6" />
                </button>
                
                <div className="ml-3 relative">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center">
                        <User className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="ml-3">
                      <div className="flex items-center">
                        <p className="text-sm font-medium text-theme-primary">Marie Dubois</p>
                        <ChevronDown className="ml-1 h-4 w-4 text-theme-tertiary" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;