import React from 'react';
import KPICard from '../components/KPICard';
import { Shield, Lock, AlertTriangle, CheckCircle, Users, Activity } from 'lucide-react';

const Securite: React.FC = () => {
  const alertesData = [
    {
      type: 'Critique',
      message: 'Tentative de connexion suspecte détectée',
      ip: '192.168.1.45',
      heure: '2024-01-15 14:32:18',
      statut: 'En cours'
    },
    {
      type: 'Avertissement',
      message: 'Mot de passe faible détecté pour l\'utilisateur marie.dubois',
      ip: '10.0.0.12',
      heure: '2024-01-15 13:45:22',
      statut: 'Résolu'
    },
    {
      type: 'Info',
      message: 'Mise à jour de sécurité appliquée avec succès',
      ip: 'Système',
      heure: '2024-01-15 12:00:00',
      statut: 'Terminé'
    },
    {
      type: 'Critique',
      message: 'Accès non autorisé tenté sur /admin',
      ip: '203.45.67.89',
      heure: '2024-01-15 11:28:45',
      statut: 'Bloqué'
    },
    {
      type: 'Avertissement',
      message: 'Certificat SSL expire dans 30 jours',
      ip: 'Système',
      heure: '2024-01-15 09:00:00',
      statut: 'Planifié'
    }
  ];

  const utilisateursData = [
    {
      nom: 'Marie Dubois',
      email: 'marie.dubois@entreprise.fr',
      rôle: 'Administrateur',
      dernière_connexion: '2024-01-15 15:30',
      statut: 'Actif',
      authentification_2fa: 'Activée'
    },
    {
      nom: 'Pierre Martin',
      email: 'pierre.martin@entreprise.fr',
      rôle: 'Manager',
      dernière_connexion: '2024-01-15 14:15',
      statut: 'Actif',
      authentification_2fa: 'Activée'
    },
    {
      nom: 'Sophie Laurent',
      email: 'sophie.laurent@entreprise.fr',
      rôle: 'Utilisateur',
      dernière_connexion: '2024-01-15 13:45',
      statut: 'Actif',
      authentification_2fa: 'Désactivée'
    },
    {
      nom: 'Thomas Durand',
      email: 'thomas.durand@entreprise.fr',
      rôle: 'Utilisateur',
      dernière_connexion: '2024-01-14 17:20',
      statut: 'Inactif',
      authentification_2fa: 'Activée'
    }
  ];

  const auditData = [
    {
      action: 'Connexion utilisateur',
      utilisateur: 'marie.dubois@entreprise.fr',
      ip: '192.168.1.10',
      heure: '2024-01-15 15:30:12',
      résultat: 'Succès'
    },
    {
      action: 'Modification paramètres',
      utilisateur: 'pierre.martin@entreprise.fr',
      ip: '192.168.1.15',
      heure: '2024-01-15 14:22:45',
      résultat: 'Succès'
    },
    {
      action: 'Tentative accès admin',
      utilisateur: 'sophie.laurent@entreprise.fr',
      ip: '192.168.1.20',
      heure: '2024-01-15 13:15:33',
      résultat: 'Échec'
    },
    {
      action: 'Export données',
      utilisateur: 'marie.dubois@entreprise.fr',
      ip: '192.168.1.10',
      heure: '2024-01-15 12:45:18',
      résultat: 'Succès'
    },
    {
      action: 'Changement mot de passe',
      utilisateur: 'thomas.durand@entreprise.fr',
      ip: '192.168.1.25',
      heure: '2024-01-15 11:30:22',
      résultat: 'Succès'
    }
  ];

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'Critique':
        return 'bg-red-100 text-red-800';
      case 'Avertissement':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  const getStatusColor = (statut: string) => {
    switch (statut) {
      case 'Résolu':
      case 'Terminé':
      case 'Bloqué':
        return 'bg-green-100 text-green-800';
      case 'En cours':
        return 'bg-yellow-100 text-yellow-800';
      case 'Planifié':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Centre de Sécurité</h1>
        <p className="mt-2 text-sm text-gray-600">
          Surveillance et gestion de la sécurité de votre infrastructure
        </p>
      </div>

      {/* Security KPIs */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mb-8">
        <KPICard
          title="Score Sécurité"
          value="94/100"
          change="+2"
          changeType="positive"
          icon={Shield}
          description="excellent"
        />
        <KPICard
          title="Alertes Actives"
          value="3"
          change="-5"
          changeType="positive"
          icon={AlertTriangle}
          description="ce jour"
        />
        <KPICard
          title="Connexions Sécurisées"
          value="99.8%"
          change="+0.2%"
          changeType="positive"
          icon={Lock}
          description="ce mois"
        />
        <KPICard
          title="Utilisateurs 2FA"
          value="87%"
          change="+12%"
          changeType="positive"
          icon={CheckCircle}
          description="activé"
        />
        <KPICard
          title="Tentatives Bloquées"
          value="247"
          change="+18"
          changeType="neutral"
          icon={Users}
          description="ce mois"
        />
        <KPICard
          title="Temps Réponse"
          value="2.3s"
          change="-0.5s"
          changeType="positive"
          icon={Activity}
          description="moyen"
        />
      </div>

      {/* Security Status Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Pare-feu</p>
              <p className="text-lg font-bold text-green-600">Actif</p>
            </div>
            <Shield className="h-8 w-8 text-green-500" />
          </div>
          <p className="text-xs text-gray-500 mt-2">Dernière mise à jour: Il y a 2h</p>
        </div>
        <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Antivirus</p>
              <p className="text-lg font-bold text-green-600">Protégé</p>
            </div>
            <CheckCircle className="h-8 w-8 text-green-500" />
          </div>
          <p className="text-xs text-gray-500 mt-2">Scan complet: Il y a 6h</p>
        </div>
        <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">SSL/TLS</p>
              <p className="text-lg font-bold text-yellow-600">Expire bientôt</p>
            </div>
            <Lock className="h-8 w-8 text-yellow-500" />
          </div>
          <p className="text-xs text-gray-500 mt-2">Expire dans: 30 jours</p>
        </div>
        <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Sauvegardes</p>
              <p className="text-lg font-bold text-green-600">À jour</p>
            </div>
            <Activity className="h-8 w-8 text-green-500" />
          </div>
          <p className="text-xs text-gray-500 mt-2">Dernière: Il y a 4h</p>
        </div>
      </div>

      {/* Security Alerts */}
      <div className="mb-8">
        <div className="bg-white shadow-sm rounded-lg border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Alertes de Sécurité</h3>
              <button className="text-sm text-blue-600 hover:text-blue-800">Voir toutes</button>
            </div>
          </div>
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">IP/Source</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Heure</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {alertesData.map((alerte, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getAlertColor(alerte.type)}`}>
                        {alerte.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{alerte.message}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{alerte.ip}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{alerte.heure}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(alerte.statut)}`}>
                        {alerte.statut}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Users and Audit */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Users Security */}
        <div className="bg-white shadow-sm rounded-lg border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Sécurité des Utilisateurs</h3>
          </div>
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Utilisateur</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rôle</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">2FA</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {utilisateursData.map((user, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{user.nom}</div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.rôle}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        user.authentification_2fa === 'Activée' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {user.authentification_2fa}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        user.statut === 'Actif' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {user.statut}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Audit Log */}
        <div className="bg-white shadow-sm rounded-lg border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Journal d'Audit</h3>
          </div>
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Utilisateur</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Résultat</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {auditData.map((audit, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{audit.action}</div>
                        <div className="text-sm text-gray-500">{audit.heure}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm text-gray-900">{audit.utilisateur}</div>
                        <div className="text-sm text-gray-500">{audit.ip}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        audit.résultat === 'Succès' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {audit.résultat}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Security Recommendations */}
      <div className="bg-white shadow-sm rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Recommandations de Sécurité</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Critique: Renouveler le certificat SSL</p>
                  <p className="text-sm text-gray-500">Le certificat expire dans 30 jours</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Important: Activer 2FA pour tous</p>
                  <p className="text-sm text-gray-500">13% des utilisateurs n'ont pas activé la 2FA</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Recommandé: Audit de sécurité trimestriel</p>
                  <p className="text-sm text-gray-500">Planifier le prochain audit</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Complété: Mise à jour sécurité</p>
                  <p className="text-sm text-gray-500">Toutes les mises à jour appliquées</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Complété: Sauvegarde automatique</p>
                  <p className="text-sm text-gray-500">Sauvegardes quotidiennes configurées</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Suggéré: Formation sécurité équipe</p>
                  <p className="text-sm text-gray-500">Organiser une session de sensibilisation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Securite;