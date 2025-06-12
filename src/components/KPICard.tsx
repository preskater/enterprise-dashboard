import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: LucideIcon;
  description?: string;
}

const KPICard: React.FC<KPICardProps> = ({ title, value, change, changeType, icon: Icon, description }) => {
  const changeColor = {
    positive: 'text-green-600',
    negative: 'text-red-600',
    neutral: 'text-gray-600'
  };

  const changeBackground = {
    positive: 'bg-green-100',
    negative: 'bg-red-100',
    neutral: 'bg-gray-100'
  };

  return (
    <div className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-200">
      <div className="p-6">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Icon className="h-8 w-8 text-gray-400" />
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
              <dd>
                <div className="text-lg font-medium text-gray-900">{value}</div>
              </dd>
            </dl>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className={`inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium ${changeBackground[changeType]} ${changeColor[changeType]}`}>
            {change}
          </div>
          {description && (
            <div className="text-sm text-gray-500">{description}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default KPICard;