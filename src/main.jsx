import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Context from './CONTROL/context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <Context>
      <App />
      <ReactQueryDevtools initialIsOpen={true} />
    </Context>
  </QueryClientProvider>
);
