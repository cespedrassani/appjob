import { AsyncStorage } from 'react-native';
import api from '../services/api';

export const TOKEN_KEY = "@RocketSeat:token";

export const onSignIn = async (valores) => {
  state = {
    errorMessage: null,
    nome: null,
    token: null,
  };
  try {
    const response = await api.post('/empregador/autenticacao', {
      email: valores.email,
      senha: valores.senha
    });
  
    console.log('onsign response:' + response.api);
    AsyncStorage.multiSet([
      ['@api:token', token],
      ['@api:nome', nome]
    ]);
    return { nome, token } = response.api;
  } catch(e) {
    this.setState({errorMessage: response.data.error })
  }
  return errorMessage;
}

export const onSignOut = () => AsyncStorage.removeItem(TOKEN_KEY);

export const isSignedIn = async () => {
  const token = await AsyncStorage.getItem(TOKEN_KEY);

  return (token !== null) ? true : false;
};