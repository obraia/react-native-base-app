import { transparentize } from "polished";
import React from "react";
import { DatabaseDual } from "../icons";
import { IconContainer, Container, Infos, Size, Unity } from "./styles";

interface IProps {
  size: number;
  unity: string;
}

const DataInfo = (props: IProps) => {
  return (
    <Container>
      <IconContainer>
        <DatabaseDual
          colorPrimary={'#FF7300'}
          colorSecondary={transparentize(0.5, '#FF7300')} />
      </IconContainer>
      <Infos>
        <Size style={{ includeFontPadding: false }}>{props.size}</Size>
        <Unity>{props.unity}</Unity>
      </Infos>
    </Container>
  );
}

export { DataInfo }