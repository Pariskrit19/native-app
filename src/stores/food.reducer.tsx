import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  PayloadAction,
} from '@reduxjs/toolkit';

interface favouriteType { id: number, name: string, price: number }
const initialState: { favourites: favouriteType[], carts: any[], search: string } = {
  favourites: [],
  carts: [],
  search: 'a'
}

const foodSlice = createSlice({
  name: 'foods',
  initialState,
  reducers: {
    setFavouriteFoods: (state, action: PayloadAction<favouriteType>) => {

      const isFavourited = state.favourites.findIndex(favourite => favourite.id === action.payload.id) >= 0
      if (isFavourited)
        state.favourites = state.favourites.filter(favourite => favourite.id !== action.payload.id)
      else
        state.favourites.push(action.payload)


    },
    addToCart: (state, action: PayloadAction<any>) => {
      const isAlreadyInCart = state.carts.findIndex(cart => cart.id === action.payload.id) >= 0

      if (isAlreadyInCart)
        state.carts = state.carts.filter(cart => cart.id !== action.payload.id)

      else
        state.carts.push(action.payload)
    },
    setSearch: (state, action: PayloadAction<any>) => {
      state.search = action.payload
    }

  }
})

export default foodSlice.reducer;

export const { setFavouriteFoods, addToCart, setSearch } = foodSlice.actions;
