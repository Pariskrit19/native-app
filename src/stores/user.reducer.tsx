import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  PayloadAction,
} from '@reduxjs/toolkit';
import { getUser } from '../api/fakeApiUser';

export const fetchUser = createAsyncThunk('user/getUser', async () => {
  const response = await getUser();
  return response.data;
});



const userAdapter = createEntityAdapter();



const userSlice = createSlice({
  name: 'user',
  initialState: userAdapter.getInitialState({
    isLoading: false,
    isAuthenticated: false,
    authenticationDetails: {
      email: 'abcd',
      password: 'abcd'
    }
  }),
  reducers: {

    authenticate: (state) => {
      state.isAuthenticated = true
    },
    onLogout: (state) => {
      state.isAuthenticated = false
    }

  },

});



export default userSlice.reducer;

export const { authenticate, onLogout } = userSlice.actions;

