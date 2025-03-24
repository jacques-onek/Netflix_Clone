import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClientProvider,QueryClient } from '@tanstack/react-query'
import '@fontsource/poppins/300.css'; // Light
import '@fontsource/poppins/400.css'; // Normal
import '@fontsource/poppins/700.css'; // Bold
import { NavBarContextProvider } from './context/NAvBarcontext.tsx'



const query = new QueryClient()
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={query}>
      <NavBarContextProvider>
       <App />
      </NavBarContextProvider>
    </QueryClientProvider>
  </StrictMode>,
)
