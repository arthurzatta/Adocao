import React, { useState, useEffect} from 'react';
import Header from '../../Components/Header/index';
import {View, ScrollView, StyleSheet, Text } from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import  IconIO  from 'react-native-vector-icons/Ionicons';
import { Container, IconContainer, IconButton, Img, UserImg, width } from './styles';
import api from '../../services/api';
import MapView, { PROVIDER_GOOGLE, Marker, Circle } from 'react-native-maps';

export default function LostPet({navigation, route}) {
  const [pet, setPet] = useState({});
  const [owner, setOwner] = useState({});
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  async function Details() {
    // const { id } = route.params;
    const response = await api.get(`/lost/${1}`);
    console.log(response.data)
    setPet(response.data);
    setOwner(response.data.user);

    setLat(() => Number(pet.latitude));
    setLong(() => Number(pet.longitude));
  };

  useEffect(() => { Details() },[]);

  
  return(
    <>
      <ScrollView style={{flex: 1}} containerContentStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>
        <Header>
          <Icon name='arrow-back'
              onPress={() => navigation.pop()}
              style={{ fontSize: 40, color: '#FFFFFF',paddingBottom: 60, paddingTop: 30}}
          />
        </Header>
        <Container style={styles.box}>
          {/* Image */}
          <View style={styles.image}>
            <Img source={{uri: pet.image}} />
          </View>

          {/* FAB */}
          <IconContainer>
            <IconButton icon='message' color='rgba(95,169,61,1)' />
          </IconContainer>
          
          <View style={{margin: 20}}>
            {/* Pet Infos */}
            <View>
              <View style={styles.infos}>
                <Text style={styles.title}>{pet.name}</Text>
                {pet.sex === 'm' ? (
                        < IconIO style={styles.icon} name='male'  color={'#78CEFF'} />
                      ) : (
                          <IconIO style={styles.icon} name='female' color={'#FF93B5'} />
                        )
                }
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.subtitle}></Text>
                <Text style={styles.subtitle}>19:31</Text>
              </View>
            </View>

            {/* Map */}
            <View style={styles.mapContainer}>
                
                <View style={mapStyle.container}>
                  <MapView
                    provider={PROVIDER_GOOGLE}
                    style={mapStyle.map}
                    region= {{
                      latitude: lat,
                      longitude: long,
                      latitudeDelta: 0.0922,
                      longitudeDelta: 0.0421,
                    }}
                    rotateEnabled={false}
                    zoomEnabled={true}
                    scrollEnabled={true}
                    showsTraffic={false}
                    showsBuildings={false}
                  >
                    <Circle
                      center={{ latitude: lat, longitude: long}}
                      radius={10}
                      strokeWidth={3}
                      strokeColor={'#FF93B5'}
                      fillColor={'rgba(255,147,181,0.5)'}
                    />
                    <Marker 
                      coordinate={{ latitude: lat, longitude: long}}
                    />
                  </MapView>
                </View>
                <View style={{padding: 100}}></View>
            </View>

            {/* User Informations */}
            <View style={{flexDirection: 'row' ,paddingTop: 10}}>
              <View style={styles.userImage}>
                <UserImg source={{uri: owner.image}}/>
              </View>
              <View>
                <Text style={styles.nameOwner}>{owner.name}</Text>
                <Text style={styles.infOwner}>{owner.city}</Text>
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
  title:{
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
    borderColor: '#A4A4A4'
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
    width: width-40, 
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
    borderStyle: 'solid',
    borderWidth: 1,
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