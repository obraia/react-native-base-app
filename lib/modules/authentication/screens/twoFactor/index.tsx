import React, { useEffect, useRef, useState } from "react";
import { TextInput } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../../../shared/components/button";
import { Input } from "../../../../shared/components/input";
import { Spacer } from "../../../../shared/components/spacer";
import { Container, Body, Title, Footer, InputGroup } from "./styles";
import { RootState } from "../../../../store";
import { IKey, Keyboard } from "../../../../shared/components/keyboard";

const TwoFactor = () => {
  const { theme } = useSelector((state: RootState) => state.theme);
  const { navigate, reset } = useNavigation();

  const refs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ]

  const [code, setCode] = useState('');

  const onKeyPress = (key: IKey) => {
    if (key.action === 'backspace') {
      setCode(code.substring(0, code.length - 1));
    } else if (key.action === 'clear') {
      setCode('');
    } else if (code.length < 4) {
      setCode(code + key.value);
    }
  }

  useEffect(() => {
    if (code.length < 4) refs[code.length].current?.focus();
    if (code.length === 4) reset({ index: 0, routes: [{ name: 'Tabs' }] });
  }, [code])

  return (
    <Container>
      <Body>
        <Title>Verification code</Title>

        <Spacer size={3} />

        <InputGroup>
          <Input
            ref={refs[0]}
            type='pin'
            inputProps={{
              value: code[0],
              autoCapitalize: 'none',
              showSoftInputOnFocus: false,
              maxLength: 1,
              textAlign: 'center',
              editable: true,
            }} />

          <Spacer size={3} />

          <Input
            ref={refs[1]}
            type='pin'
            inputProps={{
              value: code[1],
              autoCapitalize: 'none',
              showSoftInputOnFocus: false,
              maxLength: 1,
              textAlign: 'center',
              editable: true,
            }} />

          <Spacer size={3} />

          <Input
            ref={refs[2]}
            type='pin'
            inputProps={{
              value: code[2],
              autoCapitalize: 'none',
              showSoftInputOnFocus: false,
              maxLength: 1,
              textAlign: 'center',
              editable: true,
            }} />

          <Spacer size={3} />

          <Input
            ref={refs[3]}
            type='pin'
            inputProps={{
              value: code[3],
              autoCapitalize: 'none',
              showSoftInputOnFocus: false,
              maxLength: 1,
              textAlign: 'center',
              editable: true,
            }} />
        </InputGroup>

        <Spacer size={2} />

        <Button outline type='primary' onPress={() => { }}>
          Resend code
        </Button>
      </Body>

      <Footer>
        <Keyboard onKeyPress={onKeyPress} />
      </Footer>
    </Container>
  );
}

export { TwoFactor }