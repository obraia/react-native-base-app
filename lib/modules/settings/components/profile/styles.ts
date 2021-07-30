import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { lighten, transparentize } from 'polished';

export const Container = styled.View`
  height: 100px;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  border-radius: ${({ theme }) => theme.metrics.radius}px;
  background: ${({ theme }) => lighten(0.05, theme.colors.background)};
`;

export const Avatar = styled.Image`
  height: 100%;
  aspect-ratio: 1;
  border-radius: 200px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Infos = styled.View`
  flex: 1;
  padding: 10px;
`;

export const Name = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textBackground};
`;

export const Email = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: ${({ theme }) => transparentize(0.5, theme.colors.textBackground)};
`;

export const Button = styled(RectButton)`
  position: absolute;
  width: 50px;
  height: 50px;
  right: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  background: ${transparentize(1, '#fff')};
`;
