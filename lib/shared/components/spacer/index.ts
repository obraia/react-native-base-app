import styled from 'styled-components/native';

interface Props {
  size?: number;
}

export const Spacer = styled.View<Props>`
  width: ${({ size, theme }) => theme.metrics.padding * (size || 1)}px;
  height: ${({ size, theme }) => theme.metrics.padding * (size || 1)}px;
`;
