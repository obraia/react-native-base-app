import React from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { RootState } from "../../../../store";
import { Button } from "../../../../shared/components/button";
import { Spacer } from "../../../../shared/components/spacer";
import { ReactColor } from "../../components/icons";
import { Body, Container, Title, Text, Footer, Section } from "./styles";

const Initial = () => {
  const { theme } = useSelector((state: RootState) => state.theme);
  const { navigate } = useNavigation();

  return (
    <Container>
      <Body>
        <Section flex={2}>
          <ReactColor color={theme.colors.primary} />
        </Section>
        <Section >
          <Title>Base App</Title>
          <Spacer />
          <Text>
            This is a base application for future projects.
          </Text>
        </Section>
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