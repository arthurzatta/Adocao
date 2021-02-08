import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import axios from "axios";

import { Container, Form, FormInput, SubmitButton, TLabel } from './styles';
import Background from '../../Components/Background';


const Login = ({ navigation }) => {
  const ufPlaceholder = {
    label: "UF",
    value: null,
  }

  const cityPlaceholder = {
    label: "Cidade",
    value: null,
  }

  const [ufs, setUfs] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedUf, setSelectedUf] = useState("0");
  const [selectedCity, setSelectedCity] = useState("0");

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

  return (
    <Background>
      <Container>
        <Text style={styles.title}>Registrar</Text>
        <Text style={styles.subtitle}>Registre-se para continuar</Text>
      </Container>
      <Form style={styles.form}>
        <TLabel>Nome: </TLabel>
        <FormInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder=""
        />

        <TLabel>Email: </TLabel>
        <FormInput
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          placeholder=""
        />

        <TLabel>Número de celular: </TLabel>
        <FormInput
          placeholder=""
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

        <TLabel>Senha: </TLabel>
        <FormInput
          autoCapitalize="none"
          secureTextEntry
          placeholder="******"
        />

        <SubmitButton style={styles.button} onPress={() => { }}>
          <Text style={styles.buttonText}>Criar conta</Text>
        </SubmitButton>

        <Text style={styles.baseTerm}>
          Ao criar conta você concorda com nossos <Text style={styles.innerTerm}>Termos e Condições</Text>
        </Text>

      </Form>
    </Background>
  );
}

const styles = StyleSheet.create({
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
    fontSize: 12,
    color: '#a4a4a4',
    marginTop: 10,
    width: 395,
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

export default Login;
