import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';

import { loadingPetsSuccess, filterPetsSuccess } from './actions';

export function* loadingPets({ payload }) {
  const { token, owner } = payload.data;

  try {
    api.defaults.headers.Authorization = `Bearer ${token}`;

    const response = yield call(api.get, '/pets', {
      headers: {
        owner,
      },
    });

    yield put(loadingPetsSuccess(response.data));
  } catch (err) {
    Alert.alert(
      'Falha no carregamento de pets',
      'Não foi possível carregar os pets'
    );
  }
}

export function* filterPets({ payload }) {
  const data = payload.data;

  try {
    const response = yield call(api.post, '/pets/filter', data );

    yield put(filterPetsSuccess(response.data));
  } catch (err) {
    Alert.alert(
      'Falha no carregamento de pets',
      'Não foi possível carregar os pets'
    );
  }
}

export default all([
  takeLatest('@pets/LOADING_PETS', loadingPets),
  takeLatest('@pets/FILTER_PETS', filterPets)
]);
