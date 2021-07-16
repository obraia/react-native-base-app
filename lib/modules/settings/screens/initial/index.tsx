import React from "react";
import { BellOutlined, InfoOutlined, PaletteOutlined } from "../../components/icons";
import { Item } from "../../components/item";
import { Profile } from "../../components/profile";
import { Container, Group } from "./styles";

const Settings = () => {

  const items = [
    { title: "Notifications", icon: BellOutlined, page: "Notifications", color: "#FF7300" },
    { title: "Apparence", icon: PaletteOutlined, page: "Apparence", color: "#FF7300" },
    { title: "About", icon: InfoOutlined, page: "About", color: "#FF7300" },
  ];

  return (
    <Container>
      <Profile
        name={'Bryan Diniz'}
        email={'obraiadev@gmail.com'}
        avatarUrl={'https://avatars.githubusercontent.com/u/59900769?v=4'} />

      <Group mt>
        {items.map((item, index) => (
          <Item
            key={index}
            title={item.title}
            page={item.page}
            icon={item.icon}
            color={item.color}
            border={index !== 0} />
        ))}
      </Group>

    </Container>
  );
}

export { Settings }