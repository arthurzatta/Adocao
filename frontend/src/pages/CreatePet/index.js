import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconIO from 'react-native-vector-icons/Ionicons';
import IconIsto from 'react-native-vector-icons/Fontisto';

import { SubmitButton, FormInput, TLabel, Header, Form, IconBox, IconContainer } from './styles';

const CreatePet = ({ navigation }) => {
  const [nameOwner, setNameOwner] = useState('');
  const [sex, setSex] = useState('true');
  const [type, setType] = useState('');

  //Estados dos icones
  const [vacinado, setVacinado] = useState(false);
  const [castrado, setCastrado] = useState(false);
  const [vermifugado, setVermifugado] = useState(false);
  const [chipado, setChipado] = useState(false);

  function submitButton(){

  }

  return (
    <View style={styles.container}>
      <Form style={styles.form}>
        <Header>
          <Text style={styles.title}>Criar</Text>
          <Text style={styles.clean}>Limpar</Text>
        </Header>

        <TLabel>Nome do pet:</TLabel>
        <FormInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder=""
          value={nameOwner}
          onChangeText={setNameOwner}
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
            onPress={() => (!vacinado ? setVacinado(true) : setVacinado(false))}
            style={{ borderColor: !vacinado ? '#A4A4A4' : '#FF93B5', }}
          >
            <IconIsto name='injection-syringe' style={[iconsStyle.icons, { color: !vacinado ? '#A4A4A4' : '#FF93B5' }]} />
            <Text style={[iconsStyle.text, { color: !vacinado ? '#A4A4A4' : '#FF93B5' }]}>Vacinado</Text>
          </IconBox>

          {/* Castrado Icon */}
          <IconBox
            onPress={() => (!castrado ? setCastrado(true) : setCastrado(false))}
            style={{ borderColor: !castrado ? '#A4A4A4' : '#FF93B5', }}
          >
            <Icon name='pets' style={[iconsStyle.icons, { color: !castrado ? '#A4A4A4' : '#FF93B5' }]} />
            <Text style={[iconsStyle.text, { color: !castrado ? '#A4A4A4' : '#FF93B5' }]}>Castrado</Text>
          </IconBox>

          {/* Vermifugado Icon */}
          <IconBox
            onPress={() => (!vermifugado ? setVermifugado(true) : setVermifugado(false))}
            style={{ borderColor: !vermifugado ? '#A4A4A4' : '#FF93B5', }}
          >
            <IconIsto name='drug-pack' style={[iconsStyle.icons, { color: !vermifugado ? '#A4A4A4' : '#FF93B5' }]} />
            <Text style={[iconsStyle.text, { color: !vermifugado ? '#A4A4A4' : '#FF93B5' }]}>Vermifugado</Text>
          </IconBox>

          {/* Chipado Icon */}
          <IconBox
            onPress={() => (!chipado ? setChipado(true) : setChipado(false))}
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
