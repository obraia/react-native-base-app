import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.metrics.padding * 2}px;
  background: ${({ theme }) => theme.colors.background};
`;

export const Body = styled.View`
  flex: 1;
`;

export const Footer = styled.View`
  flex-direction: row;
  padding: ${({ theme }) => theme.metrics.padding * 2}px;
`;