import { FAB } from 'react-native-paper';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux';
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

import api from '../../services/api';
import Header from '../../Components/Header';
import { Title, Distance, Box, Name, Img } from './styles';
import { loadingPets } from '../../store/modules/pets/actions';
import calculateDistance from '../../utils/calculateDistance';

export default function Home({ navigation }) {
  const dispatch = useDispatch();

  const token = useSelector(state => state.auth.token);
  const user = useSelector(state => state.user.user);
  const pets = useSelector(state => state.pets.pets);
  const [liked, setLiked] = useState([]);

  const [fab, setFab] = useState({ open: false });
  const onStateChange = ({ open }) => setFab({ open });
  const { open } = fab;

  function navigateToDetail(pet) {
    const dist = distance(pet);

    navigation.navigate('DescriptionPet', { id: pet.id, dist });
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

  async function addOrRemoveFavorites(pet) {
    let likes = [...liked];

    if(likes[pet.id] === true) {
      likes[pet.id] = false;
    } else {
      likes[pet.id] = true;
    }

    setLiked(likes);

    if(likes[pet.id] === true) {
      await api.post(`/favorites/create/${pet.id}`);
    } else {
      await api.delete(`/favorites/remove/${pet.id}`);
    }
  }

  useEffect(() => {
    dispatch(loadingPets({ token, owner: false }));
  }, []);

  return (
    <>
      <Header>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Title>Adote um</Title>
            <Title>amigo</Title>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
            <Icon name='options' size={40} color={'#fff'} />
          </TouchableOpacity>
        </View>
      </Header>

      <FlatList
        data={pets}
        style={styles.petList}
        keyExtractor={pet => String(pet.id)}
        showsVerticalScrollIndicator={false}
        onEndReachedThershold={0.2}
        renderItem={({ item: pet }) => (
          <>
            <View style={styles.container}>
              <Box style={styles.box}
                onPress={() => navigateToDetail(pet)}
              >
                <Img source={{ uri: pet.image }} />
                <View style={{ flex: 1, paddingTop: 6 }}>
                  <View style={{ flexDirection: 'row' }}>
                    <Name>{pet.name}</Name>
                    {pet.sex === 'M' ? (
                      < Icon style={{ paddingTop: 6, paddingLeft: 10 }} name='male' size={22} color={'#78CEFF'} />
                    ) : (
                      <Icon style={{ paddingTop: 6, paddingLeft: 10 }} name='female' size={22} color={'#FF93B5'} />
                    )}
                  </View>
                  <Distance>{distance(pet)}</Distance>
                </View>
              </Box>
            </View>
            <FAB
              icon={liked[pet.id] === true ? 'heart' : 'heart-outline'}
              color='#D7443E'
              style={styles.favorite}
              accessibilityLabel='default'
              onPress={() => addOrRemoveFavorites(pet)}
            />
          </>
        )}
      />

      <FAB.Group
        icon='plus'
        style={styles.fab}
        fabStyle={{ backgroundColor: '#EA5455' }}
        color='#fff'
        open={open}
        accessibilityLabel='default'
        actions={[
          {
            icon: 'dog',
            label: 'Criar adoção',
            onPress: (() => navigation.navigate('CreatePet'))
          },
          {
            icon: 'alert-circle',
            label: 'Criar alerta',
            onPress: (() => navigation.navigate('CreateAlert'))
          }
        ]}
        onStateChange={onStateChange}
        onPress={() => { }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
  },
  favorite: {
    position: 'absolute',
    right: 80,
    bottom: 70,
    backgroundColor: '#fff',
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
  petList: {
    flex: 1,
    marginTop: 10,
  }
})
