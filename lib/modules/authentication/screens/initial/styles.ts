import { lighten } from 'polished';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`;

export const Body = styled.View`
  flex: 4;
  background: ${({ theme }) => theme.colors.background};
`;

export const Footer = styled.View`
  padding: ${({ theme }) => theme.metrics.padding * 2}px;
  background: ${({ theme }) => lighten(0.025, theme.colors.background)};
`;