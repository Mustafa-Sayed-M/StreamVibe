import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Redux:
import { Provider } from 'react-redux';
import { store } from './Store/store';

// React Router:
import { HashRouter as Router } from 'react-router-dom';

// Font Awesome:
import "@fortawesome/fontawesome-free/css/all.min.css";

// React Lazy Loading Image:
import 'react-lazy-load-image-component/src/effects/blur.css';

// React Aos:
import 'aos/dist/aos.css';

// React Query / Tanstack:
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Provider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();