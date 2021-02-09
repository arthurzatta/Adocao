import { all, call, put, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '../../../services/api';

import { createUserFailure, createUserSuccess } from './actions';

export function* createUser({ payload }) {
  try {
    const response = yield call(api.post, '/register', {
      ...payload.data,
      latitude: 1234,
      longitude: 4123
    });

    const { user } = response.data;

    if (!user) {
      Alert.alert('Erro com os dados', 'Deu ruim irmão');
    }

    yield put(createUserSuccess(user));
  } catch (err) {
    Alert.alert('Falha ao criar conta', 'Houve um erro ao criar usuário')
    yield put(createUserFailure());
  }
}

export default all([
  takeLatest('@user/CREATE_USER_REQUEST', createUser),
]);
