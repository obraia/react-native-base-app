import React, { useRef, useState } from "react";
import { TextInput } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../../../shared/components/button";
import { Input, IValidationInput } from "../../../../shared/components/input";
import { Spacer } from "../../../../shared/components/spacer";
import { Container, Body, Title } from "./styles";
import { Checkbox } from "../../../../shared/components/checkbox";
import { RootState } from "../../../../store";

const Login = () => {
  const { theme } = useSelector((state: RootState) => state.theme);
  const { navigate, reset } = useNavigation();

  const usernameRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameValidation, setUsernameValidation] = useState({} as IValidationInput);
  const [passwordValidation, setPasswordValidation] = useState({} as IValidationInput);
  const [remember, setRemember] = useState(false);

  const setPasswordFocus = () => {
    if (passwordRef.current) passwordRef.current.focus();
  }

  const handleSubmit = async () => {
    console.log(username, password);

    if (isValid()) {
      reset({ index: 0, routes: [{ name: 'Tabs' }] });
    } else {
      setUsernameValidation({ text: 'Invalid username', type: 'error' });
      setPasswordValidation({ text: 'Invalid password', type: 'error' });
    }
  }

  const isValidUsername = () => username.length > 4;
  const isValidPassword = () => password.length > 4;

  const isValid = () => {
    return isValidUsername() && isValidPassword();
  }

  return (
    <Container>
      <Body>
        <Title>Sign in</Title>

        <Spacer size={3} />

        <Input
          name='Username'
          message={usernameValidation}
          inputProps={{
            value: username,
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
            onSubmitEditing: handleSubmit
          }} />

        <Spacer />

        <Checkbox
          label='Remember me'
          value={remember}
          color={theme.colors.primary}
          onPress={() => setRemember(!remember)} />

        <Spacer size={3} />

        <Button
          type='primary'
          onPress={handleSubmit}
          disabled={!isValid()}>
          Login
        </Button>

        <Spacer />

        <Button outline type='primary' onPress={handleSubmit}>
          Forgot password?
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

export { Login }