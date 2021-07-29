import React from "react";
import { useSelector } from "react-redux";
import { Checkbox as CheckboxPaper } from 'react-native-paper';
import { RootState } from "../../../store";
import { Container, Label } from "./styles";

interface IProps {
  mb?: boolean;
  mt?: boolean;
  label: string;
  color: string;
  value?: boolean;
  onPress?: () => void;
}

const Checkbox = (props: IProps) => {
  const { theme } = useSelector((state: RootState) => state.theme);

  return (
    <Container mb={props.mb} mt={props.mt}>
      <CheckboxPaper
            status={props.value ? 'checked' : 'unchecked'}
            onPress={props.onPress}
            color={props.color}
            uncheckedColor={theme.colors.textBackground} />

      <Label onPress={props.onPress}>
        {props.label}
      </Label>
    </Container>
  );
}

export { Checkbox }