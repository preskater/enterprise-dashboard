import React, { useId, useState } from 'react';

interface ChartProps {
  title: string;
  data: { month: string; value: number }[];
  type: 'line' | 'bar';
}

const Chart: React.FC<ChartProps> = ({ title, data, type }) => {
  const maxValue = Math.max(...data.map(d => d.value));

  const handleMouseEnter = (id: string) => {
    const barElement = document.getElementById(id);
    if (barElement) {
      barElement.style.backgroundColor = 'var(--color-primary-hover, #4f46e5)';
    }
  }
  const handleMouseLeave = (id: string) => {
    const barElement = document.getElementById(id);
    if (barElement) {
      barElement.style.backgroundColor = 'var(--color-primary, #2563eb)';
    }
  }
  const id = useId();

  return (
    <div className="bg-white shadow-sm rounded-lg border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      </div>
      <div className="p-6">
        <div className="mt-6 flow-root">
          <div className="flex items-end justify-between h-64 space-x-2">
            {data.map((item, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div className="w-full flex items-end justify-center" style={{ height: '200px' }}>
                  {type === 'bar' ? (
                    <div
                      id={`bar-${id}-${index}`}
                      className="w-full rounded-t-md transition-all duration-1000 ease-out"
                      style={{
                        height: `${(item.value / maxValue) * 180}px`,
                        animationDelay: `${index * 100}ms`,
                        backgroundColor: 'var(--color-primary, #2563eb)',
                      }}
                      onMouseEnter={() => handleMouseEnter(`bar-${id}-${index}`)}
                      onMouseLeave={() => handleMouseLeave(`bar-${id}-${index}`)}
                    />
                  ) : (
                    <div
                      id={`bar-${id}-${index}`}
                      className="w-2 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        height: `${(item.value / maxValue) * 180}px`,
                        animationDelay: `${index * 100}ms`,
                        backgroundColor: 'var(--color-primary, #2563eb)',
                      }}
                      onMouseEnter={() => handleMouseEnter(`bar-${id}-${index}`)}
                      onMouseLeave={() => handleMouseLeave(`bar-${id}-${index}`)}
                    />
                  )}
                </div>
                <div className="mt-2 text-xs text-gray-500 text-center">{item.month}</div>
                <div className="text-sm font-medium text-gray-900">{item.value.toLocaleString('fr-FR')}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;