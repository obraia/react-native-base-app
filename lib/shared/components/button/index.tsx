import React from "react";
import { ButtonContainer, Button, Title } from "./styles";

interface IProps {
  children?: string;
  disabled?: boolean;
  color: string;
  outline?: boolean;
  border?: boolean;
  onPress?: () => void;
}

const ButtonColor = (props: IProps) => {

  return (
    <ButtonContainer onPress={props.onPress} touchSoundDisabled>
      <Button
        color={props.color}
        outline={props.outline}
        enabled={!props.disabled}>
        <Title color={props.color}>
          {props.children}
        </Title>
      </Button>
    </ButtonContainer>
  );
}

export { ButtonColor }