import React, { useState } from 'react';
import { AdjustSolid, PaletteOutlined } from '../../components/icons';
import { Item } from '../../components/item';
import { Group } from '../../components/group';
import { Container } from './styles';
import { Switch } from '../../../../shared/components/switch';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../../../shared/reducers/theme';
import { RootState } from '../../../../store';

const Apparence = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: RootState) => state.theme);

  const items = [
    {
      title: 'Dark mode',
      icon: AdjustSolid,
      action: () => Switch({ value: theme.title === 'dark', color: theme.colors.primary, ml: true }),
      onPress: () => dispatch(toggleTheme()),
      color: theme.colors.primary
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