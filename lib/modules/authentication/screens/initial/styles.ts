import { lighten } from 'polished';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`;

export const Body = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`;

export const Section = styled.View<{ flex?: number }>`
  flex: ${({ flex }) => flex};
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.metrics.padding * 4}px;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textBackground};
`;

export const Text = styled.Text`
  font-size: 22px;
  text-align: center;
  color: ${({ theme }) => theme.colors.textBackground};
`;

export const Footer = styled.View`
  padding: ${({ theme }) => theme.metrics.padding * 2}px;
  background: ${({ theme }) => lighten(0.025, theme.colors.background)};
`;