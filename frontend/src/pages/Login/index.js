import React from 'react';
import { Image, Text, StyleSheet } from 'react-native';

import { Container, Form, FormInput, SubmitButton, SignLink, SignLinkText, TLabel } from './styles';
import Background from '../../Components/Background';


const Login = ({ navigation }) => {
  return (
    <Background>
      <Container>
        <Image source={require('../../assets/logotipo1x.png')} />
      </Container>
      <Form style={styles.form}>
        <TLabel>Email: </TLabel>
        <FormInput
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          placeholder=""
        />

        <TLabel>Senha: </TLabel>
        <FormInput
          autoCapitalize="none"
          secureTextEntry
          placeholder=""
        />

        <SubmitButton style={styles.button} onPress={() => { }}>
          <Text style={styles.buttonText}>Entrar</Text>
        </SubmitButton>

        <SignLink onPress={() => navigation.navigate('CreateUser')}>
          <SignLinkText>Criar conta</SignLinkText>
        </SignLink>
      </Form>
    </Background>
  );
}

const styles = StyleSheet.create({
  form: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
  },
  buttonText: {
    paddingTop: 11,
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Ubuntu-Bold',
    textAlign: 'center',
  },
  button: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.16,
    elevation: 3,
  }
});

export default Login;
