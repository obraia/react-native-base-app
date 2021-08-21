import React, { useRef, useState } from "react";
import { TextInput } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../../../shared/components/button";
import { Input, IValidationInput } from "../../../../shared/components/input";
import { Spacer } from "../../../../shared/components/spacer";
import { Container, Body, Title } from "./styles";
import { RootState } from "../../../../store";

const Register = () => {
  const { theme } = useSelector((state: RootState) => state.theme);
  const { navigate } = useNavigation();

  const usernameRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [usernameValidation, setUsernameValidation] = useState({} as IValidationInput);
  const [passwordValidation, setPasswordValidation] = useState({} as IValidationInput);
  const [emailValidation, setEmailValidation] = useState({} as IValidationInput);

  const setPasswordFocus = () => {
    if (passwordRef.current) passwordRef.current.focus();
  }

  const setEmailFocus = () => {
    if (emailRef.current) emailRef.current.focus();
  }

  const handleSubmit = async () => {
    console.log(username, password);

    if (isValid()) {
      navigate('TwoFactor');
    } else {
      setUsernameValidation({ text: 'Invalid username', type: 'error' });
      setPasswordValidation({ text: 'Invalid password', type: 'error' });
      setEmailValidation({ text: 'Invalid email', type: 'error' });
    }
  }

  const isValidUsername = () => username.length > 4;
  const isValidPassword = () => password.length > 4;
  const isValidEmail = () => email.length > 4;

  const isValid = () => {
    return isValidUsername() && isValidPassword() && isValidEmail();
  }

  return (
    <Container>
      <Body>
        <Title>Sign up</Title>

        <Spacer size={3} />

        <Input
          name='Username'
          message={usernameValidation}
          inputProps={{
            value: username,
            autoCapitalize: 'none',
            onChangeText: setUsername,
            onSubmitEditing: setPasswordFocus
          }} />

        <Spacer />

        <Input
          name='Password'
          message={passwordValidation}
          type='password'
          ref={passwordRef}
          inputProps={{
            secureTextEntry: true,
            value: password,
            onChangeText: setPassword,
            onSubmitEditing: setEmailFocus
          }} />

        <Spacer />

        <Input
          name='Email'
          message={emailValidation}
          type='email'
          ref={emailRef}
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
          Register
        </Button>
      </Body>

      {/* <Footer>
        <Button
          color='#006EFF'
          outline
          onPress={() => { }}>
          Sign in
        </Button>
        <Spacer />
        <Button
          color='#FF5724'
          outline
          onPress={() => { }}>
          Sign in
        </Button>
      </Footer> */}

    </Container>
  );
}

export { Register }