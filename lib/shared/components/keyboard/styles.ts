import styled from 'styled-components/native';
import { lighten, transparentize } from 'polished';
import { RectButton } from 'react-native-gesture-handler';

interface ButtonProps {
  enabled?: boolean;
  containerWidth: number;
}

interface TitleProps {
  color: string;
}

export const Container = styled.View`
  flex-basis: auto;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ButtonContainer = styled.TouchableWithoutFeedback`
`;

export const Button = styled(RectButton) <ButtonProps>`
  width: ${({ theme, containerWidth }) => (containerWidth / 3) - (theme.metrics.radius * 4)}px;
  height: ${({ theme, containerWidth }) => (containerWidth / 3) - (theme.metrics.radius * 4)}px;
  justify-content: center;
  align-items: center;
  margin: ${({ theme }) => theme.metrics.margin}px;
  border-radius: ${({ theme }) => theme.metrics.radius}px;
  background: ${transparentize(1, '#fff')};
`;

export const Title = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;