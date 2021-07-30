import { Modal } from 'react-native';
import styled from 'styled-components/native';
import { lighten } from 'polished';

interface FooterProps {
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
}

export const Container = styled(Modal)`
  
`;

export const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.metrics.padding}px;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.View.attrs(() => ({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.1,
  shadowRadius: 1.0,
  elevation: 15,
}))`
  width: 100%;
  border-radius: ${({ theme }) => theme.metrics.radius}px;
  background: ${({ theme }) => lighten(0.05, theme.colors.background)};
`;

export const Footer = styled.View<FooterProps>`
  flex-direction: ${({ flexDirection }) => flexDirection};
  align-items: stretch;
  justify-content: center;
  padding: ${({ theme }) => theme.metrics.padding}px;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.background};
`;