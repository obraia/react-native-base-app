import styled from 'styled-components/native';
import { lighten, transparentize } from 'polished';

export const Container = styled.View`
  height: 100px;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  border-radius: ${({ theme }) => theme.metrics.radius}px;
  background: ${({ theme }) => lighten(0.05, theme.colors.background)};
`;

export const IconContainer = styled.View`
  height: 100%;
  aspect-ratio: 1;
  justify-content: center;
  align-items: center;
  border-radius: 200px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Infos = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: baseline;
  padding: 10px;
`;

export const Size = styled.Text`
  height: 34px;
  line-height: 42px;
  font-size: 42px;
  font-weight: bold;
  margin-right: 5px;
  color: ${({ theme }) => theme.colors.textBackground};
`;

export const Unity = styled.Text`
  line-height: 12px;
  font-size: 12px;
  font-weight: bold;
  color: ${({ theme }) => transparentize(0.5, theme.colors.textBackground)};
`;