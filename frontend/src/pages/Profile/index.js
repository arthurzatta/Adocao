import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFA from 'react-native-vector-icons/FontAwesome';

import { Container, Img, Box, SmallBox, Form } from './styles';
import Header from '../../Components/Header';

import { signOut } from '../../store/modules/auth/actions';

const Profile = () => {
  const profile = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <>
      <Header>
        <View style={{ flexDirection: 'row' }}>
          <Img style={styles.profileImage} source={{ uri: profile.image }} />
          <View>
            <Text style={styles.yourText}>{profile.name}</Text>
            <Text style={styles.notificationsText}>{profile.email}</Text>
          </View>
        </View>
      </Header>
      <Container>
        <Box style={styles.box}>
          <Icon name='card-account-details' size={40} color={'#4B4B4B'} />
          <View>
            <Text style={styles.textBox}>Meus dados</Text>
          </View>
        </Box>
        <Box style={styles.box}>
          <Icon name='cat' size={40} color={'#4B4B4B'} />
          <View>
            <Text style={styles.textBox}>Minhas adoções</Text>
          </View>
        </Box>
        <Box style={styles.box}>
          <Icon name='heart' size={40} color={'#4B4B4B'} />
          <View>
            <Text style={styles.textBox}>Pets favoritos</Text>
          </View>
        </Box>
        <Box style={styles.box}>
          <Icon name='alert-circle' size={40} color={'#4B4B4B'} />
          <View>
            <Text style={styles.textBox}>Alertar pet perdido</Text>
          </View>
        </Box>

        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <SmallBox style={styles.smallBox}>
            <IconFA name='question-circle' size={40} color={'#4B4B4B'} />
            <Text style={styles.textBox2}>Sobre</Text>
          </SmallBox>
          <SmallBox style={styles.smallBox} onPress={handleLogout}>
            <Icon name='logout' size={40} color={'#EA5455'} />
            <Text style={styles.textBox3}>Sair</Text>
          </SmallBox>
        </View>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  yourText: {
    fontFamily: 'Ubuntu-Bold',
    color: '#fff',
    fontSize: 32,
  },
  notificationsText: {
    fontFamily: 'Ubuntu-Bold',
    color: '#fff',
    fontSize: 14,
  },
  box: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 4,
  },
  smallBox: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 4,
  },
  textBox: {
    fontFamily: 'Ubuntu-Medium',
    fontSize: 18,
    color: '#4B4B4B',
    marginLeft: 30,
  },
  textBox2: {
    fontFamily: 'Ubuntu-Medium',
    fontSize: 18,
    color: '#4B4B4B',
  },
  textBox3: {
    fontFamily: 'Ubuntu-Medium',
    fontSize: 18,
    color: '#EA5455',
  }
});

export default Profile;
