import styled from 'styled-components/native';
import { transparentize } from 'polished';
import { RectButton } from 'react-native-gesture-handler';

interface ButtonProps {
  color: string;
  outline?: boolean;
}

interface TitleProps {
  color: string;
}

export const ButtonContainer = styled.TouchableWithoutFeedback`
  border-radius: ${({ theme }) => theme.metrics.innerRadius}px;
`;

export const Button = styled(RectButton) <ButtonProps>`
  flex: 1;
  flex-basis: auto;
  height: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  border-radius: ${({ theme }) => theme.metrics.innerRadius}px;
  background: ${({ color, outline }) => outline ? transparentize(1, color) : transparentize(0.75, color)};
`;

export const Title = styled.Text<TitleProps>`
  font-size: 16px;
  font-weight: bold;
  color: ${({ color }) => color};
`;