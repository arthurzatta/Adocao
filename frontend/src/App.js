// In App.js in a new project

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes/routes';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
