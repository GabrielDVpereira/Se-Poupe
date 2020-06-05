import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';
import Routes from './src/routes/index.routes';
import AuthContextProvider from './src/contexts/AuthContext';

export default function App() {
  return (
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
  );
}
