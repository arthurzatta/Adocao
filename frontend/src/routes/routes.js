import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../pages/Welcome';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <AppStack.Navigator headerMode="none">
      <AppStack.Screen name="Welcome" component={Welcome} />
    </AppStack.Navigator>
  );
}

export default Routes;
