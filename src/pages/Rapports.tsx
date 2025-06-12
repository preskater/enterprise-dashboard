import React from 'react';
import Chart from '../components/Chart';
import KPICard from '../components/KPICard';
import { FileText, Download, TrendingUp, BarChart3, PieChart, Calendar } from 'lucide-react';

const Rapports: React.FC = () => {
  const performanceData = [
    { month: 'Jan', value: 2450000 },
    { month: 'Fév', value: 2780000 },
    { month: 'Mar', value: 2650000 },
    { month: 'Avr', value: 3120000 },
    { month: 'Mai', value: 3450000 },
    { month: 'Jun', value: 3890000 }
  ];

  const profitData = [
    { month: 'Jan', value: 485000 },
    { month: 'Fév', value: 567000 },
    { month: 'Mar', value: 523000 },
    { month: 'Avr', value: 634000 },
    { month: 'Mai', value: 712000 },
    { month: 'Jun', value: 798000 }
  ];

  const rapportsData = [
    {
      nom: 'Rapport Mensuel - Juin 2024',
      type: 'Performance Globale',
      date_création: '2024-07-01',
      statut: 'Généré',
      taille: '2.4 MB'
    },
    {
      nom: 'Analyse Trimestrielle Q2',
      type: 'Analyse Financière',
      date_création: '2024-06-30',
      statut: 'Généré',
      taille: '5.1 MB'
    },
    {
      nom: 'Rapport Clients - Juin',
      type: 'Analyse Clients',
      date_création: '2024-06-28',
      statut: 'Généré',
      taille: '1.8 MB'
    },
    {
      nom: 'Performance Produits',
      type: 'Analyse Produits',
      date_création: '2024-06-25',
      statut: 'En cours',
      taille: '-'
    },
    {
      nom: 'Rapport Sécurité',
      type: 'Audit Sécurité',
      date_création: '2024-06-20',
      statut: 'Généré',
      taille: '3.2 MB'
    }
  ];

  const metriquesData = [
    { métrique: 'Chiffre d\'Affaires Total', valeur: '€18,945,672', variation: '+18.2%', période: 'YTD' },
    { métrique: 'Bénéfice Net', valeur: '€3,789,134', variation: '+22.7%', période: 'YTD' },
    { métrique: 'Marge Brute', valeur: '68.4%', variation: '+2.1%', période: 'YTD' },
    { métrique: 'EBITDA', valeur: '€4,567,890', variation: '+19.8%', période: 'YTD' },
    { métrique: 'Coût d\'Acquisition Client', valeur: '€245', variation: '-12.3%', période: 'Mensuel' },
    { métrique: 'Valeur Vie Client', valeur: '€8,450', variation: '+15.6%', période: 'Annuel' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Rapports & Analytics</h1>
        <p className="mt-2 text-sm text-gray-600">
          Analyses détaillées et rapports de performance de votre entreprise
        </p>
      </div>

      {/* Report KPIs */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mb-8">
        <KPICard
          title="Rapports Générés"
          value="247"
          change="+12"
          changeType="positive"
          icon={FileText}
          description="ce mois"
        />
        <KPICard
          title="Téléchargements"
          value="1,834"
          change="+23.4%"
          changeType="positive"
          icon={Download}
          description="ce mois"
        />
        <KPICard
          title="ROI Moyen"
          value="284%"
          change="+18.7%"
          changeType="positive"
          icon={TrendingUp}
          description="sur 12 mois"
        />
        <KPICard
          title="Analyses Auto"
          value="156"
          change="+8"
          changeType="positive"
          icon={BarChart3}
          description="programmées"
        />
        <KPICard
          title="Dashboards"
          value="23"
          change="+3"
          changeType="positive"
          icon={PieChart}
          description="actifs"
        />
        <KPICard
          title="Fréquence"
          value="Quotidien"
          change="Optimisé"
          changeType="positive"
          icon={Calendar}
          description="génération"
        />
      </div>

      {/* Performance Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Chart
          title="Performance Globale (€)"
          data={performanceData}
          type="line"
        />
        <Chart
          title="Évolution des Bénéfices (€)"
          data={profitData}
          type="bar"
        />
      </div>

      {/* Key Metrics */}
      <div className="mb-8">
        <div className="bg-white shadow-sm rounded-lg border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Métriques Clés</h3>
              <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                <Download className="h-4 w-4 mr-2" />
                Exporter
              </button>
            </div>
          </div>
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Métrique</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valeur</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Variation</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Période</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {metriquesData.map((metric, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{metric.métrique}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{metric.valeur}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`${metric.variation.startsWith('+') ? 'text-green-600' : metric.variation.startsWith('-') ? 'text-red-600' : 'text-gray-600'}`}>
                        {metric.variation}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{metric.période}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Reports List */}
      <div className="mb-8">
        <div className="bg-white shadow-sm rounded-lg border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Rapports Récents</h3>
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                Nouveau Rapport
              </button>
            </div>
          </div>
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Création</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Taille</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {rapportsData.map((rapport, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{rapport.nom}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{rapport.type}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{rapport.date_création}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        rapport.statut === 'Généré' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {rapport.statut}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{rapport.taille}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                      {rapport.statut === 'Généré' ? (
                        <button className="hover:text-blue-800">Télécharger</button>
                      ) : (
                        <span className="text-gray-400">En attente</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Report Templates */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-medium text-gray-900">Modèles de Rapports</h4>
            <FileText className="h-6 w-6 text-gray-400" />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Rapport Financier</span>
              <button className="text-xs text-blue-600 hover:text-blue-800">Utiliser</button>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Analyse Marketing</span>
              <button className="text-xs text-blue-600 hover:text-blue-800">Utiliser</button>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Performance Équipe</span>
              <button className="text-xs text-blue-600 hover:text-blue-800">Utiliser</button>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Audit Sécurité</span>
              <button className="text-xs text-blue-600 hover:text-blue-800">Utiliser</button>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-medium text-gray-900">Planification</h4>
            <Calendar className="h-6 w-6 text-gray-400" />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Rapport Quotidien</span>
              <span className="text-xs text-green-600">Actif</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Rapport Hebdomadaire</span>
              <span className="text-xs text-green-600">Actif</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Rapport Mensuel</span>
              <span className="text-xs text-green-600">Actif</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Rapport Trimestriel</span>
              <span className="text-xs text-gray-400">Inactif</span>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-medium text-gray-900">Statistiques</h4>
            <BarChart3 className="h-6 w-6 text-gray-400" />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Rapports ce mois</span>
              <span className="text-sm font-medium text-gray-900">247</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Téléchargements</span>
              <span className="text-sm font-medium text-gray-900">1,834</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Temps moyen</span>
              <span className="text-sm font-medium text-gray-900">2.3s</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Taille moyenne</span>
              <span className="text-sm font-medium text-gray-900">3.1 MB</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rapports;