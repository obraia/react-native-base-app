import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.metrics.padding * 3}px;
  background: ${({ theme }) => theme.colors.background};
`;

export const Body = styled.View`
`;

export const Title = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textBackground};
`;

export const InputGroup = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;