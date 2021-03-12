import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconIO from 'react-native-vector-icons/Ionicons';
import IconIsto from 'react-native-vector-icons/Fontisto';
import { SubmitButton, FormInput, TLabel, Header, Form, IconBox, IconContainer } from './styles';
import api from '../../services/api';
import { Description } from '../Notifications/styles';

const CreatePet = ({ navigation }) => {
  const [name, setName] = useState();
  const [sex, setSex] = useState('true');
  const [type, setType] = useState('');
  const [description, setDescription] = useState();

  //Estados dos icones
  const [vacinado, setVacinado] = useState();
  const [castrado, setCastrado] = useState();
  const [vermifugado, setVermifugado] = useState();
  const [chipado, setChipado] = useState();

  function submitButton(){

    if(!name || !type){
      return;
    }

    const items = [vacinado,castrado,vermifugado,chipado];
    
    const data = {
      name,
      description,
      sex: sex ? 'm' : 'f',
      type,
      items,
      is_lost: false,

    }
    api.post('/pets/create', data);
    navigation.pop();
  }

  return (
    <View style={styles.container}>
      <Form style={styles.form}>
        <Header>
          <View style={styles.closeCreate}>
            <Icon name='close' style={styles.closeIcon} onPress={() => navigation.pop()} />
            <Text style={styles.title}>Criar</Text>
          </View>
          <Text style={styles.clean}>Limpar</Text>
        </Header>

        <TLabel>Nome do pet:</TLabel>
        <FormInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder=""
          value={name}
          onChangeText={setName}
        />

        <TLabel>Descrição:</TLabel>
        <FormInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder=""
          value={description}
          onChangeText={setDescription}
        />        
        {/* Tipo */}
        <View>
          <TLabel>Tipo:</TLabel>
          <RNPickerSelect
            placeholder={{
              label: '-',
              value: null
            }}
            style={pickerSelectStyles}
            onValueChange={(value) => setType(value)}
            items={[
              { label: 'Cachorro', value: 'cachorro' },
              { label: 'Gato', value: 'gato' },
              { label: 'Outros', value: 'outros' },
            ]}
            value={type}
          />
        </View>
        {/* RadioButton */}
        <View style={styles.radioContainer}>
          <TLabel>Sexo:</TLabel>
          <TLabel>Macho</TLabel>
          <RadioButton.Item
            color={'#FF93B5'}
            value={'true'}
            style={{marginTop: 15}}
            status={sex === 'true' ? 'checked' : 'unchecked'}
            onPress={() => setSex('true')}
            />
          <TLabel>Fêmea</TLabel>
          <RadioButton.Item
            color={'#FF93B5'}
            style={{marginTop: 15}}
            value={'false'}
            status={sex === 'false' ? 'checked' : 'unchecked'}
            onPress={() => setSex('false')}
          />
        </View>

        <IconContainer>
          {/* Vacinado Icon */}
          <IconBox
            onPress={() => (vacinado === null ? setVacinado('vacinado') : setVacinado(null))}
            style={{ borderColor: !vacinado  ? '#A4A4A4' : '#FF93B5', }}
          >
            <IconIsto name='injection-syringe' style={[iconsStyle.icons, { color: !vacinado ? '#A4A4A4' : '#FF93B5' }]} />
            <Text style={[iconsStyle.text, { color: !vacinado ? '#A4A4A4' : '#FF93B5' }]}>Vacinado</Text>
          </IconBox>

          {/* Castrado Icon */}
          <IconBox
            onPress={() => (!castrado ? setCastrado('castrado') : setCastrado(null))}
            style={{ borderColor: !castrado ? '#A4A4A4' : '#FF93B5', }}
          >
            <Icon name='pets' style={[iconsStyle.icons, { color: !castrado ? '#A4A4A4' : '#FF93B5' }]} />
            <Text style={[iconsStyle.text, { color: !castrado ? '#A4A4A4' : '#FF93B5' }]}>Castrado</Text>
          </IconBox>

          {/* Vermifugado Icon */}
          <IconBox
            onPress={() => (!vermifugado ? setVermifugado('vermifugado') : setVermifugado(null))}
            style={{ borderColor: !vermifugado ? '#A4A4A4' : '#FF93B5', }}
          >
            <IconIsto name='drug-pack' style={[iconsStyle.icons, { color: !vermifugado ? '#A4A4A4' : '#FF93B5' }]} />
            <Text style={[iconsStyle.text, { color: !vermifugado ? '#A4A4A4' : '#FF93B5' }]}>Vermifugado</Text>
          </IconBox>

          {/* Chipado Icon */}
          <IconBox
            onPress={() => (!chipado ? setChipado('chipado') : setChipado(null))}
            style={{ borderColor: !chipado ? '#A4A4A4' : '#FF93B5', }}
          >
            <IconIO name='hardware-chip-outline' style={[iconsStyle.icons, { color: !chipado ? '#A4A4A4' : '#FF93B5' }]} />
            <Text style={[iconsStyle.text, { color: !chipado ? '#A4A4A4' : '#FF93B5' }]}>Chipado</Text>
          </IconBox>
        </IconContainer>

        <SubmitButton style={styles.button} onPress={submitButton}>
          <Text style={styles.buttonText}>Criar pet</Text>
        </SubmitButton>
      </Form>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    flexDirection: 'column',
  },
  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    color: '#4B4B4B',
  },
  clean: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    color: '#FF93B5'
  },
  closeIcon: {
    fontSize: 30,
    marginRight: 5,
    color:'#FF93B5',
  },
  closeCreate: {
    flexDirection: 'row',
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonText: {
    paddingTop: 11,
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Ubuntu-Bold',
    textAlign: 'center',
  },
  button: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.16,
    elevation: 3,
  },
});

const iconsStyle = StyleSheet.create({
  icons: {
    alignSelf: 'center',
    fontSize: 31,
  },
  text: {
    alignSelf: 'center',
    fontFamily: 'Ubuntu',
    fontSize: 12
  }
})

const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    width: 177,
    color: "#a4a4a4",
  },
});

export default CreatePet;
