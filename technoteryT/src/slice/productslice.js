import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// FETCH PRODUCTS
export const fetchProducts = createAsyncThunk(
    'product/fetchProducts',
    async () => {
        const res = await fetch('https://dummyjson.com/products')
        const data = await res.json()
        return data.products
    }
)

const productslice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        loading: false,
        error: null,
    },
    reducers: {
        // ADD PRODUCT
        addProduct: (state, action) => {
            state.products.unshift({
                id: Date.now(),
                ...action.payload
            });
        },


        // DELETE PRODUCT
        deleteProduct: (state, action) => {
            state.products = state.products.filter(
                (item) => item.id !== action.payload
            )
        },

        // UPDATE PRODUCT
        updateProduct: (state, action) => {
            const index = state.products.findIndex(
                (item) => item.id === action.payload.id
            )
            if (index !== -1) {
                state.products[index] = action.payload
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false
                state.products = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    },
})

export const { addProduct, deleteProduct, updateProduct } = productslice.actions

export default productslice.reducer
