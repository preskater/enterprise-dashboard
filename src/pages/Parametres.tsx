import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Settings, User, Bell, Shield, Palette, Globe, Database, Mail, Save, Eye, EyeOff, Plus, Trash2, Edit, Check, X, Sun, Moon, Monitor } from 'lucide-react';

const Parametres: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profil');
  const [showPassword, setShowPassword] = useState(false);
  const [language, setLanguage] = useState('fr');
  const { theme, accentColor, setTheme, setAccentColor } = useTheme();

  const tabs = [
    { id: 'profil', label: 'Profil Utilisateur', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'securite', label: 'Sécurité', icon: Shield },
    { id: 'apparence', label: 'Apparence', icon: Palette },
    { id: 'localisation', label: 'Localisation', icon: Globe },
    { id: 'integrations', label: 'Intégrations', icon: Database },
    { id: 'email', label: 'Email', icon: Mail },
  ];

  const integrations = [
    { name: 'Slack', status: 'connected', description: 'Notifications et collaboration d\'équipe', icon: '💬' },
    { name: 'Google Analytics', status: 'connected', description: 'Suivi et analyse du trafic web', icon: '📊' },
    { name: 'Stripe', status: 'connected', description: 'Traitement des paiements', icon: '💳' },
    { name: 'Salesforce', status: 'disconnected', description: 'Gestion de la relation client', icon: '☁️' },
    { name: 'Microsoft Teams', status: 'disconnected', description: 'Communication d\'équipe', icon: '👥' },
    { name: 'Zapier', status: 'connected', description: 'Automatisation des workflows', icon: '⚡' },
  ];

  const accentColors = [
    { name: 'blue', color: '#2563eb', label: 'Bleu' },
    { name: 'green', color: '#059669', label: 'Vert' },
    { name: 'purple', color: '#7c3aed', label: 'Violet' },
    { name: 'red', color: '#dc2626', label: 'Rouge' },
    { name: 'orange', color: '#ea580c', label: 'Orange' },
    { name: 'pink', color: '#db2777', label: 'Rose' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profil':
        return (
          <div className="space-y-8">
            {/* Photo de profil */}
            <div>
              <h4 className="text-lg font-medium text-theme-primary mb-4">Photo de Profil</h4>
              <div className="flex items-center space-x-6">
                <div className="flex-shrink-0">
                  <div className="h-20 w-20 rounded-full bg-accent flex items-center justify-center">
                    <User className="h-10 w-10 text-white" />
                  </div>
                </div>
                <div>
                  <button className="bg-accent hover:bg-accent-hover text-white px-4 py-2 rounded-md text-sm font-medium mr-3 transition-colors">
                    Changer la photo
                  </button>
                  <button className="bg-theme-tertiary text-theme-primary px-4 py-2 rounded-md text-sm font-medium hover:bg-theme-secondary transition-colors">
                    Supprimer
                  </button>
                  <p className="text-sm text-theme-secondary mt-2">JPG, GIF ou PNG. 1MB max.</p>
                </div>
              </div>
            </div>

            {/* Informations personnelles */}
            <div>
              <h4 className="text-lg font-medium text-theme-primary mb-4">Informations Personnelles</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-theme-primary mb-2">Prénom</label>
                  <input
                    type="text"
                    defaultValue="Marie"
                    className="w-full px-3 py-2 border border-theme-primary rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-theme-primary text-theme-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-theme-primary mb-2">Nom</label>
                  <input
                    type="text"
                    defaultValue="Dubois"
                    className="w-full px-3 py-2 border border-theme-primary rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-theme-primary text-theme-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-theme-primary mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue="marie.dubois@entreprise.fr"
                    className="w-full px-3 py-2 border border-theme-primary rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-theme-primary text-theme-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-theme-primary mb-2">Téléphone</label>
                  <input
                    type="tel"
                    defaultValue="+33 1 23 45 67 89"
                    className="w-full px-3 py-2 border border-theme-primary rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-theme-primary text-theme-primary"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-theme-primary mb-2">Poste</label>
                  <input
                    type="text"
                    defaultValue="Directrice Générale"
                    className="w-full px-3 py-2 border border-theme-primary rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-theme-primary text-theme-primary"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-theme-primary mb-2">Bio</label>
                  <textarea
                    rows={3}
                    defaultValue="Directrice Générale avec plus de 15 ans d'expérience dans le secteur technologique."
                    className="w-full px-3 py-2 border border-theme-primary rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-theme-primary text-theme-primary"
                  />
                </div>
              </div>
            </div>

            {/* Informations de l'entreprise */}
            <div>
              <h4 className="text-lg font-medium text-theme-primary mb-4">Informations de l'Entreprise</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-theme-primary mb-2">Nom de l'entreprise</label>
                  <input
                    type="text"
                    defaultValue="EnterprisePro SAS"
                    className="w-full px-3 py-2 border border-theme-primary rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-theme-primary text-theme-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-theme-primary mb-2">Secteur d'activité</label>
                  <select className="w-full px-3 py-2 border border-theme-primary rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-theme-primary text-theme-primary">
                    <option value="tech">Technologie</option>
                    <option value="finance">Finance</option>
                    <option value="sante">Santé</option>
                    <option value="education">Éducation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-theme-primary mb-2">Taille de l'entreprise</label>
                  <select className="w-full px-3 py-2 border border-theme-primary rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-theme-primary text-theme-primary">
                    <option value="1-10">1-10 employés</option>
                    <option value="11-50">11-50 employés</option>
                    <option value="51-200">51-200 employés</option>
                    <option value="200+">200+ employés</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-theme-primary mb-2">Site web</label>
                  <input
                    type="url"
                    defaultValue="https://www.entreprisepro.fr"
                    className="w-full px-3 py-2 border border-theme-primary rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-theme-primary text-theme-primary"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 'apparence':
        return (
          <div className="space-y-8">
            {/* Thème */}
            <div>
              <h4 className="text-lg font-medium text-theme-primary mb-4">Thème</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div 
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    theme === 'light' 
                      ? 'border-accent bg-accent-light' 
                      : 'border-theme-primary hover:border-theme-secondary'
                  }`}
                  onClick={() => setTheme('light')}
                >
                  <div className="w-full h-20 bg-white border border-gray-200 rounded mb-3 flex items-center justify-center">
                    <Sun className="h-8 w-8 text-yellow-500" />
                  </div>
                  <p className="text-sm font-medium text-theme-primary">Clair</p>
                  <p className="text-xs text-theme-secondary">Thème par défaut</p>
                </div>
                <div 
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    theme === 'dark' 
                      ? 'border-accent bg-accent-light' 
                      : 'border-theme-primary hover:border-theme-secondary'
                  }`}
                  onClick={() => setTheme('dark')}
                >
                  <div className="w-full h-20 bg-gray-800 border border-gray-600 rounded mb-3 flex items-center justify-center">
                    <Moon className="h-8 w-8 text-blue-400" />
                  </div>
                  <p className="text-sm font-medium text-theme-primary">Sombre</p>
                  <p className="text-xs text-theme-secondary">Idéal pour la nuit</p>
                </div>
                <div 
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    theme === 'auto' 
                      ? 'border-accent bg-accent-light' 
                      : 'border-theme-primary hover:border-theme-secondary'
                  }`}
                  onClick={() => setTheme('auto')}
                >
                  <div className="w-full h-20 bg-gradient-to-r from-white to-gray-800 border border-gray-200 rounded mb-3 flex items-center justify-center">
                    <Monitor className="h-8 w-8 text-gray-600" />
                  </div>
                  <p className="text-sm font-medium text-theme-primary">Automatique</p>
                  <p className="text-xs text-theme-secondary">Suit le système</p>
                </div>
              </div>
            </div>

            {/* Couleurs d'accent */}
            <div>
              <h4 className="text-lg font-medium text-theme-primary mb-4">Couleur d'Accent</h4>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {accentColors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setAccentColor(color.name as any)}
                    className={`relative p-4 rounded-lg border-2 transition-all ${
                      accentColor === color.name
                        ? 'border-theme-primary shadow-lg scale-105'
                        : 'border-theme-primary hover:border-theme-secondary'
                    }`}
                  >
                    <div 
                      className="w-8 h-8 rounded-full mx-auto mb-2 shadow-md"
                      style={{ backgroundColor: color.color }}
                    />
                    <p className="text-xs font-medium text-theme-primary">{color.label}</p>
                    {accentColor === color.name && (
                      <div className="absolute -top-1 -right-1">
                        <Check className="h-4 w-4 text-white bg-green-500 rounded-full p-0.5" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Densité d'affichage */}
            <div>
              <h4 className="text-lg font-medium text-theme-primary mb-4">Densité d'Affichage</h4>
              <div className="space-y-3">
                <label className="flex items-center p-3 border border-theme-primary rounded-lg hover:bg-theme-secondary cursor-pointer transition-colors">
                  <input type="radio" name="density" value="compact" className="mr-3 text-accent focus:ring-accent" />
                  <div>
                    <p className="text-sm font-medium text-theme-primary">Compact</p>
                    <p className="text-xs text-theme-secondary">Plus d'informations à l'écran</p>
                  </div>
                </label>
                <label className="flex items-center p-3 border border-theme-primary rounded-lg hover:bg-theme-secondary cursor-pointer transition-colors">
                  <input type="radio" name="density" value="normal" defaultChecked className="mr-3 text-accent focus:ring-accent" />
                  <div>
                    <p className="text-sm font-medium text-theme-primary">Normal</p>
                    <p className="text-xs text-theme-secondary">Équilibre entre lisibilité et densité</p>
                  </div>
                </label>
                <label className="flex items-center p-3 border border-theme-primary rounded-lg hover:bg-theme-secondary cursor-pointer transition-colors">
                  <input type="radio" name="density" value="comfortable" className="mr-3 text-accent focus:ring-accent" />
                  <div>
                    <p className="text-sm font-medium text-theme-primary">Confortable</p>
                    <p className="text-xs text-theme-secondary">Plus d'espace pour une meilleure lisibilité</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <h4 className="text-lg font-medium text-theme-primary mb-4">Barre Latérale</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border border-theme-primary rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-theme-primary">Réduire automatiquement</p>
                    <p className="text-sm text-theme-secondary">Masquer la sidebar sur les petits écrans</p>
                  </div>
                  <input type="checkbox" className="h-4 w-4 text-accent rounded focus:ring-accent" />
                </div>
                <div className="flex items-center justify-between p-3 border border-theme-primary rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-theme-primary">Afficher les icônes uniquement</p>
                    <p className="text-sm text-theme-secondary">Mode compact avec icônes seulement</p>
                  </div>
                  <input type="checkbox" className="h-4 w-4 text-accent rounded focus:ring-accent" />
                </div>
              </div>
            </div>
          </div>
        );

      // ... autres onglets (notifications, sécurité, etc.) avec les mêmes classes theme-aware
      default:
        return (
          <div className="text-center py-8">
            <p className="text-theme-secondary">Contenu de l'onglet {activeTab} à implémenter</p>
          </div>
        );
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-theme-primary">Paramètres</h1>
        <p className="mt-2 text-sm text-theme-secondary">
          Configuration et personnalisation de votre environnement de travail
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Settings Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-theme-primary shadow-theme rounded-lg border border-theme-primary">
            <div className="px-6 py-4 border-b border-theme-primary">
              <h3 className="text-lg font-medium text-theme-primary">Catégories</h3>
            </div>
            <nav className="p-4">
              <div className="space-y-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      activeTab === tab.id
                        ? 'bg-accent-light text-accent'
                        : 'text-theme-secondary hover:bg-theme-tertiary hover:text-theme-primary'
                    }`}
                  >
                    <tab.icon className="mr-3 h-5 w-5" />
                    {tab.label}
                  </button>
                ))}
              </div>
            </nav>
          </div>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3">
          <div className="bg-theme-primary shadow-theme rounded-lg border border-theme-primary">
            <div className="px-6 py-4 border-b border-theme-primary">
              <h3 className="text-lg font-medium text-theme-primary">
                {tabs.find(tab => tab.id === activeTab)?.label}
              </h3>
            </div>
            <div className="p-6">
              {renderTabContent()}
              
              {/* Save Button */}
              <div className="mt-8 pt-6 border-t border-theme-primary flex justify-end">
                <button className="bg-accent hover:bg-accent-hover text-white px-6 py-2 rounded-md text-sm font-medium flex items-center space-x-2 transition-colors">
                  <Save className="h-4 w-4" />
                  <span>Sauvegarder les modifications</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parametres;