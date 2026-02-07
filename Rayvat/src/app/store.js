import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../slice/productslice';
import cartReducer from '../slice/cartslice';
import authReducer from '../slice/authslice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    cart: cartReducer
  }
});
