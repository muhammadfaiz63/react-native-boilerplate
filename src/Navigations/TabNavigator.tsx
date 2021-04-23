import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen } from 'Screens/index';
import Icon from './Fragments/Icon';
import { Primary } from 'Themes/Colors'

const Tab = createBottomTabNavigator();

function TabPatientNavigator() {
  return (
    <Tab.Navigator tabBarOptions={{ activeTintColor: Primary }}>
      <Tab.Screen
        name="Beranda"
        options={{ tabBarIcon: (evaProps) => (<Icon name="home" {...evaProps} />)}}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Sehatku"
        options={{ tabBarIcon: (evaProps) => <Icon name="camera-outline" {...evaProps} /> }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Berita"
        options={{
          tabBarIcon: (evaProps) => <Icon name="settings-outline" {...evaProps} />,
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Notifikasi"
        options={{
          tabBarIcon: (evaProps) => <Icon name="settings-outline" {...evaProps} />,
        }}
        component={HomeScreen}
      />
    </Tab.Navigator>
  );
}

export default TabPatientNavigator;
