import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import CreateUser from '../pages/CreateUser';
import MyAccount from '../pages/MyAccount';
import CreatePet from '../pages/CreatePet';
import Filter from '../pages/FilterPets';
import DescriptionPet from '../pages/DescriptionPet';
import LostPet from '../pages/LostPet';
import Tabs from './tabs.routes';

const AppStack = createStackNavigator();

export default function createRouter(signedIn = false) {
  return (
    <AppStack.Navigator headerMode="none" initialRouteName={signedIn ? 'Tabs' : 'Welcome'}>
      {signedIn === true ? (
        <>
          <AppStack.Screen name="Tabs" component={Tabs} />
          <AppStack.Screen name="MyAccount" component={MyAccount} />
          <AppStack.Screen name="CreatePet" component={CreatePet} />
          <AppStack.Screen name="Filter" component={Filter} />
          <AppStack.Screen name="DescriptionPet" component={DescriptionPet} />
          <AppStack.Screen name="LostPet" component={LostPet} />
        </>
      ) : (
          <>
            <AppStack.Screen name="Welcome" component={Welcome} />
            <AppStack.Screen name="Login" component={Login} />
            <AppStack.Screen name="CreateUser" component={CreateUser} />
          </>
        )}
    </AppStack.Navigator>
  );
}
