import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ButtonColor } from "../../../../shared/components/button";
import { Input, IValidationInput } from "../../../../shared/components/input";
import { Spacer } from "../../../../shared/components/spacer";
import { Container, Body, Footer, Title } from "./styles";

const Login = () => {
  const { navigate } = useNavigation();

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [usernameValidation, setUsernameValidation] = React.useState({} as IValidationInput);
  const [passwordValidation, setPasswordValidation] = React.useState({} as IValidationInput);

  const handleSubmit = async () => {
    console.log(username, password);

    if (username.length < 4) {
      setUsernameValidation({ text: 'Invalid username', type: 'error' });
    } else {
      setUsernameValidation({});
    }

    if (password.length < 4) {
      setPasswordValidation({ text: 'Invalid password', type: 'error' });
    } else {
      setPasswordValidation({});
    }

    navigate('Tabs')
  }

  return (
    <Container>
      <Body>
        <Title>Sign in</Title>
        <Input
          mb
          name='Username'
          message={usernameValidation}
          inputProps={{
            value: username,
            onChangeText: setUsername,
          }} />
        <Input
          mb
          name='Password'
          message={passwordValidation}
          type='password'
          inputProps={{
            secureTextEntry: true,
            value: password,
            onChangeText: setPassword,
            onSubmitEditing: handleSubmit,
          }} />
        <ButtonColor
          color='#2433FF'
          onPress={handleSubmit}>
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