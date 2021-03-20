import React, { useState, useEffect} from 'react';
import Header from '../../Components/Header/index';
import {View, ScrollView, StyleSheet, Text } from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import  IconIO  from 'react-native-vector-icons/Ionicons';
import { Container, IconContainer, IconButton, Img, UserImg, width } from './styles';

export default function LostPet({navigation}) {

  return(
    <>
      <ScrollView style={{flex: 1}} containerContentStyle={{flexGrow:1}} showsVerticalScrollIndeicator={false}>
        <Header>
          <Icon name='arrow-back'
              onPress={() => navigation.pop()}
              style={{ fontSize: 40, color: '#FFFFFF',paddingBottom: 60, paddingTop: 30}}
          />
        </Header>
        <Container style={styles.box}>
          {/* Image */}
          <View style={styles.image}>
            <Img source={{uri: 'https://amazinganimalphotos.com/wp-content/uploads/2013/04/most-innocent-cat-photo.jpg'}} />
          </View>

          {/* FAB */}
          <IconContainer>
            <IconButton icon='message' color='rgba(95,169,61,1)' />
          </IconContainer>
          
          <View style={{margin: 20}}>
            {/* Pet Infos */}
            <View>
              <View style={styles.infos}>
                <Text style={styles.title}>Pet Name</Text>
                {/* {pet.sex === 'm' ? (
                        < IconIO style={styles.icon} name='male'  color={'#78CEFF'} />
                      ) : (
                          <IconIO style={styles.icon} name='female' color={'#FF93B5'} />
                        )
                } */}
              </View>
                <Text style={styles.subtitle}>Distancia</Text>
            </View>

            {/* Map */}
            <View style={styles.mapContainer}>
                {/* Info */}
                <View style={styles.mapContainerText}>
                  <Text style={styles.lasTime}>Última vez visto</Text>
                  <Text style={styles.time}>Reportado às 19:31</Text>
                </View>
                <View style={{padding: 100}}></View>
            </View>

            {/* User Informations */}
            <View style={{flexDirection: 'row' ,paddingTop: 10}}>
              <View style={styles.userImage}>
                {/* <UserImg source={{uri: owner.image}}/> */}
              </View>
              <View>
                <Text style={styles.nameOwner}>Dono</Text>
                <Text style={styles.infOwner}>Cidade</Text>
                <Text style={styles.infOwner}>Phone</Text>
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
})