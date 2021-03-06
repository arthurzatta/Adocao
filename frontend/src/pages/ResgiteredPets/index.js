import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, FlatList, View, StyleSheet, Image } from 'react-native';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Background from '../../Components/Background/index';
import { TitleNotification, Form, Header, Img, Description } from './styles';

import api from '../../services/api';

export default function RegisteredPet({ navigation }) {
  const [pets, setPets] = useState([]);

  async function loadingPets() {
    const response = await api.get('/pets', {
      headers: {
        owner: true,
      }
    });

    response.data.map((item) => {
      const { createdAt } = item;

      const date = format(
        parseISO(createdAt),
        "'Criado em' dd 'de' MMMM'",
        { locale: pt }
      );

      item.createdAt = date;
    })

    setPets(response.data);
  }

  useEffect(() => {
    loadingPets();
  }, []);

  return (
    <Background>
      <Header>
        <Icon name="arrow-left-thick" size={22} color={'#fff'} onPress={() => navigation.pop()} />
        <Text style={styles.title}>Meus pets cadastrados</Text>
      </Header>

      <Form style={styles.form}>

        {pets.length !== 0
          ? (
            <FlatList
              data={pets}
              keyExtractor={pet => String(pet.id)}
              showsVerticalScrollIndicator={false}
              style={styles.notificationList}
              renderItem={({ item: pet }) => (
                <>
                  <TouchableOpacity style={styles.boxNotification} onPress={() => navigation.navigate('DescriptionPet', { id: pet.id })}>
                    <View style={{ flexDirection: 'row' }}>
                      <View style={styles.viewImg}>
                        <Img source={{ uri: pet.image }} />
                      </View>
                      <View>
                        <View style={{ flexDirection: 'row' }}>
                          <TitleNotification>{pet.name}</TitleNotification>
                          {pet.sex == 'M' ? (
                            <Icon name='gender-male' size={20} color={'#78CEFF'} style={{ marginLeft: 5, marginTop: 9 }} />
                          ) : (
                            <Icon name='gender-female' size={20} color={'#FF93B5'} style={{ marginLeft: 5, marginTop: 9 }} />
                          )}
                        </View>
                        <Description>{pet.createdAt}</Description>
                      </View>
                    </View>
                  </TouchableOpacity>
                </>
              )}
            />) : (
            <View style={{ flex: 1, flexDirection: 'column', marginTop: 250 }}>
              <Image source={require('../../assets/cat.png')} style={{ alignSelf: 'center' }} />
              <Text style={styles.noFavsText}>Você não possui pets cadastrados</Text>
            </View>
          )}
      </Form>
    </Background>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Ubuntu-Medium',
    color: '#fff',
    fontSize: 18,
    paddingLeft: 10,
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
    marginTop: 12,
  },
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
  viewImg: {
    width: 55,
    height: 55,
    borderRadius: 55,
    elevation: 0.5
  },
  noFavsText: {
    fontFamily: 'Ubuntu-Bold',
    color: '#000',
    fontSize: 18,
    alignSelf: 'center',
  }
});
