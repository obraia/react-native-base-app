import React from "react";
import { useSelector } from "react-redux";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavBar } from "../shared/components/navbar";
import { HomeNavigator } from "../modules/home/stacks";
import { SettingsNavigator } from "../modules/settings/stacks";
import { RootState } from "../store";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {

  const { theme } = useSelector((state: RootState) => state.theme);

  return (
    <Tab.Navigator
      tabBar={props => NavBar({ ...props, theme })}
      initialRouteName="Settings"
      sceneContainerStyle={{ backgroundColor: theme.colors.background }}>
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Favorites" component={HomeNavigator} />
      <Tab.Screen name="Search" component={HomeNavigator} />
      <Tab.Screen name="Settings" component={SettingsNavigator} />
    </Tab.Navigator>
  )
}

export { TabNavigator }
