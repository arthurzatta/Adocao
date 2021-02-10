import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from '../pages/Home';
import Notification from '../pages/Notifications';
import Profile from '../pages/Profile';
import Schedule from '../pages/Schedule';

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
          } else if (route.name === 'Schedule') {
            iconName = 'calendar-today';
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
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Schedule" component={Schedule} />
    </Tab.Navigator>
  );
}
