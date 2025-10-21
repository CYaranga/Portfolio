import React, { createContext, useContext, useState, useCallback } from 'react';

interface AppState {
  theme: 'light' | 'dark';
  isLoading: boolean;
  currentPage: string;
}

interface AppContextType {
  state: AppState;
  setTheme: (theme: 'light' | 'dark') => void;
  setLoading: (loading: boolean) => void;
  setCurrentPage: (page: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, setState] = useState<AppState>({
    theme: 'light',
    isLoading: false,
    currentPage: '/',
  });

  const setTheme = useCallback((theme: 'light' | 'dark') => {
    setState(prev => ({ ...prev, theme }));
  }, []);

  const setLoading = useCallback((isLoading: boolean) => {
    setState(prev => ({ ...prev, isLoading }));
  }, []);

  const setCurrentPage = useCallback((currentPage: string) => {
    setState(prev => ({ ...prev, currentPage }));
  }, []);

  const value: AppContextType = {
    state,
    setTheme,
    setLoading,
    setCurrentPage,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
