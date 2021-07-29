import React from "react";
import { Button, ButtonColors } from "../button";
import { Spacer } from "../spacer";
import { Container, Wrapper, Content, Footer } from "./styles";

interface IButtonProps {
  title: string;
  onPress: () => void;
  type: ButtonColors;
  outline?: boolean;
}

interface IProps {
  children: any;
  isVisible: boolean;
  animationType?: 'none' | 'fade' | 'slide';
  buttons: IButtonProps[];
  buttonsDirection?: 'row' | 'column';
  toggle: () => void;
}

const Modal = (props: IProps) => {
  return (
    <Container
      transparent
      statusBarTranslucent
      animationType={props.animationType}
      visible={props.isVisible}>
      <Wrapper>
        <Content>
          {props.children}
          <Footer flexDirection={props.buttonsDirection}>
            {props.buttons?.map((button, index) => (
              <>
                <Button
                  key={index}
                  children={button.title}
                  onPress={button.onPress}
                  type={button.type}
                  outline={button.outline}
                />
                {props.buttons[index + 1] && <Spacer key={'s' + index} />}
              </>
            ))}
          </Footer>
        </Content>
      </Wrapper>
    </Container>
  );
}

export { Modal }