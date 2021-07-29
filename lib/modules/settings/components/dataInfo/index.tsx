import React from "react";
import { transparentize } from "polished";
import { DatabaseDual } from "../icons";
import { IconContainer, Container, Infos, Size, Unity } from "./styles";

interface IProps {
  size?: number;
  unity?: string;
  color: string;
}

const DataInfo = (props: IProps) => {
  return (
    <Container>
      <IconContainer>
        <DatabaseDual
          colorPrimary={props.color}
          colorSecondary={transparentize(0.5, props.color)} />
      </IconContainer>
      <Infos>
        <Size style={{ includeFontPadding: false }}>{props.size}</Size>
        <Unity>{props.unity}</Unity>
      </Infos>
    </Container>
  );
}

export { DataInfo }