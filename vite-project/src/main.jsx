import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {ApolloClient, ApolloProvider , InMemoryCache} from '@apollo/client';

//https://rickandmortyapi.com/graphql
const client = new ApolloClient({
  uri:  'https://api.escuelajs.co/graphql',
  cache: new InMemoryCache(),
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>,
)
