import React from "react";
import { ButtonContainer, Button, IconContainer, Title } from "./styles";

interface IProps {
  title: string;
  page: string;
  icon: ({ color }: { color: string }) => JSX.Element;
  color: string;
  border?: boolean;
}

const Item = (props: IProps) => {
  return (
    <ButtonContainer border={props.border}>
      <Button>
        <IconContainer color={props.color}>
          <props.icon color={props.color} />
        </IconContainer>
        <Title>{props.title}</Title>
      </Button>
    </ButtonContainer>
  );
}

export { Item }