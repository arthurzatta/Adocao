import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

export default reducers => {
  const persistedReducer = persistReducer({
    key: 'adocao',
    storage: AsyncStorage,
    whitelist: ['auth', 'user'],
  }, reducers);

  return persistedReducer;
};
