import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Font Awesome:
import "@fortawesome/fontawesome-free/css/all.min.css";

// React Router DOM:
import { BrowserRouter } from 'react-router-dom';
// React Aos:
import 'aos/dist/aos.css';
// Swiper:
import 'swiper/css';
import 'swiper/css/pagination';
// React Lazy Loading:
import 'react-lazy-load-image-component/src/effects/blur.css';
// React Query / Tanstack:
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// Create a client
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
)
