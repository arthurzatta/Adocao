import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { FAB } from 'react-native-paper';

import Icon from 'react-native-vector-icons/Ionicons';

import Header from '../../Components/Header';
import { Title, Distance, Box, Name, Img, Button } from './styles';

import api from '../../services/api';

export default function Home({ navigation }) {
  const [pets, setPets] = useState([]);
  const token = useSelector(state => state.auth.token);

  function navigateToDetail(pet) {
    navigation.navigate();
  }

  async function loadingPets() {
    const response = await api.get('/pets', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    setPets(response.data);
  };

  useEffect(() => {
    loadingPets();
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
        // onEndReached={loadingPets}
        onEndReachedThershold={0.2}
        renderItem={({ item: pet }) => (
          <>
            <View style={styles.container}>
              <Box style={styles.box}>
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
                  <Distance>2km de distância</Distance>
                </View>
              </Box>
            </View>
            <FAB
              icon='heart-outline'
              color='#D7443E'
              style={styles.favorite}
              accessibilityLabel='default'
              onPress={() => {}}
            />
          </>
        )}
      />

      <FAB
        icon='plus'
        color='#fff'
        style={styles.fab}
        accessibilityLabel='default'
        onPress={() => navigation.navigate('CreatePet')}
      />
    </>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: 25,
    bottom: 23,
    backgroundColor: '#EA5455'
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
