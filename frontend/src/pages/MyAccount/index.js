import axios from "axios";
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import RNPickerSelect from 'react-native-picker-select';
import IconImage from 'react-native-vector-icons/EvilIcons';
import { launchImageLibrary } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import api from '../../services/api';
import Background from '../../Components/Background';
import { updateProfileRequest } from '../../store/modules/user/actions';
import { Header, Form, FormInput, SubmitButton, TLabel, Title } from './styles';


const MyAccount = ({ navigation }) => {
  const ufPlaceholder = {
    label: "UF",
    value: null,
  }

  const cityPlaceholder = {
    label: "Cidade",
    value: null,
  }

  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);

  const [ufs, setUfs] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedUf, setSelectedUf] = useState(user.state);
  const [selectedCity, setSelectedCity] = useState(user.city);

  const [name, setName] = useState(user.name);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [address, setAdress] = useState(user.address);

  const [photo, setPhoto] = useState({});

  useEffect(() => {
    axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then((res) => {
      const ufInitials = res.data.map((uf) => {
        const select = {
          label: uf.sigla,
          value: uf.sigla,
        };
        return select;
      });

      setUfs(ufInitials);
    });
  }, []);

  useEffect(() => {
    if (selectedUf === "0") {
      return;
    }
    axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`).then((res) => {
      const cities = res.data.map((city) => {
        const select = {
          label: city.nome,
          value: city.nome,
        };
        return select;
      });

      setCities(cities);
    });
  }, [selectedUf]);


  function handleSubmit() {
    const image = processUpload(photo)

    const data = {
      name,
      email,
      password,
      image,
      phone,
      address,
      state: selectedUf,
      city: selectedCity,
    }

    // dispatch(updateProfileRequest(data))
  }

  function handlePhoto() {
    launchImageLibrary({
      mediaType: 'photo',
      saveToPhotos: true,
    }, imagePickerCallback);

  }

  function imagePickerCallback(data) {
    setPhoto(data);
  }

  function processUpload(file) {
    const upload = {
      file,
      uri: file.uri,
      name: file.fileName,
      type: file.type
    }

    const formData = new FormData();

    formData.append('file', upload);

    const response = api.post('/files', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return 1;
  }

  return (
    <Background >
      <Header>
        <Icon name="arrow-left-thick" size={22} color={'#fff'} onPress={() => navigation.navigate('Tabs')} />
        <Title>Meus dados</Title>
      </Header>

      <Form style={styles.form}>
        <TLabel>Nome: </TLabel>
        <FormInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder=""
          value={name}
          onChangeText={setName}
        />

        <TLabel>Email: </TLabel>
        <FormInput
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          placeholder=""
          value={email}
          onChangeText={setEmail}
        />

        <TLabel>Carregar uma foto: </TLabel>
        <View>
          <FormInput
            placeholder=""
            value={photo.fileName}
          />
          <IconImage name="image" size={57} color={'#FF93B5'} style={styles.iconImage} onPress={() => handlePhoto()} />
        </View>

        <TLabel>Número de celular: </TLabel>
        <FormInput
          placeholder=""
          value={phone}
          onChangeText={setPhone}
        />

        <View style={styles.pickerContainer}>
          <View>
            <TLabel>Estado: </TLabel>

            <RNPickerSelect
              style={pickerSelectStyles}
              placeholder={ufPlaceholder}
              onValueChange={(value) => { setSelectedUf(value) }}
              items={ufs}
              value={selectedUf}
            />
          </View>
          <View>
            <TLabel>Cidade: </TLabel>
            <RNPickerSelect
              style={pickerSelectStyles}
              onValueChange={(value) => { setSelectedCity(value) }}
              placeholder={cityPlaceholder}
              items={cities}
              value={selectedCity}
            />
          </View>
        </View>

        <TLabel>Endereço: </TLabel>
        <FormInput
          placeholder=""
          value={address}
          onChangeText={setAdress}
        />

        <TLabel>Senha: </TLabel>
        <FormInput
          autoCapitalize="none"
          secureTextEntry
          placeholder="******"
          value={password}
          onChangeText={setPassword}
        />

        <SubmitButton style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Salvar alteração</Text>
        </SubmitButton>
      </Form>
    </Background >
  )
}

const styles = StyleSheet.create({
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 30,
    color: '#fff',
    alignSelf: 'flex-start'
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  baseTerm: {
    fontFamily: 'Roboto-Regular',
    fontSize: 11,
    color: '#a4a4a4',
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 10,
  },
  innerTerm: {
    color: '#FF93B5',
    fontFamily: 'Roboto-Medium'
  },
  subtitle: {
    fontFamily: 'Ubuntu-Medium',
    fontSize: 18,
    color: '#fff',
    alignSelf: 'flex-start'
  },
  form: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  iconImage: {
    position: 'absolute',
    alignSelf: 'flex-end',
    paddingRight: 5,
    backgroundColor: 'rgba(246, 246, 246, 1)',
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

export default MyAccount;
