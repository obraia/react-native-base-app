import React from "react";
import { Circle, Container } from "./styles";

interface IProps {
  value: boolean;
  color: string;
  ml?: boolean;
  mr?: boolean;
}

const Switch = (props: IProps) => {

  return (
    <Container
      active={props.value}
      color={props.color}
      ml={props.ml}
      mr={props.mr}>
      <Circle color={props.color} />
    </Container>
  );
}

export { Switch }