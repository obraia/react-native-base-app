import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../../../shared/components/button";
import { Spacer } from "../../../../shared/components/spacer";
import { Body, Container, Footer } from "./styles";

const Initial = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Body>

      </Body>
      <Footer>
        <Button
          type='primary'
          onPress={() => navigate('Login')}>
          Sign in
        </Button>
        <Spacer />
        <Button
          type='primary'
          outline
          onPress={() => navigate('Register')}>
          Create an account
        </Button>
      </Footer>
    </Container>
  );
}

export { Initial }