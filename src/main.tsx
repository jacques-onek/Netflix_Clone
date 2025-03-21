import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClientProvider,QueryClient } from '@tanstack/react-query'
import '@fontsource/poppins/300.css'; // Light
import '@fontsource/poppins/400.css'; // Normal
import '@fontsource/poppins/700.css'; // Bold


const query = new QueryClient()
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={query}>
       <App />
    </QueryClientProvider>
  </StrictMode>,
)
