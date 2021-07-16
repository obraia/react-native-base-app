import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Button, Container, Label } from "./styles";
import { HomeOutlined, HeartOutlined, SearchOutlined, SettingsOutlined } from "../icons";

const NavBar = ({ state, navigation }: BottomTabBarProps) => {

  const items = [
    { title: "Home", icon: HomeOutlined, page: "Home", color: "#235DD8" },
    { title: "Favorites", icon: HeartOutlined, page: "Favorites", color: "#4CB37F" },
    { title: "Search", icon: SearchOutlined, page: "Search", color: "#A200FF" },
    { title: "Settings", icon: SettingsOutlined, page: "Settings", color: "#FF7300" },
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

            <item.icon color={isSelected ? item.color : '#3b3b3b'} />

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