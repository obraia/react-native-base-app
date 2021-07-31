import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { lighten } from 'polished';

export const Container = styled(RectButton)`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  background: ${({ theme }) => lighten(0.05, theme.colors.background)};
`;
