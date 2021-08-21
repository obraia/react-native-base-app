import React from "react";
import { Button, Title, Container } from "./styles";

export interface IKey {
  label: string;
  value?: number | null;
  action?: 'clear' | 'backspace' | 'enter' | 'none';
}

interface IProps {
  disabled?: boolean;
  onKeyPress: (key: IKey) => void;
}

const Keyboard = (props: IProps) => {
  const [containerWidth, setContainerWidth] = React.useState(0);

  const keys: IKey[] = [
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5", value: 5 },
    { label: "6", value: 6 },
    { label: "7", value: 7 },
    { label: "8", value: 8 },
    { label: "9", value: 9 },
    { label: "c", action: 'clear' },
    { label: "0", value: 0 },
    { label: "x", action: 'backspace' },
  ];

  return (
    <Container
      onLayout={event => {
        const { width } = event.nativeEvent.layout;
        setContainerWidth(width);
      }}>
      {keys.map((key, index) => (
        <Button
          key={index}
          containerWidth={containerWidth}
          onPress={() => props.onKeyPress(key)}>
          <Title>{key.label}</Title>
        </Button>
      ))}
    </Container>
  );
}

export { Keyboard }