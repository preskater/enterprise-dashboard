import React from 'react';
import KPICard from '../components/KPICard';
import Chart from '../components/Chart';
import DataTable from '../components/DataTable';
import ActivityFeed from '../components/ActivityFeed';
import { DollarSign, Users, ShoppingCart, TrendingUp, Target, Clock } from 'lucide-react';

const Dashboard: React.FC = () => {
  const revenueData = [
    { month: 'Jan', value: 285000 },
    { month: 'Fév', value: 320000 },
    { month: 'Mar', value: 298000 },
    { month: 'Avr', value: 385000 },
    { month: 'Mai', value: 425000 },
    { month: 'Jun', value: 478000 }
  ];

  const userGrowthData = [
    { month: 'Jan', value: 12400 },
    { month: 'Fév', value: 13200 },
    { month: 'Mar', value: 14100 },
    { month: 'Avr', value: 15800 },
    { month: 'Mai', value: 17200 },
    { month: 'Jun', value: 19600 }
  ];

  const clientsData = [
    {
      nom: 'TechCorp Solutions',
      secteur: 'Technologie',
      chiffre_affaires: '€45,000',
      statut: 'Actif',
      dernière_activité: '2024-01-15'
    },
    {
      nom: 'Innovex SA',
      secteur: 'Finance',
      chiffre_affaires: '€78,500',
      statut: 'Actif',
      dernière_activité: '2024-01-14'
    },
    {
      nom: 'Digital Dynamics',
      secteur: 'Marketing',
      chiffre_affaires: '€32,100',
      statut: 'Prospect',
      dernière_activité: '2024-01-13'
    },
    {
      nom: 'CloudFirst SARL',
      secteur: 'Cloud Computing',
      chiffre_affaires: '€89,750',
      statut: 'Actif',
      dernière_activité: '2024-01-12'
    },
    {
      nom: 'GreenTech Industries',
      secteur: 'Environnement',
      chiffre_affaires: '€56,200',
      statut: 'Actif',
      dernière_activité: '2024-01-11'
    }
  ];

  const produitsData = [
    {
      nom: 'Enterprise Suite Pro',
      catégorie: 'SaaS',
      prix: '€299/mois',
      ventes: '1,247',
      revenus: '€372,453'
    },
    {
      nom: 'Analytics Dashboard',
      catégorie: 'Analytics',
      prix: '€149/mois',
      ventes: '892',
      revenus: '€132,908'
    },
    {
      nom: 'Security Shield',
      catégorie: 'Sécurité',
      prix: '€199/mois',
      ventes: '654',
      revenus: '€130,146'
    },
    {
      nom: 'Team Collaboration',
      catégorie: 'Productivité',
      prix: '€79/mois',
      ventes: '2,156',
      revenus: '€170,324'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Tableau de Bord</h1>
        <p className="mt-2 text-sm text-gray-600">
          Vue d'ensemble des performances de votre entreprise en temps réel
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mb-8">
        <KPICard
          title="Chiffre d'Affaires"
          value="€2,145,847"
          change="+12.5%"
          changeType="positive"
          icon={DollarSign}
          description="vs mois dernier"
        />
        <KPICard
          title="Clients Actifs"
          value="19,634"
          change="+8.2%"
          changeType="positive"
          icon={Users}
          description="vs mois dernier"
        />
        <KPICard
          title="Commandes"
          value="4,892"
          change="+15.3%"
          changeType="positive"
          icon={ShoppingCart}
          description="ce mois"
        />
        <KPICard
          title="Taux de Conversion"
          value="24.8%"
          change="-2.1%"
          changeType="negative"
          icon={Target}
          description="vs mois dernier"
        />
        <KPICard
          title="Croissance"
          value="+18.7%"
          change="+5.4%"
          changeType="positive"
          icon={TrendingUp}
          description="annuelle"
        />
        <KPICard
          title="Temps Moyen"
          value="2h 34m"
          change="-12m"
          changeType="positive"
          icon={Clock}
          description="résolution"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Chart
          title="Évolution du Chiffre d'Affaires"
          data={revenueData}
          type="bar"
        />
        <Chart
          title="Croissance des Utilisateurs"
          data={userGrowthData}
          type="line"
        />
      </div>

      {/* Tables and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <DataTable
            title="Principaux Clients"
            headers={['Nom', 'Secteur', 'Chiffre d\'Affaires', 'Statut', 'Dernière Activité']}
            data={clientsData}
            actions={true}
          />
        </div>
        <div>
          <ActivityFeed />
        </div>
      </div>

      {/* Products Table */}
      <div className="mb-8">
        <DataTable
          title="Performance des Produits"
          headers={['Nom', 'Catégorie', 'Prix', 'Ventes', 'Revenus']}
          data={produitsData}
          actions={true}
        />
      </div>

      {/* Footer Stats */}
      <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">97.8%</div>
            <div className="text-sm text-gray-500">Temps de Disponibilité</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">4.9/5</div>
            <div className="text-sm text-gray-500">Satisfaction Client</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">847</div>
            <div className="text-sm text-gray-500">Tickets Résolus</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">156</div>
            <div className="text-sm text-gray-500">Nouvelles Fonctionnalités</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;