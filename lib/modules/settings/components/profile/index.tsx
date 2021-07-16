import React from "react";
import { Avatar, Container, Email, Infos, Name } from "./styles";

interface IProps {
  name: string;
  email: string;
  avatarUrl: string;
}

const Profile = ({ name, email, avatarUrl }: IProps) => {
  return (
    <Container>
      <Avatar source={{ uri: avatarUrl }} />
      <Infos>
        <Name>{name}</Name>
        <Email>{email}</Email>
      </Infos>
    </Container>
  );
}

export { Profile }