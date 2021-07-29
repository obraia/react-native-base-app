import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { NavigationHelpers, ParamListBase, TabNavigationState } from "@react-navigation/native";
import { BottomTabNavigationEventMap } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import { DefaultTheme } from "styled-components";
import { Button, Container, Label } from "./styles";
import { HomeOutlined, HeartOutlined, SearchOutlined, SettingsOutlined } from "../icons";

interface IProps extends BottomTabBarProps {
  state: TabNavigationState<ParamListBase>,
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>,
  theme: DefaultTheme
}

const NavBar = ({ state, navigation, theme }: IProps) => {

  const items = [
    { title: "Home", icon: HomeOutlined, page: "Home", color: theme.colors.primary },
    { title: "Favorites", icon: HeartOutlined, page: "Favorites", color: theme.colors.primary },
    { title: "Search", icon: SearchOutlined, page: "Search", color: theme.colors.primary },
    { title: "Settings", icon: SettingsOutlined, page: "Settings", color: theme.colors.primary },
  ];

  return (
    <Container>
      {items.map((item, index) => {
        const isSelected = index === state.index;

        return (
          <Button
            key={index}
            onPress={() => navigation.navigate(item.page)}
            active={isSelected}
            color={item.color}>

            <item.icon color={isSelected ? item.color : theme.colors.textNavbar} />

            {isSelected && (
              <Label color={item.color}>
                {item.title}
              </Label>
            )}
          </Button>
        )
      })}
    </Container>
  )
}

export { NavBar }