import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header/index';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconIO from 'react-native-vector-icons/Ionicons';
import { Container, IconContainer, IconButton, Img, UserImg, width } from './styles';
import api from '../../services/api';
import MapView, { PROVIDER_GOOGLE, Marker, Circle } from 'react-native-maps';
import { parse, format, getHours } from 'date-fns';
import pt from 'date-fns/locale/pt';

export default function LostPet({ navigation, route }) {
  const [pet, setPet] = useState({});
  const [owner, setOwner] = useState({});
  const [coordinates, setCoordinates] = useState({});

  async function Details() {
    const { id } = route.params;
    const response = await api.get(`/lost/${id}`);

    setCoordinates({
      latitude: Number(response.data.latitude),
      longitude: Number(response.data.longitude)
    });

    setPet(response.data);
    setOwner(response.data.user);

  };

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=55${owner.phone}&text=Olá ${owner.name}, estou entrando em contato pelo app Adocão pois quero te ajudar a achar seu pet!`)
  }

  useEffect(() => { Details() }, []);

  return (
    <>
      <ScrollView style={{ flex: 1 }} containerContentStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <Icon name='arrow-back'
          onPress={() => navigation.navigate("Home")}
          style={{ fontSize: 40, color: '#FF93B5', paddingLeft: 20, paddingBottom: 60, paddingTop: 30 }}
        />
        <Container style={styles.box}>
          {/* Image */}
          <View style={styles.image}>
            <Img source={{ uri: pet.image }} />
          </View>

          {/* FAB */}
          <IconContainer>
            <IconButton onPress={() => sendWhatsapp()} icon='message' color='rgba(95,169,61,1)' />
          </IconContainer>

          <View style={{ margin: 20 }}>
            {/* Pet Infos */}
            <View>
              <View style={styles.infos}>
                <Text style={styles.title}>{pet.name}</Text>
                {pet.sex === 'M' ? (
                  < IconIO style={styles.icon} name='male' color={'#78CEFF'} />
                ) : (
                  <IconIO style={styles.icon} name='female' color={'#FF93B5'} />
                )
                }
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.subtitle}>Criado em 09 de março de 2021</Text>
              </View>
            </View>

            {/* Map */}
            <View style={styles.mapContainer}>

              <View style={mapStyle.container}>
                <MapView
                  provider={PROVIDER_GOOGLE}
                  style={mapStyle.map}
                  region={{
                    latitude: coordinates.latitude,
                    longitude: coordinates.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
                  rotateEnabled={false}
                  zoomEnabled={true}
                  scrollEnabled={true}
                  showsTraffic={false}
                  minZoomLevel={18}
                >
                  <Circle
                    center={coordinates}
                    radius={10}
                    strokeWidth={3}
                    strokeColor={'#FF93B5'}
                    fillColor={'rgba(255,147,181,0.5)'}
                  />
                  <Marker
                    coordinate={coordinates}
                  />
                </MapView>
              </View>
            </View>

            {/* User Informations */}
            <View style={{ flexDirection: 'row', paddingTop: 10 }}>
              <View style={styles.userImage}>
                <UserImg source={{ uri: owner.image }} />
              </View>
              <View>
                <Text style={styles.nameOwner}>{owner.name}</Text>
                <Text style={styles.infOwner}>{owner.city} {owner.state}</Text>
                <Text style={styles.infOwner}>{owner.phone}</Text>
              </View>
            </View>

          </View>
        </Container>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  infos: {
    flexDirection: 'row',
    marginTop: -40,
  },
  title: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 24,
    color: '#4B4B4B',
  },
  subtitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    color: '#A4A4A4'
  },
  icon: {
    padding: 6,
    fontSize: 22
  },
  mapContainer: {
    marginTop: 10,
    marginBottom: 10,
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#A4A4A4',
    height: 350
  },
  mapContainerText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10
  },
  lasTime: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
  },
  time: {
    fontFamily: 'Roboto-Regular',
    fontSize: 13
  },
  box: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: width - 40,
    height: 369,
  },
  nameOwner: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: '#4B4B4B',
  },
  infOwner: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#4B4B4B',
    paddingTop: 10
  },
  userImage: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 60,
  },
});

const mapStyle = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
