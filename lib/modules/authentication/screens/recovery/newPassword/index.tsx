import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../../../../shared/components/button";
import { Input, IValidationInput } from "../../../../../shared/components/input";
import { Spacer } from "../../../../../shared/components/spacer";
import { Container, Body, Title, Text, Footer } from "./styles";
import { useEffect } from "react";

const NewPasword = () => {
  const { navigate, reset } = useNavigation();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordValidation, setConfirmPasswordValidation] = useState({} as IValidationInput);

  const isValidPassword = () => password.length > 4;

  const isValidConfirmPassword = () => password === confirmPassword;

  const isValid = () => {
    return isValidPassword() && isValidConfirmPassword();
  }

  const handleSubmit = async () => {
    navigate('Login');
  }

  useEffect(() => {
    if (confirmPassword.length > 0 && (password !== confirmPassword)) {
      setConfirmPasswordValidation({ text: 'Both passwwords must match.', type: 'error' });
    } else {
      setConfirmPasswordValidation({ });
    }

  }, [password, confirmPassword]);

  return (
    <Container>
      <Body>
        <Title>Create new passoword</Title>

        <Spacer size={3} />

        <Text>Enter and confirm a new password to gain access to the app.</Text>

        <Spacer size={3} />

        <Input
          name='New passowrd'
          type='password'
          inputProps={{
            value: password,
            secureTextEntry: true,
            autoCapitalize: 'none',
            onChangeText: setPassword,
            onSubmitEditing: handleSubmit
          }} />

        <Spacer />

        <Input
          name='Confirm passowrd'
          type='password'
          message={confirmPasswordValidation}
          inputProps={{
            value: confirmPassword,
            secureTextEntry: true,
            autoCapitalize: 'none',
            onChangeText: setConfirmPassword,
            onSubmitEditing: handleSubmit
          }} />

        <Spacer size={3} />

        <Button
          type='primary'
          onPress={handleSubmit}
          disabled={!isValid()}>
          Confirm
        </Button>
      </Body>
    </Container>
  );
}

export { NewPasword }