import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`;

export const Body = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.metrics.padding * 3}px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textBackground};
`;

export const Footer = styled.View`
  flex-direction: row;
  padding: ${({ theme }) => theme.metrics.padding * 2}px;
`;