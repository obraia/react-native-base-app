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
      initialRouteName="SettingsNavigator"
      tabBar={(props: any) => NavBar({ ...props, theme })}
      sceneContainerStyle={{ backgroundColor: theme.colors.background }}>
      <Tab.Screen name="HomeNavigator" component={HomeNavigator} />
      <Tab.Screen name="FavoritesNavigator" component={HomeNavigator} />
      <Tab.Screen name="SearchNavigator" component={HomeNavigator} />
      <Tab.Screen name="SettingsNavigator" component={SettingsNavigator} />
    </Tab.Navigator>
  )
}

export { TabNavigator }
