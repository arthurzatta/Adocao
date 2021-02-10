import React, { useState } from 'react';
import { Text, StyleSheet, FlatList, View } from 'react-native';

import Header from '../../Components/Header';

// import Icon from 'react-native-vector-icons/MaterialIcons';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, BoxNotification, TitleNotification, Description } from './styles';

const Notifications = () => {
  return (
    <>
      <Header>
        <Text style={styles.yourText}>Suas</Text>
        <Text style={styles.notificationsText}>notificações</Text>
      </Header>
      <Container>
        <BoxNotification style={styles.box}>
          <Icon name='alert-circle' size={40} color={'#EA5455'} />
          <View>
            <TitleNotification>Atenção!!</TitleNotification>
            <Description>Pet perdido perto de você.</Description>
          </View>
        </BoxNotification>
        <BoxNotification style={styles.box}>
          <Icon name='alert-circle' size={40} color={'#EA5455'} />
          <View>
            <TitleNotification>Atenção!!</TitleNotification>
            <Description>Pet perdido perto de você.</Description>
          </View>
        </BoxNotification>
        <BoxNotification style={styles.box}>
          <Icon name='dog' size={40} color={'#FF93B5'} />
          <View>
            <TitleNotification>Atenção!!</TitleNotification>
            <Description>Pet perdido perto de você.</Description>
          </View>
        </BoxNotification>
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
    fontSize: 32,
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
  }
});

export default Notifications;
