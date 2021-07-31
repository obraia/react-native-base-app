import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { lighten, transparentize } from 'polished';
import { InputTypes } from '.';


interface Props {
  color?: string;
  type?: InputTypes;
}

export const Container = styled.View`
`;

export const InputGroup = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TextInput = styled.TextInput<Props>`
  flex: 1;
  flex-basis: auto;
  height: 50px;
  ${({ type }) => type === 'pin' ? 'aspect-ratio: 1' : ''};
  ${({ textAlign }) => textAlign !== 'center' ? `padding: 0 20px` : ''};
  ${({ theme, focusable }) => focusable ? `border: 2px solid ${theme.colors.textBackground}` : ''};
  ${({ color }) => color ? `border: 2px solid ${color}` : ''};
  border-radius: ${({ theme }) => theme.metrics.innerRadius}px;
  color: ${({ theme, color }) => color ? color : theme.colors.textBackground};
  background: ${({ theme, color }) => color ? transparentize(0.95, color) : lighten(0.05, theme.colors.background)};
`;

export const Button = styled(RectButton)`
  position: absolute;
  width: 40px;
  height: 40px;
  right: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: ${transparentize(1, '#fff')};
`;

export const Label = styled.Text<Props>`
  margin-bottom: ${({ theme }) => theme.metrics.margin}px;
  font-size: 14px;
  font-weight: bold;
  color: ${({ color }) => color};
`;

export const Message = styled.Text<Props>`
  margin-top: ${({ theme }) => theme.metrics.margin}px;
  font-size: 14px;
  font-weight: bold;
  color: ${({ color }) => color};
`;