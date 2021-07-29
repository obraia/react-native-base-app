import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { ButtonContainer, ButtonEffect, Title, Container } from "./styles";

export type ButtonColors = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';

interface IProps {
  children?: string;
  type: ButtonColors;
  disabled?: boolean;
  outline?: boolean;
  border?: boolean;
  onPress?: () => void;
}

const Button = (props: IProps) => {
  const { theme } = useSelector((state: RootState) => state.theme);

  const textColors = {
    primary: theme.colors['textPrimary'],
    secondary: theme.colors['textSecondary'],
    error: theme.colors['textError'],
    warning: theme.colors['textWarning'],
    info: theme.colors['textInfo'],
    success: theme.colors['textSuccess']
  };

  console.log(theme.colors[props.type])

  return (
    <Container>
      <ButtonContainer
        onPress={props.onPress}
        touchSoundDisabled
        disabled={props.disabled}>
        <ButtonEffect
          color={theme.colors[props.type]}
          outline={props.outline}
          enabled={!props.disabled}>
          <Title color={props.outline ? theme.colors[props.type] : textColors[props.type]}>
            {props.children}
          </Title>
        </ButtonEffect>
      </ButtonContainer>
    </Container>

  );
}

export { Button }