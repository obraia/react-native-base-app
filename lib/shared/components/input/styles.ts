import styled from 'styled-components/native';
import { lighten } from 'polished';

export const Container = styled.View`
`;

export const InputGroup = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  flex-basis: auto;
  height: 50px;
  padding: 0 10px;
  border-radius: ${({ theme }) => theme.metrics.innerRadius}px;
  background: ${({ theme }) => lighten(0.05, theme.colors.background)};
`;

export const Label = styled.Text`
  margin-bottom: ${({ theme }) => theme.metrics.margin}px;
  margin-left: ${({ theme }) => theme.metrics.margin}px;
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => lighten(0.05, theme.colors.textBackground)};
`;

export const Message = styled.Text`
  margin-top: ${({ theme }) => theme.metrics.margin}px;
  margin-left: ${({ theme }) => theme.metrics.margin}px;
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => lighten(0.05, theme.colors.textBackground)};
`;