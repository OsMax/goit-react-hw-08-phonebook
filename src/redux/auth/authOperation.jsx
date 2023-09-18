import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const tokenSet = token => {
  // console.log(token);
  axios.defaults.headers.common.authorization = token;
};

export const register = createAsyncThunk('auth/register', async credential => {
  try {
    const { data } = await axios.post('/users/signup', credential);
    tokenSet(`Bearer ${data.token}`);
    return data;
  } catch (error) {}
});

export const login = createAsyncThunk('auth/login', async credential => {
  try {
    const { data } = await axios.post('/users/login', credential);
    tokenSet(`Bearer ${data.token}`);
    return data;
  } catch (error) {}
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    tokenSet('');
  } catch (error) {}
});

export const current = createAsyncThunk('auth/current', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  if (!state.auth.token) return;

  tokenSet(`Bearer ${state.auth.token}`);
  try {
    const { data } = await axios.get('/users/current');
    return data;
  } catch (error) {}
});
