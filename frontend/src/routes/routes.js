import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import CreateUser from '../pages/CreateUser';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <AppStack.Navigator headerMode="none">
      <AppStack.Screen name="Welcome" component={Welcome} />
      <AppStack.Screen name="Login" component={Login} />
      <AppStack.Screen name="CreateUser" component={CreateUser} />
    </AppStack.Navigator>
  );
}

export default Routes;
