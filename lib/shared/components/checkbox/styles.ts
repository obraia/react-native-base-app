import styled from 'styled-components/native';

interface ContainerProps {
  mt?: boolean;
  mb?: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  align-items: center;
  ${({ theme, mb }) => (mb ? 'margin-bottom: ' + theme.metrics.margin + 'px' : '')};
  ${({ theme, mt }) => (mt ? 'margin-top: ' + theme.metrics.margin + 'px' : '')};
`;

export const Label = styled.Text`
  margin-left: ${({ theme }) => theme.metrics.margin}px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textBackground};
`;
