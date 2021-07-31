import React from "react";
import { Container } from "./styles";

interface IProps {
  children: JSX.Element;
  onPress: () => void;
}

const RoundButton = (props: IProps) => {
  return (
    <Container onPress={props.onPress}>
      {props.children}
    </Container>
  );
}

export { RoundButton }