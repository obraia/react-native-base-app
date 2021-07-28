import React from "react";
import { TextInputProps } from "react-native";
import { Container, InputGroup, Label, Message, TextInput } from "./styles";

interface IProps {
  name: string;
  message?: string;
  inputProps?: TextInputProps;
}

const Input = (props: IProps) => {

  return (
    <Container>
      <Label>{props.name}</Label>
      <InputGroup>
        <TextInput {...props.inputProps} />
      </InputGroup>
      <Message>{props.message}</Message>
    </Container>
  );
}

export { Input }