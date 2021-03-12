import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header/index';
import { View, Text, StyleSheet, Image, } from 'react-native';
import { Container, IconButton, IconContainer, Form, TLabel, width } from './styles';
import  Icon  from 'react-native-vector-icons/MaterialIcons';  
import  IconIO  from 'react-native-vector-icons/Ionicons';  
import  IconIsto  from 'react-native-vector-icons/Fontisto';  

const DescriptionPet = (({navigation}) => {


  return (
    <Header>
      <Icon name='arrow-back'/>
      <Container>
        <Image 
          source={require('../../assets/fagner.png')} 
          style={{width: width-40, height: 50}}
        />

        <IconContainer>
          <IconButton icon='message' color='rgba(95,169,61,1)' />
          <IconButton icon='heart-outline' color='rgba(215,68,62,1)'/>
        </IconContainer>
        
        <Form>
          <View>
            <View style={styles.infos}>
              <Text style={styles.title}>Fagner</Text>
              <IconIO name='male-sharp' style={styles.icon}/>
            </View>
              <Text style={styles.subtitle}>Distancia</Text>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>

            <View style={statusStyle.row}>
              <View style={statusStyle.column}>
                <View style={statusStyle.status}>
                    <IconIsto name='injection-syringe'/>
                    <TLabel>Vacinado:</TLabel>
                    <Icon name='check'/>
                </View>
                <View style={statusStyle.status}>
                  <Icon name='pets'/>
                  <TLabel>Castrado:</TLabel>
                  <Icon name='close'/>
                </View>
              </View>
              <View style={statusStyle.column}>
              <View style={statusStyle.status}>
                <IconIsto name='drug-pack'/>
                <TLabel>Vermifugado:</TLabel>
                <Icon name='check'/>
              </View>
              <View style={statusStyle.status}>
                <IconIO name='hardware-chip-outline'/>
                <TLabel>Chipado:</TLabel>
                <Icon name='close'/>
              </View>
              </View>
            </View>
          </View>

          <View style={{paddingTop: 10}}>
            <Text style={styles.nameOwner}>Nome Dono</Text>
            <Text style={styles.infOwner}>Cidade</Text>
            <Text style={styles.infOwner}>Telefone</Text>
          </View>

        </Form>
      </Container>
    </Header>     
  )
});

const styles = StyleSheet.create({
  infos: {
    flexDirection: 'row',
  },
  title:{
    fontFamily: 'Ubuntu',
    fontSize: 24,
    color: '#4B4B4B',
  },
  subtitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    color: '#A4A4A4'
  },
  icon: {
    fontSize: 20,
    padding: 2,
    color: '#78CEFF'
  },
  descriptionContainer: {
    marginTop: 10,
    marginBottom: 10,
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#A4A4A4'
  },
  description: {
    marginTop: 10,
    marginBottom: 10,
    color: '#4B4B4B',
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
  }
});

const statusStyle = StyleSheet.create({
  column: {
    flexDirection: 'column',
    marginTop: 20,
    paddingRight: 80
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  status: {
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 10,
  }
})

const iconsStyles = StyleSheet.create({
  pressables: {
    justifyContent: 'center',
  }
})

export default DescriptionPet;