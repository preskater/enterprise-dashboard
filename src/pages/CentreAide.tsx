import React from 'react';
import { HelpCircle, Book, MessageCircle, Phone, Mail, Search, FileText, Video, Users } from 'lucide-react';

const CentreAide: React.FC = () => {
  const faqData = [
    {
      question: 'Comment réinitialiser mon mot de passe ?',
      réponse: 'Cliquez sur "Mot de passe oublié" sur la page de connexion, puis suivez les instructions envoyées par email.',
      catégorie: 'Compte'
    },
    {
      question: 'Comment ajouter un nouvel utilisateur ?',
      réponse: 'Allez dans Paramètres > Utilisateurs, puis cliquez sur "Ajouter un utilisateur" et remplissez le formulaire.',
      catégorie: 'Gestion'
    },
    {
      question: 'Comment exporter mes données ?',
      réponse: 'Rendez-vous dans Rapports, sélectionnez les données à exporter et cliquez sur "Télécharger".',
      catégorie: 'Données'
    },
    {
      question: 'Comment configurer les notifications ?',
      réponse: 'Dans Paramètres > Notifications, vous pouvez personnaliser toutes vos préférences de notification.',
      catégorie: 'Paramètres'
    },
    {
      question: 'Comment contacter le support technique ?',
      réponse: 'Utilisez le chat en direct, envoyez un email à support@entreprise.fr ou appelez le +33 1 23 45 67 89.',
      catégorie: 'Support'
    }
  ];

  const guidesData = [
    {
      titre: 'Guide de démarrage rapide',
      description: 'Apprenez les bases pour commencer à utiliser la plateforme efficacement',
      durée: '10 min',
      type: 'Guide',
      icône: Book
    },
    {
      titre: 'Configuration avancée',
      description: 'Personnalisez votre environnement selon vos besoins spécifiques',
      durée: '25 min',
      type: 'Tutoriel',
      icône: FileText
    },
    {
      titre: 'Analyse des données',
      description: 'Maîtrisez les outils d\'analyse et de reporting',
      durée: '15 min',
      type: 'Vidéo',
      icône: Video
    },
    {
      titre: 'Gestion des équipes',
      description: 'Organisez et gérez efficacement vos équipes',
      durée: '20 min',
      type: 'Guide',
      icône: Users
    }
  ];

  const contactData = [
    {
      type: 'Chat en direct',
      description: 'Assistance immédiate avec notre équipe',
      disponibilité: '24/7',
      icône: MessageCircle,
      couleur: 'bg-green-500'
    },
    {
      type: 'Support téléphonique',
      description: '+33 1 23 45 67 89',
      disponibilité: 'Lun-Ven 9h-18h',
      icône: Phone,
      couleur: 'bg-blue-500'
    },
    {
      type: 'Email',
      description: 'support@entreprise.fr',
      disponibilité: 'Réponse sous 24h',
      icône: Mail,
      couleur: 'bg-purple-500'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Centre d'Aide</h1>
        <p className="mt-2 text-sm text-gray-600">
          Trouvez rapidement les réponses à vos questions et accédez aux ressources d'aide
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
              placeholder="Rechercher dans l'aide..."
              type="search"
            />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {contactData.map((contact, index) => (
          <div key={index} className="bg-white shadow-sm rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-4">
              <div className={`${contact.couleur} p-3 rounded-lg`}>
                <contact.icône className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">{contact.type}</h3>
                <p className="text-sm text-gray-600">{contact.description}</p>
                <p className="text-xs text-gray-500 mt-1">{contact.disponibilité}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Guides and Tutorials */}
      <div className="mb-8">
        <div className="bg-white shadow-sm rounded-lg border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Guides et Tutoriels</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {guidesData.map((guide, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <guide.icône className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-medium text-gray-900">{guide.titre}</h4>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {guide.type}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{guide.description}</p>
                      <div className="flex items-center text-xs text-gray-500">
                        <span>{guide.durée}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <div className="bg-white shadow-sm rounded-lg border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Questions Fréquentes</h3>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <HelpCircle className="h-5 w-5 text-blue-600 mt-1" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-medium text-gray-900">{faq.question}</h4>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {faq.catégorie}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{faq.réponse}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Status and Updates */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white shadow-sm rounded-lg border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">État du Système</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-900">Plateforme Principale</span>
                </div>
                <span className="text-sm text-green-600">Opérationnel</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-900">API Services</span>
                </div>
                <span className="text-sm text-green-600">Opérationnel</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-900">Système de Rapports</span>
                </div>
                <span className="text-sm text-yellow-600">Maintenance</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-900">Base de Données</span>
                </div>
                <span className="text-sm text-green-600">Opérationnel</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500">Dernière vérification: Il y a 2 minutes</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-sm rounded-lg border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Mises à Jour Récentes</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Nouvelle fonctionnalité: Rapports automatisés</p>
                  <p className="text-sm text-gray-500">Génération automatique de rapports personnalisés</p>
                  <p className="text-xs text-gray-400">Il y a 2 jours</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Amélioration: Performance des graphiques</p>
                  <p className="text-sm text-gray-500">Chargement 40% plus rapide des visualisations</p>
                  <p className="text-xs text-gray-400">Il y a 1 semaine</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Correction: Problème d'export Excel</p>
                  <p className="text-sm text-gray-500">Résolution du bug d'export des données</p>
                  <p className="text-xs text-gray-400">Il y a 2 semaines</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CentreAide;