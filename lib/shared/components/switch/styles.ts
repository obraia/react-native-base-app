import styled from 'styled-components/native';
import { transparentize } from 'polished';

interface ContainerProps {
  active?: boolean;
  ml?: boolean;
  mr?: boolean;
  color: string;
}

interface CircleProps {
  color: string;
}

export const Container = styled.View<ContainerProps>`
  width: 44px;
  height: 22px;
  flex-direction: row;
  justify-content: ${({ active }) => (active ? 'flex-end' : 'flex-start')};
  ${({ ml }) => (ml ? 'margin-left: auto' : '')};
  ${({ mr }) => (mr ? 'margin-right: auto' : '')};
  padding: 2px;
  border-radius: 15px;
  border: 2px solid ${({ color }) => transparentize(0.85, color)};
`;

export const Circle = styled.View<CircleProps>`
  height: 100%;
  aspect-ratio: 1;
  border-radius: 15px;
  background: ${({ color }) => color};
`;
