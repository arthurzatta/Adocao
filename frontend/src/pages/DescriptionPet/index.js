import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../Components/Header/index';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Container, IconButton, IconContainer, Form, TLabel, Img } from './styles';
import  Icon  from 'react-native-vector-icons/MaterialIcons';  
import  IconIO  from 'react-native-vector-icons/Ionicons';  
import  IconIsto  from 'react-native-vector-icons/Fontisto';  
import api from '../../services/api';

const DescriptionPet = (({navigation, route}) => {
  const token = useSelector(state => state.auth.token);
  const user  = useSelector(state => state.user.user);

  const [pet, setPet] = useState({});
  const [items, setItems] = useState([]);
  async function petDetails(){
    const { id } = route.params;
    const response = await api.get(`/pets/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    setPet(response.data);
    setItems(response.data.items);
  }

  useEffect(() => {
    petDetails()
  }, []);



  return (
    <>
      <Header>
        <Icon name='arrow-back' 
          onPress={() => navigation.pop()}
          style={{ fontSize: 40, color: '#FFFFFF'}}
          />
      </Header>  
      
      <Container style={styles.box}>
        <IconContainer>
          <IconButton icon='message' color='rgba(95,169,61,1)' />
          <IconButton icon='heart-outline' color='rgba(215,68,62,1)'/>
        </IconContainer>
        
        <View style={{margin: 20}}>
          <View>
            <View style={styles.infos}>
              <Text style={styles.title}>{pet.name}</Text>
              {pet.sex === 'm' ? (
                      < IconIO style={styles.icon} name='male'  color={'#78CEFF'} />
                    ) : (
                        <IconIO style={styles.icon} name='female' color={'#FF93B5'} />
                      )} 
            </View>
              <Text style={styles.subtitle}>Distancia</Text>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>{pet.description}</Text>

            <View style={statusStyle.row}>
              <View style={statusStyle.column}>
                <View style={statusStyle.status}>
                    <IconIsto name='injection-syringe'/>
                    <TLabel>Vacinado:</TLabel>
                    {items[0] 
                      ? (<Icon color={'#7BE26B'} name='check'/>)
                      : (<Icon color={'#EA5455'} name='close'/>)
                    }
                </View>
                <View style={statusStyle.status}>
                  <Icon name='pets'/>
                  <TLabel>Castrado:</TLabel>
                  {items[1] 
                    ? (<Icon color={'#7BE26B'} name='check'/>)
                    : (<Icon color={'#EA5455'} name='close'/>)
                  }
                </View>
              </View>
              <View style={statusStyle.column}>
              <View style={statusStyle.status}>
                <IconIsto name='drug-pack'/>
                <TLabel>Vermifugado:</TLabel>
                {items[2] 
                  ? (<Icon color={'#7BE26B'} name='check'/>)
                  : (<Icon color={'#EA5455'} name='close'/>)
                } 
              </View>
              <View style={statusStyle.status}>
                <IconIO name='hardware-chip-outline'/>
                <TLabel>Chipado:</TLabel>
                {items[3] 
                  ? (<Icon color={'#7BE26B'} name='check'/> )
                  : (<Icon color={'#EA5455'} name='close'/> )
                }
              </View>
              </View>
            </View>
          </View>
          <View style={{paddingTop: 10}}>
            <Text style={styles.nameOwner}>{user.name}</Text>
            <Text style={styles.infOwner}>{user.city}</Text>
            <Text style={styles.infOwner}>{user.phone}</Text>
          </View>
        </View>
      </Container>
  </>
  )
});

const styles = StyleSheet.create({
  infos: {
    flexDirection: 'row',
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
  },
  box: {
    marginTop: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4,
    elevation: 3,
  },
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