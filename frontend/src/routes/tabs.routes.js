import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from '../pages/Home';
import Notification from '../pages/Notifications';
import Profile from '../pages/Profile';
<<<<<<< HEAD
import Schedule from '../pages/Schedule';
import CreatePet from '../pages/CreatePet';
import Filter from '../pages/FilterPets';
import DescriptionPet from '../pages/DescriptionPet';
=======
>>>>>>> imagePicker

const Tab = createBottomTabNavigator();

export default function TabsRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = "Home";

          if (route.name === "Home") {
            iconName = 'pets';
          } else if (route.name === 'Notification') {
            iconName = 'notifications';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          }
          return <Icon name={iconName} size={40} color={color} />
        }
      })}
      tabBarOptions={{
        activeTintColor: '#fcce42',
        inactiveTintColor: '#a4a4a4',
        showLabel: false,
      }}
    >
<<<<<<< HEAD
      <Tab.Screen name="Home" component={CreatePet} />
      <Tab.Screen name="Schedule" component={DescriptionPet} />
=======
      <Tab.Screen name="Home" component={Home} />
>>>>>>> imagePicker
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
