import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://64e1615450713530432d1458.mockapi.io';

export const fetchPhones = createAsyncThunk(
  'phones/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      console.log(thunkAPI.getState());
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addPhone = createAsyncThunk(
  'phones/addPhone',
  async (contactAdd, thunkAPI) => {
    console.log(contactAdd);
    try {
      const response = await axios.post('/contacts', contactAdd);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deletePhone = createAsyncThunk(
  'phones/deletePhone',
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${taskId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
