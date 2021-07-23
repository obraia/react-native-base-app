import { Platform } from 'react-native';
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

const isIOS = Platform.OS === 'ios';

export const Container = styled.View`
  height: ${isIOS ? '70px' : '60px'};
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 10px;
  padding-bottom: ${isIOS ? '18px' : '8px'};
  align-items: center;
  background: ${({ theme }) => theme.colors.navbar};
`;

export const Button = styled(RectButton) <IButtonProps>`
  height: 100%;
  ${({ active }) => active ? 'padding: 0 20px' : ''};
  ${({ active }) => active ? '' : 'aspect-ratio: 1'};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 22px;
  background: ${({ theme, color, active }) => (active ? transparentize(0.85, color) : theme.colors.navbar)};
`;

export const Label = styled.Text<ILabelProps>`
  margin-left: 10px;
  font-size: 12px;
  color: ${({ color }) => color};
`;