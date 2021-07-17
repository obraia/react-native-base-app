import styled from 'styled-components/native';
import { lighten } from 'polished';

interface ContainerProps {
  mb?: boolean;
  mt?: boolean;
}

export const Container = styled.View<ContainerProps>`
  ${({ theme, mb }) => (mb ? 'margin-bottom: ' + theme.metrics.margin + 'px' : '')};
  ${({ theme, mt }) => (mt ? 'margin-top: ' + theme.metrics.margin + 'px' : '')};
  padding: ${({ theme }) => theme.metrics.padding}px;
  border-radius: ${({ theme }) => theme.metrics.radius}px;
  background: ${({ theme }) => lighten(0.05, theme.colors.background)};
`;
