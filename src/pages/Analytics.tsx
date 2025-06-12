import React from 'react';
import Chart from '../components/Chart';
import KPICard from '../components/KPICard';
import { TrendingUp, Users, Eye, MousePointer, Clock, Target } from 'lucide-react';

const Analytics: React.FC = () => {
  const trafficData = [
    { month: 'Jan', value: 45200 },
    { month: 'Fév', value: 52100 },
    { month: 'Mar', value: 48900 },
    { month: 'Avr', value: 61200 },
    { month: 'Mai', value: 67800 },
    { month: 'Jun', value: 74500 }
  ];

  const conversionData = [
    { month: 'Jan', value: 18.5 },
    { month: 'Fév', value: 22.1 },
    { month: 'Mar', value: 19.8 },
    { month: 'Avr', value: 24.3 },
    { month: 'Mai', value: 26.7 },
    { month: 'Jun', value: 28.9 }
  ];

  const engagementData = [
    { month: 'Jan', value: 245 },
    { month: 'Fév', value: 267 },
    { month: 'Mar', value: 289 },
    { month: 'Avr', value: 312 },
    { month: 'Mai', value: 334 },
    { month: 'Jun', value: 356 }
  ];

  const sourceData = [
    { source: 'Recherche Organique', visiteurs: '45,234', pourcentage: '42.3%', couleur: 'bg-blue-500' },
    { source: 'Réseaux Sociaux', visiteurs: '28,567', pourcentage: '26.7%', couleur: 'bg-green-500' },
    { source: 'Email Marketing', visiteurs: '18,923', pourcentage: '17.7%', couleur: 'bg-purple-500' },
    { source: 'Publicité Payante', visiteurs: '9,876', pourcentage: '9.2%', couleur: 'bg-orange-500' },
    { source: 'Référencement Direct', visiteurs: '4,321', pourcentage: '4.1%', couleur: 'bg-red-500' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
        <p className="mt-2 text-sm text-gray-600">
          Analyse détaillée du trafic, des conversions et de l'engagement utilisateur
        </p>
      </div>

      {/* Analytics KPIs */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mb-8">
        <KPICard
          title="Visiteurs Uniques"
          value="107,234"
          change="+18.2%"
          changeType="positive"
          icon={Users}
          description="ce mois"
        />
        <KPICard
          title="Pages Vues"
          value="324,567"
          change="+12.8%"
          changeType="positive"
          icon={Eye}
          description="ce mois"
        />
        <KPICard
          title="Taux de Clic"
          value="3.47%"
          change="+0.8%"
          changeType="positive"
          icon={MousePointer}
          description="CTR moyen"
        />
        <KPICard
          title="Temps sur Site"
          value="4m 23s"
          change="+45s"
          changeType="positive"
          icon={Clock}
          description="durée moyenne"
        />
        <KPICard
          title="Taux de Rebond"
          value="32.1%"
          change="-5.2%"
          changeType="positive"
          icon={Target}
          description="vs mois dernier"
        />
        <KPICard
          title="Conversions"
          value="2,847"
          change="+23.4%"
          changeType="positive"
          icon={TrendingUp}
          description="ce mois"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Chart
          title="Évolution du Trafic"
          data={trafficData}
          type="line"
        />
        <Chart
          title="Taux de Conversion (%)"
          data={conversionData}
          type="bar"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Chart
          title="Temps d'Engagement (secondes)"
          data={engagementData}
          type="line"
        />
        
        {/* Traffic Sources */}
        <div className="bg-white shadow-sm rounded-lg border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Sources de Trafic</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {sourceData.map((source, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${source.couleur}`}></div>
                    <span className="text-sm font-medium text-gray-900">{source.source}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">{source.visiteurs}</div>
                    <div className="text-xs text-gray-500">{source.pourcentage}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Analytics Table */}
      <div className="bg-white shadow-sm rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Performance par Page</h3>
        </div>
        <div className="overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Page</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vues</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Visiteurs Uniques</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Temps Moyen</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Taux de Rebond</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">/dashboard</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">89,234</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">67,891</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">5m 12s</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">28.4%</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">/produits</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">45,678</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">34,567</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">3m 45s</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">35.2%</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">/tarifs</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">32,145</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">28,934</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">4m 28s</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">22.1%</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">/contact</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">18,567</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">16,234</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2m 15s</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">45.8%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Analytics;