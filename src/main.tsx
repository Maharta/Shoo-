import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import CssReset from './CssReset.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <CssReset />
  </StrictMode>
);
