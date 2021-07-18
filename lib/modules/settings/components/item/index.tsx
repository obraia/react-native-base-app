import React from "react";
import { ButtonContainer, Button, IconContainer, Title } from "./styles";

interface IProps {
  title: string;
  icon: ({ color }: { color: string }) => JSX.Element;
  disabled?: boolean;
  action?: () => JSX.Element;
  color: string;
  border?: boolean;
  onPress: () => void;
}

const Item = (props: IProps) => {
  return (
    <ButtonContainer border={props.border}>
      <Button onPress={props.onPress} enabled={!props.disabled}>
        <IconContainer color={props.color}>
          <props.icon color={props.color} />
        </IconContainer>
        <Title>{props.title}</Title>
        {props.action && <props.action />}
      </Button>
    </ButtonContainer>
  );
}

export { Item }