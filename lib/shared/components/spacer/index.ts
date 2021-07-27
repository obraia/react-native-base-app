import styled from 'styled-components/native';

interface Props {
  width?: number;
  height?: number;
}
export const Spacer = styled.View<Props>`
  width: ${({ width, theme }) => width ? width : theme.metrics.padding}px;
  height: ${({ height, theme }) => height ? height : theme.metrics.padding}px;
`;
