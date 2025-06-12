import React, { useState } from 'react';

export interface RouterContextType {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export const RouterContext = React.createContext<RouterContextType>({
  currentPage: 'dashboard',
  setCurrentPage: () => {}
});

interface RouterProps {
  children: React.ReactNode;
}

const Router: React.FC<RouterProps> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('dashboard');

  return (
    <RouterContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </RouterContext.Provider>
  );
};

export default Router;