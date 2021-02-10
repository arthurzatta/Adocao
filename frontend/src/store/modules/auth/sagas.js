import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';
import { signFailure, signInSuccess } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, '/sessions', { email, password });

    const { token, user } = response.data;

    if (!user) {
      Alert.alert('Erro no login', 'Não existe esse usuário');
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));
  } catch (err) {
    Alert.alert('Falha na autenticação', 'Houve um erro no login')
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const response = yield call(api.post, '/register', {
      ...payload.user,
      latitude: 1234,
      longitude: 4123
    });

    const { user } = response.data;

    if (!user) {
      Alert.alert('Verifique os dados', 'Erro ao criar sua conta');
    }

  } catch (err) {
    Alert.alert('Falha ao criar conta', 'Houve um erro ao criar usuário')
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
}

export default all([
  takeLatest('@persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
