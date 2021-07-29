import React, { useState } from "react";
import { TextInputProps } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import EyeOutlined from "../icons/eye-outlined";
import EyeSlashOutlined from "../icons/eye-slash-outlined";
import { Container, InputGroup, Label, Message, TextInput, Button } from "./styles";

export interface IValidationInput {
  text?: string;
  type?: "error" | "warning" | "info" | "success";
}

interface IProps {
  name: string;
  message?: IValidationInput;
  mb?: boolean;
  mt?: boolean;
  type?: 'text' | 'number' | 'password' | 'email' | 'tel' | 'url';
  inputProps?: TextInputProps;
  onChangeText?: (text: string) => void;
}

const Input = (props: IProps) => {
  const { theme } = useSelector((state: RootState) => state.theme);
  const [secureTextEntry, setSecureTextEntry] = useState(props.inputProps?.secureTextEntry);

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const getColor = (type?: string) => {
    switch (type) {
      case "error":
        return "#ee8181";
      case "warning":
        return "#e4c126";
      case "info":
        return "#1089cf";
      case "success":
        return "#74df94";
      case "default":
        return undefined;
      default:
        return theme.colors.textBackground;
    }
  };

  return (
    <Container mb={props.mb} mt={props.mt}>
      <Label color={getColor(props.message?.type)}>
        {props.name}
      </Label>
      <InputGroup>
        <TextInput {...props.inputProps}
          color={getColor(props.message?.type || 'default')}
          secureTextEntry={secureTextEntry} />
        {props.type === 'password' && (
          <Button onPress={toggleSecureTextEntry}>
            {secureTextEntry ?
              <EyeSlashOutlined color={getColor(props.message?.type)} /> :
              <EyeOutlined color={getColor(props.message?.type)} />}
          </Button>
        )}
      </InputGroup>
      <Message color={getColor(props.message?.type)}>
        {props.message?.text}
      </Message>
    </Container>
  );
}

export { Input }