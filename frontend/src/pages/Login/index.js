import React from 'react';
import { Image, Text } from 'react-native';

import { Container, Form, FormInput, SubmitButton, SignLink, SignLinkText } from './styles';
import Background from '../../Components/Background';


const Login = ({ navigation }) => {
  return (
    <Background>
      <Container>
        <Image source={require('../../assets/logotipo1x.png')} />
      </Container>
      <Form>
        <FormInput
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          placeholder="email"
        />

        {/* <FormInput
          autoCapitalize="none"
          secureTextEntry
          placeholder="Sua senha"
        /> */}

        <SubmitButton onPress={() => { }}>
        </SubmitButton>

        <SignLink onPress={() => { }}>
          <SignLinkText>Criar conta</SignLinkText>
        </SignLink>
      </Form>
    </Background>
  );
}

export default Login;
