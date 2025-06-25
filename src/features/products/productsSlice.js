
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts as fetchProductsAPI } from '../../services/api';

export const fetchProducts = createAsyncThunk(
  'products/fetchAll',
  async () => {
    try {
      const response = await fetchProductsAPI();
      return response.data;
    } catch (error) {
      throw error.response?.data?.message || error.message;
    }
  }
);


const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
      });
  }
});

export default productsSlice.reducer;