import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { desaturate } from 'polished';
import { GlobeSolid, MobileSolid, NewsSolid } from '../../components/icons';
import { Item } from '../../components/item';
import { Group } from '../../components/group';
import { Container } from './styles';
import { Switch } from '../../../../shared/components/switch';
import { RootState } from '../../../../store';
import { toggleAllNotifications, toggleNews, toggleUpdates } from '../../reducers/notifications';

const Notifications = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: RootState) => state.theme);
  const { allNotifications, news, updates } = useSelector((state: RootState) => state.notifications);

  const getColor = (color: string, enabled: boolean) => (
    enabled ? color : desaturate(1, color)
  );

  const items = [
    {
      title: 'Notifications',
      icon: GlobeSolid,
      disabled: false,
      action: () => Switch({ value: allNotifications, color: theme.colors.primary, ml: true }),
      onPress: () => dispatch(toggleAllNotifications()),
      color: theme.colors.primary
    },
    {
      title: 'News',
      icon: NewsSolid,
      disabled: !allNotifications,
      action: () => Switch({ value: news, color: getColor(theme.colors.primary, allNotifications), ml: true }),
      onPress: () => dispatch(toggleNews()),
      color: getColor(theme.colors.primary, allNotifications)
    },
    {
      title: 'App updates',
      icon: MobileSolid,
      disabled: !allNotifications,
      action: () => Switch({ value: updates, color: getColor(theme.colors.primary, allNotifications), ml: true }),
      onPress: () => dispatch(toggleUpdates()),
      color: getColor(theme.colors.primary, allNotifications)
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