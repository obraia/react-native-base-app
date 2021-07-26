import React, { useState } from "react";
import { desaturate } from 'polished';
import { GlobeSolid, MobileSolid, NewsSolid } from "../../components/icons";
import { Item } from "../../components/item";
import { Group } from "../../components/group";
import { Container } from "./styles";
import { Switch } from "../../../../shared/components/switch";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { toggleAllNotifications, toggleNews, toggleUpdates } from "../../reducers/notifications";

const Notifications = () => {

  const dispatch = useDispatch();
  const { allNotifications, news, updates } = useSelector((state: RootState) => state.notifications);

  const getColor = (color: string, enabled: boolean) => (
    enabled ? color : desaturate(1, color)
  );

  const items = [
    {
      title: "Notifications",
      icon: GlobeSolid,
      disabled: false,
      action: () => Switch({ value: allNotifications, color: '#FF7300', ml: true }),
      onPress: () => dispatch(toggleAllNotifications()),
      color: "#FF7300"
    },
    {
      title: "News",
      icon: NewsSolid,
      disabled: !allNotifications,
      action: () => Switch({ value: news, color: getColor('#FF7300', allNotifications), ml: true }),
      onPress: () => dispatch(toggleNews()),
      color: getColor('#FF7300', allNotifications)
    },
    {
      title: "App updates",
      icon: MobileSolid,
      disabled: !allNotifications,
      action: () => Switch({ value: updates, color: getColor('#FF7300', allNotifications), ml: true }),
      onPress: () => dispatch(toggleUpdates()),
      color: getColor('#FF7300', allNotifications)
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
            disabled={item.disabled}
            action={item.action}
            color={item.color}
            border={index !== 0}
            onPress={item.onPress} />
        ))}
      </Group>
    </Container>
  );
}

export { Notifications }