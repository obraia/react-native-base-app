import React, { useEffect, useRef, useState } from "react";
import { TextInput } from "react-native";
import { Input } from "../input";
import { Spacer } from "../spacer";
import { Container } from "./styles";

interface IProps {
  value: string;
}

const InputPin = (props: IProps) => {

  const refs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ]

  useEffect(() => {
    if (props.value.length < 4) refs[props.value.length].current?.focus();
  }, [props.value])

  return (
    <Container>
      <Input
        ref={refs[0]}
        type='pin'
        inputProps={{
          value: props.value[0],
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
          value: props.value[1],
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
          value: props.value[2],
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
          value: props.value[3],
          autoCapitalize: 'none',
          showSoftInputOnFocus: false,
          maxLength: 1,
          textAlign: 'center',
          editable: true,
        }} />
    </Container>
  );
}

export { InputPin }