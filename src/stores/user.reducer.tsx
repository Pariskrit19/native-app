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

const initialState: {
  isLoading: Boolean,
  isAuthenticated: Boolean,
  userDetail: any,
  users: any
} = {
  isLoading: false,
  isAuthenticated: false,
  userDetail: {
    email: 'abcd',
    password: 'abcd'
  },
  users: []
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    authenticate: (state, action) => {
      state.isAuthenticated = true;
      state.userDetail = action.payload
    },
    onLogout: (state) => {
      state.isAuthenticated = false
    },
    saveUser: (state, action) => {
      state.users = [...state.users, action.payload]
    }

  },

});



export default userSlice.reducer;

export const { authenticate, onLogout, saveUser } = userSlice.actions;

