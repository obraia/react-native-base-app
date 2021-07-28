import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ButtonColor } from "../../../../shared/components/button";
import { Spacer } from "../../../../shared/components/spacer";
import { Body, Container, Footer } from "./styles";

const Initial = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Body>

      </Body>
      <Footer>
        <ButtonColor
          color='#2433FF'
          onPress={() => navigate('Login')}>
          Sign in
        </ButtonColor>
        <Spacer />
        <ButtonColor
          color='#2433FF'
          outline
          onPress={() => { }}>
          Create an account
        </ButtonColor>
      </Footer>
    </Container>
  );
}

export { Initial }