import React from 'react';
import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { Container } from './styles';
import Background from '../../Components/Background';
import Button from '../../Components/Button';
import JoinUs from '../../assets/undraw/join_us.png';

const Welcome = ({ navigation }) => {
  return (
    <Background>
      <Container >
        <Text style={styles.title}>Junte se a nós</Text>
        <Image source={JoinUs} style={styles.image} />
        <Button style={styles.button} onPress={() => navigation.navigate('CreateUser')} >
          <Text style={styles.buttonText}>
            Criar conta
        </Text>
        </Button >
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Já possuo conta!</Text>
        </TouchableOpacity>
      </Container>
    </Background>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    fontSize: 36,
    fontFamily: 'Ubuntu-Bold',
    marginTop: 100
  },
  buttonText: {
    paddingTop: 11,
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Ubuntu-Bold',
    textAlign: 'center',
  },
  loginText: {
    fontFamily: 'Roboto-Regular',
    color: '#fff',
    fontSize: 18,
    marginBottom: 40,
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

export default Welcome;
