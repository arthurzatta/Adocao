import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import CreateUser from '../pages/CreateUser';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    < NavigationContainer >
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="Welcome" component={Welcome} />
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="CreateUser" component={CreateUser} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
