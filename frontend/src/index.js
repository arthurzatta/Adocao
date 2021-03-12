import React from 'react';
import { LogBox } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import './config/ReactotronConfig';
import { store, persistor } from './store';

import App from './App';

export default function Index() {
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        < NavigationContainer >
          <App />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
