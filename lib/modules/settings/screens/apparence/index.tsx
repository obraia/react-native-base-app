import React, { useState } from "react";
import { AdjustSolid, PaletteOutlined } from "../../components/icons";
import { Item } from "../../components/item";
import { Group } from "../../components/group";
import { Container } from "./styles";
import { Switch } from "../../../../shared/components/switch";

const Apparence = () => {

  const [darkMode, setDarkMode] = useState(false);

  const items = [
    {
      title: "Dark mode",
      icon: AdjustSolid,
      action: () => Switch({ value: darkMode, color: '#FF7300', ml: true }),
      onPress: () => setDarkMode(!darkMode),
      color: "#FF7300"
    },
  ];

  return (
    <Container>
      <Group>
        {items.map((item, index) => (
          <Item
            key={index}
            title={item.title}
            icon={item.icon}
            action={item.action}
            color={item.color}
            border={index !== 0}
            onPress={item.onPress} />
        ))}
      </Group>
    </Container>
  );
}

export { Apparence }