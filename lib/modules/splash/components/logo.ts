import styled from 'styled-components/native';

export const Logo = styled.View`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  background: ${({ theme }) => theme.colors.primary};
`;
