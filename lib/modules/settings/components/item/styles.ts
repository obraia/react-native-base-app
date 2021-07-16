import styled from 'styled-components/native';
import { lighten, transparentize } from 'polished';
import { RectButton } from 'react-native-gesture-handler';

interface ContainerProps {
  border?: boolean;
}

interface IconContainerProps {
  color: string;
}

export const ButtonContainer = styled.View<ContainerProps>`
  height: 50px;
  border-top-width: ${({ border }) => border ? '1px' : '0px'};
  border-top-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.metrics.innerRadius}px;
`;

export const Button = styled(RectButton) <ContainerProps>`
  height: 100%;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  border-radius: ${({ theme }) => theme.metrics.innerRadius}px;
  background: ${({ theme }) => lighten(0.05, theme.colors.background)};
`;

export const IconContainer = styled.View<IconContainerProps>`
  height: 100%;
  aspect-ratio: 1;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  border-radius: 50px;
  background: ${({ color }) => transparentize(0.85, color)};
`;

export const Title = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: ${({ theme }) => transparentize(0.5, theme.colors.textBackground)};
`;