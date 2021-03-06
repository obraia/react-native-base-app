import React, { useState, forwardRef } from "react";
import { TextInputProps } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import EyeOutlined from "../icons/eye-outlined";
import EyeSlashOutlined from "../icons/eye-slash-outlined";
import { Container, InputGroup, Label, Message, TextInput, Button } from "./styles";

export type InputTypes = "text" | "password" | "number" | "pin" | "email" | "tel" | "url" | "search" | "date" | "time";
type MessageTypes = "error" | "info" | "success" | "warning";

export interface IValidationInput {
  text?: string;
  type?: MessageTypes;
}

interface IProps {
  name?: string;
  message?: IValidationInput;
  type?: InputTypes;
  inputProps?: TextInputProps;
  focusable?: boolean;
  onChangeText?: (text: string) => void;
}

const Input = forwardRef((props: IProps, ref: React.Ref<any>) => {
  const { theme } = useSelector((state: RootState) => state.theme);
  const [secureTextEntry, setSecureTextEntry] = useState(props.inputProps?.secureTextEntry);
  const [focusable, setFocusable] = useState(props.focusable);

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const getColor = (type?: MessageTypes) => {
    if (type) return theme.colors[type];
    else return theme.colors.textBackground;
  };

  return (
    <Container>
      {props.name && (
        <Label color={getColor(props.message?.type)}>
          {props.name}
        </Label>
      )}
      <InputGroup>
        <TextInput {...props.inputProps}
          color={props.message?.type ? getColor(props.message?.type) : undefined}
          secureTextEntry={secureTextEntry}
          onFocus={() => setFocusable(true)}
          onBlur={() => setFocusable(false)}
          focusable={focusable}
          type={props.type}
          ref={ref} />
        {props.type === 'password' && (
          <Button onPress={toggleSecureTextEntry}>
            {secureTextEntry ?
              <EyeSlashOutlined color={getColor(props.message?.type)} /> :
              <EyeOutlined color={getColor(props.message?.type)} />}
          </Button>
        )}
      </InputGroup>
      {props.message && (
        <Message color={getColor(props.message?.type)}>
          {props.message?.text}
        </Message>
      )}
    </Container>
  );
});

export { Input }