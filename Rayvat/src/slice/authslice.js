// src/slice/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authslice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null,
    error: null,
  },
  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload;

      if (username === 'kminchelle' && password === '0lelplR') {
        state.isAuthenticated = true;
        state.user = { username };
        state.error = null;
      } else {
        state.error = 'Invalid credentials';
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    },
  },
});

export const { login, logout } = authslice.actions;
export default authslice.reducer;
