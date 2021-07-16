import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NavBar } from "../shared/components/navbar";
import { HomeNavigator } from "../modules/home/stacks";
import { SettingsNavigator } from "../modules/settings/stacks";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={NavBar} initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Favorites" component={HomeNavigator} />
      <Tab.Screen name="Search" component={HomeNavigator} />
      <Tab.Screen name="Settings" component={SettingsNavigator} />
    </Tab.Navigator>
  )
}

export { TabNavigator }
