import React from 'react';
import DataTable from '../components/DataTable';
import KPICard from '../components/KPICard';
import Chart from '../components/Chart';
import { Package, ShoppingCart, TrendingUp, DollarSign, Star, Users } from 'lucide-react';

const Produits: React.FC = () => {
  const produitsData = [
    {
      nom: 'Enterprise Suite Pro',
      catégorie: 'SaaS Platform',
      prix: '€299/mois',
      ventes: '1,247',
      revenus: '€372,453',
      stock: 'Illimité',
      statut: 'Actif',
      note: '4.8/5'
    },
    {
      nom: 'Analytics Dashboard',
      catégorie: 'Analytics',
      prix: '€149/mois',
      ventes: '892',
      revenus: '€132,908',
      stock: 'Illimité',
      statut: 'Actif',
      note: '4.6/5'
    },
    {
      nom: 'Security Shield',
      catégorie: 'Cybersécurité',
      prix: '€199/mois',
      ventes: '654',
      revenus: '€130,146',
      stock: 'Illimité',
      statut: 'Actif',
      note: '4.9/5'
    },
    {
      nom: 'Team Collaboration',
      catégorie: 'Productivité',
      prix: '€79/mois',
      ventes: '2,156',
      revenus: '€170,324',
      stock: 'Illimité',
      statut: 'Actif',
      note: '4.7/5'
    },
    {
      nom: 'API Gateway Pro',
      catégorie: 'Infrastructure',
      prix: '€399/mois',
      ventes: '423',
      revenus: '€168,777',
      stock: 'Illimité',
      statut: 'Actif',
      note: '4.5/5'
    },
    {
      nom: 'Mobile SDK',
      catégorie: 'Développement',
      prix: '€99/mois',
      ventes: '1,789',
      revenus: '€177,111',
      stock: 'Illimité',
      statut: 'Actif',
      note: '4.4/5'
    }
  ];

  const ventesData = [
    { month: 'Jan', value: 1847 },
    { month: 'Fév', value: 2134 },
    { month: 'Mar', value: 1923 },
    { month: 'Avr', value: 2456 },
    { month: 'Mai', value: 2789 },
    { month: 'Jun', value: 3124 }
  ];

  const revenusData = [
    { month: 'Jan', value: 245000 },
    { month: 'Fév', value: 289000 },
    { month: 'Mar', value: 267000 },
    { month: 'Avr', value: 334000 },
    { month: 'Mai', value: 378000 },
    { month: 'Jun', value: 423000 }
  ];

  const categoriesData = [
    { catégorie: 'SaaS Platform', produits: 3, revenus: '€892,456', croissance: '+18.2%' },
    { catégorie: 'Analytics', produits: 2, revenus: '€456,789', croissance: '+12.7%' },
    { catégorie: 'Cybersécurité', produits: 4, revenus: '€678,234', croissance: '+25.1%' },
    { catégorie: 'Productivité', produits: 5, revenus: '€534,123', croissance: '+15.8%' },
    { catégorie: 'Infrastructure', produits: 3, revenus: '€723,567', croissance: '+22.4%' },
    { catégorie: 'Développement', produits: 6, revenus: '€445,890', croissance: '+9.3%' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Gestion des Produits</h1>
        <p className="mt-2 text-sm text-gray-600">
          Vue d'ensemble de votre catalogue produits et performances de vente
        </p>
      </div>

      {/* Product KPIs */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mb-8">
        <KPICard
          title="Total Produits"
          value="23"
          change="+3"
          changeType="positive"
          icon={Package}
          description="produits actifs"
        />
        <KPICard
          title="Ventes Totales"
          value="7,161"
          change="+18.4%"
          changeType="positive"
          icon={ShoppingCart}
          description="ce mois"
        />
        <KPICard
          title="Revenus Produits"
          value="€1,151,719"
          change="+22.1%"
          changeType="positive"
          icon={DollarSign}
          description="ce mois"
        />
        <KPICard
          title="Produit Top"
          value="Team Collab"
          change="+2,156"
          changeType="positive"
          icon={TrendingUp}
          description="ventes"
        />
        <KPICard
          title="Note Moyenne"
          value="4.7/5"
          change="+0.2"
          changeType="positive"
          icon={Star}
          description="satisfaction"
        />
        <KPICard
          title="Utilisateurs Actifs"
          value="45,892"
          change="+12.8%"
          changeType="positive"
          icon={Users}
          description="ce mois"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Chart
          title="Évolution des Ventes"
          data={ventesData}
          type="bar"
        />
        <Chart
          title="Revenus par Mois (€)"
          data={revenusData}
          type="line"
        />
      </div>

      {/* Product Categories */}
      <div className="mb-8">
        <div className="bg-white shadow-sm rounded-lg border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Performance par Catégorie</h3>
          </div>
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Catégorie</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Produits</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenus</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Croissance</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {categoriesData.map((cat, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{cat.catégorie}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{cat.produits}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{cat.revenus}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">{cat.croissance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Products Table */}
      <div className="mb-8">
        <DataTable
          title="Catalogue Produits"
          headers={['Nom', 'Catégorie', 'Prix', 'Ventes', 'Revenus', 'Stock', 'Statut', 'Note']}
          data={produitsData}
          actions={true}
        />
      </div>

      {/* Product Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white shadow-sm rounded-lg border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Top Produits par Revenus</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm font-medium text-gray-900">Enterprise Suite Pro</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">€372,453</div>
                  <div className="text-xs text-green-600">+18.2%</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium text-gray-900">Mobile SDK</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">€177,111</div>
                  <div className="text-xs text-green-600">+15.7%</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <span className="text-sm font-medium text-gray-900">Team Collaboration</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">€170,324</div>
                  <div className="text-xs text-green-600">+22.4%</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <span className="text-sm font-medium text-gray-900">API Gateway Pro</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">€168,777</div>
                  <div className="text-xs text-green-600">+12.1%</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-sm rounded-lg border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Alertes Produits</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Nouveau produit lancé</p>
                  <p className="text-sm text-gray-500">API Gateway Pro v2.0 disponible</p>
                  <p className="text-xs text-gray-400">Il y a 2 heures</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Mise à jour requise</p>
                  <p className="text-sm text-gray-500">Security Shield nécessite une mise à jour</p>
                  <p className="text-xs text-gray-400">Il y a 1 jour</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Feedback client</p>
                  <p className="text-sm text-gray-500">Nouvelle fonctionnalité demandée pour Analytics</p>
                  <p className="text-xs text-gray-400">Il y a 2 jours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produits;