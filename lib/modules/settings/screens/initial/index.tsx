import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { RootState } from '../../../../store';
import { BellOutlined, DatabaseSolid, InfoOutlined, LanguageSolid, PaletteOutlined } from '../../components/icons';
import { Item } from '../../components/item';
import { Profile } from '../../components/profile';
import { Group } from '../../components/group';
import { Container } from './styles';

const Initial = () => {
  const { theme } = useSelector((state: RootState) => state.theme);
  const { navigate, reset } = useNavigation();

  const items = [
    {
      title: 'Notifications',
      icon: BellOutlined,
      page: 'Notifications',
      color: theme.colors.primary
    },
    {
      title: 'Languages',
      icon: LanguageSolid,
      page: 'Notifications',
      color: theme.colors.primary
    },
    {
      title: 'Apparence',
      icon: PaletteOutlined,
      page: 'Apparence',
      color: theme.colors.primary
    },
    {
      title: 'Storage',
      icon: DatabaseSolid,
      page: 'Storage',
      color: theme.colors.primary
    },
    {
      title: 'About',
      icon: InfoOutlined,
      page: 'About',
      color: theme.colors.primary
    },
  ];

  const handleLogout = () => {
    reset({ index: 0, routes: [{ name: 'Auth' }] });
  };

  return (
    <Container>
      <Profile
        name={'Bryan Diniz'}
        email={'obraiadev@gmail.com'}
        avatarUrl={'https://avatars.githubusercontent.com/u/59900769?v=4'}
        color={theme.colors.primary}
        onLogout={handleLogout} />

      <Group mt>
        {items.map((item, index) => (
          <Item
            key={index}
            title={item.title}
            icon={item.icon}
            color={item.color}
            border={index !== 0}
            onPress={() => navigate(item.page)} />
        ))}
      </Group>
    </Container>
  );
}

export { Initial }