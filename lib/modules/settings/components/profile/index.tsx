import React from "react";
import SignOutSolid from "../icons/sign-out-solid";
import { Avatar, Container, Email, Infos, Name, Button } from "./styles";

interface IProps {
  name: string;
  email: string;
  avatarUrl: string;
  color: string;
  onLogout: () => void;
}

const Profile = (props: IProps) => {
  return (
    <Container>
      <Avatar source={{ uri: props.avatarUrl }} />
      <Infos>
        <Name>{props.name}</Name>
        <Email>{props.email}</Email>
      </Infos>
      <Button onPress={props.onLogout}>
        <SignOutSolid color={props.color} />
      </Button>
    </Container>
  );
}

export { Profile }