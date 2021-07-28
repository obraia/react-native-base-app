import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ButtonColor } from "../../../../shared/components/button";
import { Input } from "../../../../shared/components/input";
import { Spacer } from "../../../../shared/components/spacer";
import { Container, Body, Footer } from "./styles";

const Login = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Body>
        <Input name='Username' />
        <Input
          name='Password'
          inputProps={{ secureTextEntry: true }} />
        <ButtonColor
          color='#2433FF'
          onPress={() => navigate('Tabs')}>
          Login
        </ButtonColor>
      </Body>
      <Footer>
        <ButtonColor
          color='#006EFF'
          outline
          onPress={() => { }}>
          Sign in
        </ButtonColor>
        <Spacer />
        <ButtonColor
          color='#FF5724'
          outline
          onPress={() => { }}>
          Sign in
        </ButtonColor>
      </Footer>

    </Container>
  );
}

export { Login }