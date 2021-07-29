import styled from 'styled-components/native';
import { transparentize } from 'polished';
import { RectButton } from 'react-native-gesture-handler';

interface ButtonProps {
  color: string;
  outline?: boolean;
  enabled?: boolean;
}

interface TitleProps {
  color: string;
}

export const Container = styled.View`
  flex: 1;
  flex-basis: auto;
  min-height: 50px;
  max-height: 50px;
  border-radius: ${({ theme }) => theme.metrics.innerRadius}px;
`;

export const ButtonContainer = styled.TouchableWithoutFeedback`
`;

export const ButtonEffect = styled(RectButton) <ButtonProps>`
  flex: 1;
  flex-basis: auto;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  border-radius: ${({ theme }) => theme.metrics.innerRadius}px;
  background: ${({ color, outline, enabled }) => outline ? transparentize(1, '#fff') : enabled ? color : transparentize(0.75, color)};
`;

export const Title = styled.Text<TitleProps>`
  font-size: 16px;
  font-weight: bold;
  color: ${({ color }) => color};
`;