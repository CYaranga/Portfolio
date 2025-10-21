import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App';

// Modern client-side hydration with error handling
function hydrateApp() {
  const container = document.body;
  
  if (container) {
    try {
      hydrateRoot(container, <App />);
      console.log('✅ Client-side hydration completed successfully');
    } catch (error) {
      console.error('❌ Client-side hydration failed:', error);
    }
  } else {
    console.error('❌ Root container not found');
  }
}

// Start hydration when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', hydrateApp);
} else {
  hydrateApp();
}
