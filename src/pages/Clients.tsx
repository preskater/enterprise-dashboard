import React from 'react';
import DataTable from '../components/DataTable';
import KPICard from '../components/KPICard';
import { Users, UserPlus, UserCheck, TrendingUp, DollarSign, Clock } from 'lucide-react';

const Clients: React.FC = () => {
  const clientsData = [
    {
      nom: 'TechCorp Solutions',
      email: 'contact@techcorp.fr',
      secteur: 'Technologie',
      chiffre_affaires: '€145,000',
      statut: 'Premium',
      date_inscription: '2023-03-15',
      dernière_activité: '2024-01-15'
    },
    {
      nom: 'Innovex SA',
      email: 'info@innovex.fr',
      secteur: 'Finance',
      chiffre_affaires: '€278,500',
      statut: 'Enterprise',
      date_inscription: '2023-01-22',
      dernière_activité: '2024-01-14'
    },
    {
      nom: 'Digital Dynamics',
      email: 'hello@digitaldynamics.fr',
      secteur: 'Marketing',
      chiffre_affaires: '€82,100',
      statut: 'Standard',
      date_inscription: '2023-06-08',
      dernière_activité: '2024-01-13'
    },
    {
      nom: 'CloudFirst SARL',
      email: 'contact@cloudfirst.fr',
      secteur: 'Cloud Computing',
      chiffre_affaires: '€189,750',
      statut: 'Premium',
      date_inscription: '2023-02-11',
      dernière_activité: '2024-01-12'
    },
    {
      nom: 'GreenTech Industries',
      email: 'info@greentech.fr',
      secteur: 'Environnement',
      chiffre_affaires: '€156,200',
      statut: 'Premium',
      date_inscription: '2023-04-19',
      dernière_activité: '2024-01-11'
    },
    {
      nom: 'DataFlow Analytics',
      email: 'contact@dataflow.fr',
      secteur: 'Analytics',
      chiffre_affaires: '€234,800',
      statut: 'Enterprise',
      date_inscription: '2022-11-30',
      dernière_activité: '2024-01-10'
    },
    {
      nom: 'SecureNet Pro',
      email: 'admin@securenet.fr',
      secteur: 'Cybersécurité',
      chiffre_affaires: '€198,400',
      statut: 'Premium',
      date_inscription: '2023-05-14',
      dernière_activité: '2024-01-09'
    },
    {
      nom: 'AutomateX Solutions',
      email: 'support@automatex.fr',
      secteur: 'Automatisation',
      chiffre_affaires: '€167,300',
      statut: 'Standard',
      date_inscription: '2023-07-25',
      dernière_activité: '2024-01-08'
    }
  ];

  const prospectsData = [
    {
      nom: 'FutureTech SARL',
      email: 'contact@futuretech.fr',
      secteur: 'IA & Machine Learning',
      intérêt: 'Enterprise Suite',
      score: '85/100',
      dernière_interaction: '2024-01-14'
    },
    {
      nom: 'SmartBusiness Co',
      email: 'info@smartbusiness.fr',
      secteur: 'Consulting',
      intérêt: 'Analytics Dashboard',
      score: '72/100',
      dernière_interaction: '2024-01-13'
    },
    {
      nom: 'EcoSolutions France',
      email: 'contact@ecosolutions.fr',
      secteur: 'Développement Durable',
      intérêt: 'Team Collaboration',
      score: '68/100',
      dernière_interaction: '2024-01-12'
    },
    {
      nom: 'NextGen Startup',
      email: 'hello@nextgen.fr',
      secteur: 'Fintech',
      intérêt: 'Security Shield',
      score: '91/100',
      dernière_interaction: '2024-01-11'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Gestion des Clients</h1>
        <p className="mt-2 text-sm text-gray-600">
          Vue d'ensemble de votre portefeuille client et prospects
        </p>
      </div>

      {/* Client KPIs */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mb-8">
        <KPICard
          title="Total Clients"
          value="1,847"
          change="+12.3%"
          changeType="positive"
          icon={Users}
          description="clients actifs"
        />
        <KPICard
          title="Nouveaux Clients"
          value="156"
          change="+8.7%"
          changeType="positive"
          icon={UserPlus}
          description="ce mois"
        />
        <KPICard
          title="Taux de Rétention"
          value="94.2%"
          change="+2.1%"
          changeType="positive"
          icon={UserCheck}
          description="vs mois dernier"
        />
        <KPICard
          title="Valeur Moyenne"
          value="€8,450"
          change="+15.8%"
          changeType="positive"
          icon={DollarSign}
          description="par client"
        />
        <KPICard
          title="Croissance MRR"
          value="+18.4%"
          change="+3.2%"
          changeType="positive"
          icon={TrendingUp}
          description="mensuelle"
        />
        <KPICard
          title="Temps Réponse"
          value="1h 23m"
          change="-18m"
          changeType="positive"
          icon={Clock}
          description="support moyen"
        />
      </div>

      {/* Client Segments */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Clients Enterprise</p>
              <p className="text-2xl font-bold text-blue-600">247</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">€1.2M ARR</p>
              <p className="text-xs text-green-600">+23.4%</p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Clients Premium</p>
              <p className="text-2xl font-bold text-purple-600">892</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">€680K ARR</p>
              <p className="text-xs text-green-600">+18.7%</p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Clients Standard</p>
              <p className="text-2xl font-bold text-green-600">708</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">€245K ARR</p>
              <p className="text-xs text-green-600">+12.1%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Clients Table */}
      <div className="mb-8">
        <DataTable
          title="Liste des Clients Actifs"
          headers={['Nom', 'Email', 'Secteur', 'Chiffre d\'Affaires', 'Statut', 'Date Inscription', 'Dernière Activité']}
          data={clientsData}
          actions={true}
        />
      </div>

      {/* Prospects Table */}
      <div className="mb-8">
        <DataTable
          title="Prospects Qualifiés"
          headers={['Nom', 'Email', 'Secteur', 'Intérêt', 'Score', 'Dernière Interaction']}
          data={prospectsData}
          actions={true}
        />
      </div>

      {/* Client Activity Timeline */}
      <div className="bg-white shadow-sm rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Activité Récente des Clients</h3>
        </div>
        <div className="p-6">
          <div className="flow-root">
            <ul className="-mb-8">
              <li>
                <div className="relative pb-8">
                  <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                  <div className="relative flex space-x-3">
                    <div>
                      <span className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
                        <UserPlus className="h-5 w-5 text-white" />
                      </span>
                    </div>
                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                      <div>
                        <p className="text-sm text-gray-900">Nouveau client <strong>TechCorp Solutions</strong> inscrit</p>
                        <p className="text-sm text-gray-500">Plan Premium - €299/mois</p>
                      </div>
                      <div className="text-right text-sm whitespace-nowrap text-gray-500">
                        Il y a 2 heures
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative pb-8">
                  <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                  <div className="relative flex space-x-3">
                    <div>
                      <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
                        <TrendingUp className="h-5 w-5 text-white" />
                      </span>
                    </div>
                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                      <div>
                        <p className="text-sm text-gray-900"><strong>Innovex SA</strong> a upgradé vers Enterprise</p>
                        <p className="text-sm text-gray-500">Nouveau MRR: €899/mois</p>
                      </div>
                      <div className="text-right text-sm whitespace-nowrap text-gray-500">
                        Il y a 5 heures
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative">
                  <div className="relative flex space-x-3">
                    <div>
                      <span className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center ring-8 ring-white">
                        <DollarSign className="h-5 w-5 text-white" />
                      </span>
                    </div>
                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                      <div>
                        <p className="text-sm text-gray-900">Paiement reçu de <strong>CloudFirst SARL</strong></p>
                        <p className="text-sm text-gray-500">Montant: €1,299 - Facture annuelle</p>
                      </div>
                      <div className="text-right text-sm whitespace-nowrap text-gray-500">
                        Il y a 1 jour
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;