import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch categories
export const fetchCategories = createAsyncThunk(
  'products/fetchCategories',
  async () => {
    const res = await axios.get(
      'https://dummyjson.com/products/categories'
    );
    return res.data;
  }
);

// Fetch products
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (category) => {
    const url =
      category === 'all'
        ? 'https://dummyjson.com/products?limit=100'
        : `https://dummyjson.com/products/category/${category}`;

    const res = await axios.get(url);
    return res.data.products;
  }
);

const productslice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    categories: [],
    selectedCategory: 'all',
    loading: false,
    error: null
  },
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
        state.error = 'Failed to load products';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      });
  }
});

export const { setCategory } = productslice.actions;
export default productslice.reducer;
