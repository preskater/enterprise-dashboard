import React from 'react';
import { CheckCircle, XCircle, AlertCircle, User, ShoppingCart } from 'lucide-react';

interface Activity {
  id: number;
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  time: string;
  user?: string;
}

const ActivityFeed: React.FC = () => {
  const activities: Activity[] = [
    {
      id: 1,
      type: 'success',
      message: 'Nouvelle commande reçue de TechCorp Solutions',
      time: 'Il y a 2 minutes',
      user: 'Système'
    },
    {
      id: 2,
      type: 'info',
      message: 'Marie Dubois a mis à jour le profil client Innovex SA',
      time: 'Il y a 15 minutes',
      user: 'Marie Dubois'
    },
    {
      id: 3,
      type: 'warning',
      message: 'Stock faible pour le produit Pro Analytics',
      time: 'Il y a 32 minutes',
      user: 'Système'
    },
    {
      id: 4,
      type: 'success',
      message: 'Paiement confirmé pour la facture #FAC-2024-0847',
      time: 'Il y a 1 heure',
      user: 'Système'
    },
    {
      id: 5,
      type: 'error',
      message: 'Échec de synchronisation avec le CRM externe',
      time: 'Il y a 2 heures',
      user: 'Système'
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'error':
        return <XCircle className="h-5 w-5 text-red-500" />;
      case 'warning':
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      default:
        return <User className="h-5 w-5 text-blue-500" />;
    }
  };

  return (
    <div className="bg-white shadow-sm rounded-lg border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Activité Récente</h3>
      </div>
      <div className="p-6">
        <div className="flow-root">
          <ul className="-mb-8">
            {activities.map((activity, activityIdx) => (
              <li key={activity.id}>
                <div className="relative pb-8">
                  {activityIdx !== activities.length - 1 ? (
                    <span
                      className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                      aria-hidden="true"
                    />
                  ) : null}
                  <div className="relative flex space-x-3">
                    <div>
                      <span className="h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white bg-gray-50">
                        {getIcon(activity.type)}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                      <div>
                        <p className="text-sm text-gray-900">{activity.message}</p>
                        <p className="text-sm text-gray-500">{activity.user}</p>
                      </div>
                      <div className="text-right text-sm whitespace-nowrap text-gray-500">
                        {activity.time}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;