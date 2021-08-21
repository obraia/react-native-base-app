import React, { useRef, useState } from "react";
import { TextInput } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { RootState } from "../../../../store";
import { Input, IValidationInput } from "../../../../shared/components/input";
import { Button } from "../../../../shared/components/button";
import { Checkbox } from "../../../../shared/components/checkbox";
import { Spacer } from "../../../../shared/components/spacer";
import { RoundButton } from "../../components/round-button";
import { GoogleColor } from "../../components/icons";
import { Container, Body, Title, Footer } from "./styles";

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
      navigate('TwoFactor');
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
            value: password,
            secureTextEntry: true,
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

        <Button outline type='primary' onPress={() => navigate('Recovery')}>
          Forgot password?
        </Button>
      </Body>

      <Footer>
        <RoundButton onPress={() => navigate('Pin')}>
          <GoogleColor />
        </RoundButton>
      </Footer>

    </Container>
  );
}

export { Login }