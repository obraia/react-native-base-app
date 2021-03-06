import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { InputPin } from "../../../../shared/components/inputPin";
import { IKey, Keyboard } from "../../../../shared/components/keyboard";
import { Button } from "../../../../shared/components/button";
import { Container, Body, Title } from "./styles";

const TwoFactor = () => {
  const { navigate, reset } = useNavigation();

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
    if (code.length === 4) navigate('Tabs');
  }, [code])

  return (
    <Container>
      <Body>
        <Title>Two factor validator</Title>

        <InputPin value={code} />
        
        <Button outline type='primary' onPress={() => { }}>
          Resend code
        </Button>

        <Keyboard onKeyPress={onKeyPress} />
      </Body>
    </Container>
  );
}

export { TwoFactor }