import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { SubmitButton, FormInput, TLabel, Header, Form } from './styles';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconImage from 'react-native-vector-icons/EvilIcons';
import { launchImageLibrary } from 'react-native-image-picker';
import api from '../../services/api';

export default function CreatePet({ navigation }) {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [sex, setSex] = useState(true);
  const [photo, setPhoto] = useState({});

  const user = useSelector(state => state.user.user);

  const [coordinates, setCoordinates] = useState({
    latitude: Number(user.latitude),
    longitude: Number(user.longitude)
  });


  async function submitButton() {
    try {
      const { latitude, longitude } = coordinates;
      if (!name) {
        return;
      }

      const uri = await processUpload(photo);

      const data = {
        name,
        description,
        sex: sex ? 'M' : 'F',
        latitude,
        image: uri,
        longitude,
        id_user: user.id
      }

      const response = await api.post('/lost/create', data);
      const { id } = response.data;
      navigation.navigate('LostPet', { id });

    } catch (err) {
      console.log(err);
      Alert.alert('Falha na doação', 'Não foi possivel doar o pet, insira todos os dados corretamente');
    }
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

  async function processUpload(file) {
    const upload = {
      file,
      uri: file.uri,
      name: file.fileName,
      type: file.type
    }

    const formData = new FormData();

    formData.append('file', upload);

    const response = await api.post('/files', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    return response.data;
  }

  return (
    <View style={styles.container}>
      <Form style={styles.form}>
        <Header>
          <View style={styles.closeCreate}>
            <Icon name='close' style={styles.closeIcon} onPress={() => navigation.pop()} />
            <Text style={styles.title}>Criar alerta</Text>
          </View>
        </Header>

        <TLabel>Nome do pet:</TLabel>
        <FormInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder=""
          value={name}
          onChangeText={setName}
        />

        <TLabel>Description</TLabel>
        <FormInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder=""
          value={description}
          onChangeText={setDescription}
        />

        <TLabel>Carregar uma foto: </TLabel>
        <View>
          <FormInput
            placeholder=""
            value={photo.fileName}
          />
          <IconImage name="image" size={57} color={'#FF93B5'} style={styles.iconImage} onPress={() => handlePhoto()} />
        </View>


        <View style={styles.radioContainer}>
          <TLabel>Sexo:</TLabel>
          <TLabel>Macho</TLabel>
          <RadioButton.Item
            color={'#FF93B5'}
            value={'true'}
            style={{ marginTop: 15 }}
            status={sex ? 'checked' : 'unchecked'}
            onPress={() => setSex(true)}
          />
          <TLabel>Fêmea</TLabel>
          <RadioButton.Item
            color={'#FF93B5'}
            style={{ marginTop: 15 }}
            value={'false'}
            status={!sex ? 'checked' : 'unchecked'}
            onPress={() => setSex(false)}
          />
        </View>

        <TLabel>Marque no mapa a última vez que o pet foi visto:</TLabel>
        <View style={mapStyle.container}>
          <View style={mapStyle.subContainer}>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={mapStyle.map}
              region={{
                latitude: coordinates.latitude,
                longitude: coordinates.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              rotateEnabled={false}
              showsTraffic={false}
              zoomTapEnabled={false}
              pitchEnabled={false}
              showsCompass={false}
              onPress={e => setCoordinates(e.nativeEvent.coordinate)}
            >
              <Marker coordinate={coordinates} />
            </MapView>
          </View>
        </View>
        <SubmitButton style={styles.button} onPress={submitButton}>
          <Text style={styles.buttonText}>Alertar</Text>
        </SubmitButton>
      </Form>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    flexDirection: 'column',
  },
  iconImage: {
    position: 'absolute',
    alignSelf: 'flex-end',
    paddingRight: 5,
  },
  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    color: '#4B4B4B',
  },
  closeIcon: {
    fontSize: 30,
    marginRight: 5,
    color: '#FF93B5',
  },
  closeCreate: {
    flexDirection: 'row',
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

const mapStyle = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
    height: 300
  },
  subContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
