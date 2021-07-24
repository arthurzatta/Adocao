import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, FlatList, View, StyleSheet, Image } from 'react-native';

import api from '../../services/api';
import Background from '../../Components/Background/index';
import calculateDistance from '../../utils/calculateDistance';
import { TitleNotification, Form, Header, Img, Description } from './styles';

export default function Favorites({ navigation }) {
  const [pets, setPets] = useState([]);
  const user = useSelector(state => state.user.user);

  async function loadingPets() {
    const response = await api.get('/favorites');

    setPets(response.data);
  }

  function distance(pet) {
    try {
      let { latitude: lat1, longitude: long1 } = user;
      lat1 = Number(lat1);
      long1 = Number(long1);
      const centerCoordinates = { lat1, long1 };

      let { latitude: lat2, longitude: long2 } = pet;
      lat2 = Number(lat2);
      long2 = Number(long2);
      const pointCoordinates = { lat2, long2 };

      let distance = calculateDistance(centerCoordinates, pointCoordinates);

      if (distance < 1) {
        distance = `${(distance * 1000).toPrecision(3)} m de distância`;
      } else {
        distance = `${(distance).toPrecision(3)} Km de distância`;
      }

      return distance;

    } catch (err) {
      return 'Distância desconhecida';
    }
  }

  useEffect(() => {
    loadingPets();
  }, [])

  return (
    <Background>
      <Header>
        <Icon name="arrow-left-thick" size={22} color={'#fff'} onPress={() => navigation.pop()} />
        <Text style={styles.title}>Pets Favoritos</Text>
      </Header>

      <Form style={styles.form}>
        {pets.length !== 0 ? (
          <FlatList
            data={pets}
            keyExtractor={pet => String(pet.id)}
            showsVerticalScrollIndicator={false}
            style={styles.notificationList}
            renderItem={({ item: pet }) => (
              <>
                <TouchableOpacity style={styles.boxNotification} onPress={() => navigation.navigate('DescriptionPet', { id: pet.id_pet })}>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={styles.viewImg}>
                      <Img source={{ uri: pet.image }} />
                    </View>
                    <View>
                      <View style={{ flexDirection: 'row' }}>
                        <TitleNotification>{pet.name}</TitleNotification>
                        {pet.sex == 'm' ? (
                          <Icon name='gender-male' size={25} color={'#78CEFF'} style={{ marginLeft: 5 }} />
                        ) : (
                          <Icon name='gender-female' size={25} color={'#FF93B5'} style={{ marginLeft: 5 }} />
                        )}
                      </View>
                      <Description>{distance(pet)}</Description>
                    </View>
                  </View>
                </TouchableOpacity>
              </>
            )}
          />) : (
          <View style={{ flex: 1, flexDirection: 'column', marginTop: 250 }}>
            <Image source={require('../../assets/cat.png')} style={{ alignSelf: 'center' }} />
            <Text style={styles.noFavsText}>Você não possui favoritos</Text>
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
