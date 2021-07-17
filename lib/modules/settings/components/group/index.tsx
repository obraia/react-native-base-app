import React from "react";
import { Container } from "./styles";

interface IProps {
  children: any;
  mt?: boolean;
  mb?: boolean;
}

const Group = (props: IProps) => (
  <Container mt={props.mt} mb={props.mb}>
    {props.children}
  </Container>
);

export { Group }