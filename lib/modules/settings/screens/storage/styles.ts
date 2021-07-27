import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.metrics.padding}px;
  background: ${({ theme }) => theme.colors.background};
`;

export const Text = styled.Text`
  padding: ${({ theme }) => theme.metrics.padding}px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textBackground};
`;