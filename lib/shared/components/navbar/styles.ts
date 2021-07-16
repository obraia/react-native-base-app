import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { transparentize } from 'polished';

interface IButtonProps {
  active?: boolean;
  color: string;
}

interface ILabelProps {
  active?: boolean;
  color: string;
}

export const Container = styled.View`
  height: 60px;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 10px;
  align-items: center;
  background: ${({ theme }) => theme.colors.navbarBackground};
`;

export const Button = styled(RectButton) <IButtonProps>`
  height: 100%;
  ${({ active }) => active ? 'padding: 0 20px' : ''};
  ${({ active }) => active ? '' : 'aspect-ratio: 1'};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: ${({ theme, color, active }) => (active ? transparentize(0.85, color) : theme.colors.navbarBackground)};
`;

export const Label = styled.Text<ILabelProps>`
  margin-left: 10px;
  font-size: 12px;
  color: ${({ color }) => color};
`;