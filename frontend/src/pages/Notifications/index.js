import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../../Components/Header';
import { Container, TitleNotification, Description } from './styles';
import api from '../../services/api';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Notifications = ({navigation}) => {
  const [notifications, setNotifications] = useState([]);

  async function loadingNotifications() {
    const response = await api.get('notifications');

    setNotifications(response.data);
  }

  useEffect(() => {
    loadingNotifications()
  }, []);

  return (
    <>
      <Header>
        <Text style={styles.yourText}>Suas</Text>
        <Text style={styles.notificationsText}>notificações</Text>
      </Header>
      <FlatList
        data={notifications}
        style={styles.notificationList}
        keyExtractor={notification => String(notification._id)}
        showsVerticalScrollIndicator={false}
        onEndReachedThershold={0.2}
        renderItem={({ item: notification }) => (
          <>
            <TouchableOpacity style={styles.boxNotification} onPress={() => navigation.navigate('LostPet')}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                {notification.type == 'create' ? (
                  <Icon name='dog' size={40} color={'#4B4B4B'} />
                ) : (
                  <Icon name='alert-circle' size={40} color={'#EA5455'} />
                  )}
                <View>
                  <TitleNotification>{notification.title}</TitleNotification>
                  <Description>{notification.subtitle}</Description>
                </View>
              </View>
            </TouchableOpacity>
          </>
        )}
      />
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
  boxNotification: {
    alignSelf: 'center',
    width: 350,
    height: 85,
    padding: 20,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 4,
  },
  notificationList: {
    flex: 1,
    marginTop: 10,
  }
});

export default Notifications;
