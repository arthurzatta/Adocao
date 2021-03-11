import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { RadioButton } from 'react-native-paper';
import { SubmitButton, FormInput, TLabel, Header, Form, IconContainer, IconBox } from './styles';

import  Icon  from 'react-native-vector-icons/MaterialIcons';
import  IconIO  from 'react-native-vector-icons/Ionicons';
import  IconIsto  from 'react-native-vector-icons/Fontisto';

import api from '../../services/api';

const CreatePet = ({ navigation }) => {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState('');
  const [type, setType] = useState('');
  const [sex, setSex] = useState('true');

  //Estados dos icones
  const [vacinado, setVacinado] = useState(false);
  const [castrado, setCastrado] = useState(false);
  const [vermifugado, setVermifugado] = useState(false);
  const [chipado, setChipado] = useState(false);

  function handleSubmit(){
    const data = {
      name,
      description,
      type,
      sex
    };
    api.post('pets/create', data);
  };


  return (
    <View style={styles.container}>
      <Form>
        <Header>
          <Text style={styles.title}>Cadastrar</Text>
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

        <View>
          <TLabel>Tipo:</TLabel>
          <RNPickerSelect
            placeholder={{
              label: '-',
              value: null
            }}
            onValueChange={(value) => setType(value)}
            style={pickerSelectStyles}
            items={[
              { label: 'Cachorro', value: 'cachorro' },
              { label: 'Gato', value: 'gato' },
              { label: 'Outros', value: 'outros' },
            ]}
            value={type}
          />
        </View>

        <View style={styles.radioButtonContainer}>
          <TLabel>Sexo:</TLabel>
          <TLabel>Macho</TLabel>
          <RadioButton.Item
            label="Macho"
            color={'#FF93B5'}
            value={'true'}
            status={sex === 'true' ? 'checked' : 'unchecked'}
            onPress={() => setSex('true')}
          />
          <TLabel>Fêmea</TLabel>
          <RadioButton.Item
            label="Fêmea"
            color={'#FF93B5'}
            value={'false'}
            status={sex === 'false' ? 'checked' : 'unchecked'}
            onPress={() => setSex('false')}
            style={styles.radio}
          />
        </View>
        <IconContainer>
        {/* Vacinado Icon */}
        <IconBox
          onPress={() => (!vacinado ? setVacinado(true): setVacinado(false))}
          style={{borderColor: !vacinado ? '#A4A4A4' : '#FF93B5',}}
        >
          <IconIsto name='injection-syringe' style={[iconsStyle.icons, {color: !vacinado ? '#A4A4A4' :'#FF93B5'}]} />
          <Text style={[iconsStyle.text, {color: !vacinado ? '#A4A4A4' :'#FF93B5'}]}>Vacinado</Text>
        </IconBox>

        {/* Castrado Icon */}
        <IconBox
          onPress={() => (!castrado ? setCastrado(true): setCastrado(false))}
          style={{borderColor: !castrado ? '#A4A4A4' : '#FF93B5',}}
        >
          <Icon name='pets' style={[iconsStyle.icons, {color: !castrado ? '#A4A4A4' :'#FF93B5'}]}/>
          <Text style={[iconsStyle.text, {color: !castrado ? '#A4A4A4' :'#FF93B5'}]}>Castrado</Text>
        </IconBox>

        {/* Vermifugado Icon */}
        <IconBox
          onPress={() => (!vermifugado ? setVermifugado(true): setVermifugado(false))}
          style={{borderColor: !vermifugado ? '#A4A4A4' : '#FF93B5',}}
        >
          <IconIsto name='drug-pack' style={[iconsStyle.icons, {color: !vermifugado ? '#A4A4A4' :'#FF93B5'}]}/>
          <Text style={[iconsStyle.text, {color: !vermifugado ? '#A4A4A4' :'#FF93B5'}]}>Vermifugado</Text>
        </IconBox>

        {/* Chipado Icon */}
        <IconBox
          onPress={() => (!chipado ? setChipado(true): setChipado(false))}
          style={{borderColor: !chipado ? '#A4A4A4' : '#FF93B5',}}
        >
          <IconIO name='hardware-chip-outline' style={[iconsStyle.icons, {color: !chipado ? '#A4A4A4' :'#FF93B5'}]} />
          <Text style={[iconsStyle.text, {color: !chipado ? '#A4A4A4' :'#FF93B5'}]}>Chipado</Text>
        </IconBox>

      </IconContainer>

      <SubmitButton style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Cadastrar Pet</Text>
      </SubmitButton>
      </Form>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontFamily: "Ubuntu-Bold",
    fontSize: 18,
    color: '#4B4B4B',
  },
  clean: {
    fontFamily: "Ubuntu",
    fontSize: 18,
    color: '#FF93B5'
  },
  radioButtonContainer: {
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
  }
});

const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    width: 177,
    color: "#a4a4a4",
  },
});

const iconsStyle = StyleSheet.create({
  icons: {
    alignSelf: 'center',
    fontSize: 50,
  },
  text: {
    alignSelf: 'center',
    fontFamily: 'Ubuntu',
  }
})
export default CreatePet;



