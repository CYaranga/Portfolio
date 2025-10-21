// Modern TypeScript interfaces for the application

export interface AppState {
  theme: 'light' | 'dark';
  isLoading: boolean;
  currentPage: string;
}

export interface AppContextType {
  state: AppState;
  setTheme: (theme: 'light' | 'dark') => void;
  setLoading: (loading: boolean) => void;
  setCurrentPage: (page: string) => void;
}

export interface ApiResponse<T = any> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export interface NavigationItem {
  path: string;
  label: string;
  icon?: string;
}

export interface RouteConfig {
  path: string;
  element: React.ReactElement;
  children?: RouteConfig[];
}

// Component prop interfaces
export interface LayoutProps {
  children?: React.ReactNode;
}

export interface NavigationProps {
  items?: NavigationItem[];
}

export interface PageProps {
  title?: string;
  className?: string;
}
