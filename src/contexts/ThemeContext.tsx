import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark' | 'auto';
type AccentColor = 'blue' | 'green' | 'purple' | 'red' | 'orange' | 'pink';

interface ThemeContextType {
  theme: Theme;
  accentColor: AccentColor;
  actualTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
  setAccentColor: (color: AccentColor) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme');
    return (saved as Theme) || 'light';
  });
  
  const [accentColor, setAccentColor] = useState<AccentColor>(() => {
    const saved = localStorage.getItem('accentColor');
    return (saved as AccentColor) || 'blue';
  });

  const [actualTheme, setActualTheme] = useState<'light' | 'dark'>('light');

  // Detect system theme preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const updateActualTheme = () => {
      if (theme === 'auto') {
        setActualTheme(mediaQuery.matches ? 'dark' : 'light');
      } else {
        setActualTheme(theme);
      }
    };

    updateActualTheme();
    mediaQuery.addEventListener('change', updateActualTheme);

    return () => mediaQuery.removeEventListener('change', updateActualTheme);
  }, [theme]);

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;
    
    // Remove existing theme classes
    root.classList.remove('light', 'dark');
    
    // Add current theme class
    root.classList.add(actualTheme);
    
    // Apply accent color CSS variables
    const accentColors = {
      blue: {
        primary: '#2563eb',
        primaryHover: '#1d4ed8',
        primaryLight: '#dbeafe',
        primaryDark: '#1e40af'
      },
      green: {
        primary: '#059669',
        primaryHover: '#047857',
        primaryLight: '#d1fae5',
        primaryDark: '#065f46'
      },
      purple: {
        primary: '#7c3aed',
        primaryHover: '#6d28d9',
        primaryLight: '#ede9fe',
        primaryDark: '#5b21b6'
      },
      red: {
        primary: '#dc2626',
        primaryHover: '#b91c1c',
        primaryLight: '#fee2e2',
        primaryDark: '#991b1b'
      },
      orange: {
        primary: '#ea580c',
        primaryHover: '#c2410c',
        primaryLight: '#fed7aa',
        primaryDark: '#9a3412'
      },
      pink: {
        primary: '#db2777',
        primaryHover: '#be185d',
        primaryLight: '#fce7f3',
        primaryDark: '#9d174d'
      }
    };

    const colors = accentColors[accentColor];
    root.style.setProperty('--color-primary', colors.primary);
    root.style.setProperty('--color-primary-hover', colors.primaryHover);
    root.style.setProperty('--color-primary-light', colors.primaryLight);
    root.style.setProperty('--color-primary-dark', colors.primaryDark);
    
  }, [actualTheme, accentColor]);

  // Save preferences to localStorage
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('accentColor', accentColor);
  }, [accentColor]);

  return (
    <ThemeContext.Provider value={{
      theme,
      accentColor,
      actualTheme,
      setTheme,
      setAccentColor
    }}>
      {children}
    </ThemeContext.Provider>
  );
};