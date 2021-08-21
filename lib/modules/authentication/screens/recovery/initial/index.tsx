import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../../../../shared/components/button";
import { Input } from "../../../../../shared/components/input";
import { Spacer } from "../../../../../shared/components/spacer";
import { Container, Body, Title, Text, Footer } from "./styles";

const Initial = () => {
  const { navigate, reset } = useNavigation();

  const [email, setEmail] = useState('');

  const isValidEmail = () => email.length > 4;

  const isValid = () => {
    return isValidEmail();
  }

  const handleSubmit = async () => {
    navigate('RecoveryCode');
  }

  return (
    <Container>
      <Body>
        <Title>Forgot password</Title>

        <Spacer size={3} />

        <Text>Enter your email adress below to reset pasword</Text>

        <Spacer size={3} />

        <Input
          name='Email'
          type='email'
          inputProps={{
            value: email,
            autoCapitalize: 'none',
            onChangeText: setEmail,
            onSubmitEditing: handleSubmit
          }} />

        <Spacer size={3} />

        <Button
          type='primary'
          onPress={handleSubmit}
          disabled={!isValid()}>
          Send
        </Button>
      </Body>
    </Container>
  );
}

export { Initial }