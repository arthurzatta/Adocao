import React, { useState, useRef, useEffect } from 'react';
import { Image, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import { signInRequest } from '../../store/modules/auth/actions';

import { Container, Form, FormInput, SubmitButton, SignLink, SignLinkText, TLabel } from './styles';
import Background from '../../Components/Background';
import Logo from '../../assets/logotipo.png'

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const passwordRef = useRef();
  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  return (
    <Background>
      <Container>
        <Image source={Logo} />
      </Container>
      <Form style={styles.form} >
        <TLabel>Email: </TLabel>
        <FormInput
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder=""
          onSubmitEditing={() => passwordRef.current.focus()}
          value={email}
          onChangeText={setEmail}
          returnKeyTape="next"
        />

        <TLabel>Senha: </TLabel>
        <FormInput
          secureTextEntry
          placeholder=""
          ref={passwordRef}
          returnKeyTape="send"
          value={password}
          onChangeText={setPassword}
        />

        <SubmitButton style={styles.button} onPress={handleSubmit}>
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
